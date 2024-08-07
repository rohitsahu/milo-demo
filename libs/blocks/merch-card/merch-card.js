import { decorateButtons, decorateBlockHrs } from '../../utils/decorate.js';
import { getConfig, createTag, loadStyle } from '../../utils/utils.js';
import { getMetadata } from '../section-metadata/section-metadata.js';
import { processTrackingLabels } from '../../martech/attributes.js';
import { replaceKey } from '../../features/placeholders.js';
import '../../deps/merch-card.js';
import { ButtonWrapper } from './button-wrapper.js';

const TAG_PATTERN = /^[a-zA-Z0-9_-]+:[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-].*$/;

const SEGMENT = 'segment';
const SPECIAL_OFFERS = 'special-offers';
const PLANS = 'plans';
const CATALOG = 'catalog';
const PRODUCT = 'product';
const MINI_COMPARE_CHART = 'mini-compare-chart';
const TWP = 'twp';
const CARD_TYPES = [
  SEGMENT,
  SPECIAL_OFFERS,
  PLANS,
  CATALOG,
  PRODUCT,
  'inline-heading',
  'image',
  MINI_COMPARE_CHART,
  TWP,
];

const CARD_SIZES = ['wide', 'super-wide'];

const SLOT_MAP_DEFAULT = {
  H5: 'promo-text',
  H4: 'body-xxs',
  H3: 'heading-xs',
  H2: 'heading-m',
};

const SLOT_MAP = { 'special-offers': { H5: 'detail-m' } };

const HEADING_MAP = {
  'special-offers': {
    H5: 'H4',
    H3: 'H3',
  },
};

const INNER_ELEMENTS_SELECTOR = 'h2, h3, h4, h5, h6, p, ul, em';

const MULTI_OFFER_CARDS = [PLANS, PRODUCT, MINI_COMPARE_CHART, TWP];
// Force cards to refresh once they become visible so that the footer rows are properly aligned.
const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.target.clientHeight === 0) return;
    intersectionObserver.unobserve(entry.target);
    entry.target.requestUpdate();
  });
});

const getPodType = (styles) => styles?.find((style) => CARD_TYPES.includes(style));

const isHeadingTag = (tagName) => /^H[2-5]$/.test(tagName);
const isParagraphTag = (tagName) => tagName === 'P';

const appendSlot = (slotEls, slotName, merchCard, nodeName = 'p') => {
  if (slotEls.length === 0 || merchCard.variant !== MINI_COMPARE_CHART) return;
  const newEl = createTag(
    nodeName,
    { slot: slotName, class: slotName },
  );
  slotEls.forEach((e) => {
    newEl.innerHTML += e.innerHTML;
  });
  merchCard.append(newEl);
};

export async function loadMnemonicList(foreground) {
  try {
    const { base } = getConfig();
    const stylePromise = new Promise((resolve) => {
      loadStyle(`${base}/blocks/mnemonic-list/mnemonic-list.css`, resolve);
    });
    const loadModule = import(`${base}/blocks/mnemonic-list/mnemonic-list.js`)
      .then(({ decorateMnemonicList }) => decorateMnemonicList(foreground));
    await Promise.all([stylePromise, loadModule]);
  } catch (err) {
    window.lana?.log(`Failed to load mnemonic list module: ${err}`);
  }
}

function extractQuantitySelect(el) {
  const quantitySelectConfig = [...el.querySelectorAll('ul')]
    .find((ul) => ul.querySelector('li')?.innerText?.includes('Quantity'));
  const configMarkup = quantitySelectConfig?.querySelector('ul');
  if (!configMarkup) return null;
  const config = configMarkup.children;
  if (config.length !== 2) return null;
  const attributes = {};
  attributes.title = config[0].textContent.trim();
  const values = config[1].textContent.split(',')
    .map((value) => value.trim())
    .filter((value) => /^\d*$/.test(value))
    .map((value) => (value === '' ? undefined : Number(value)));
  quantitySelectConfig.remove();
  if (![3, 4, 5].includes(values.length)) return null;
  import('../../deps/merch-quantity-select.js');
  [attributes.min, attributes.max, attributes.step, attributes['default-value'], attributes['max-input']] = values;
  const quantitySelect = createTag('merch-quantity-select', attributes);
  return quantitySelect;
}

const parseTwpContent = async (el, merchCard) => {
  const quantitySelect = extractQuantitySelect(el);
  if (quantitySelect) {
    merchCard.append(quantitySelect);
  }
  let allElements = el?.children[0]?.children[0]?.children;
  if (!allElements?.length) return;
  allElements = [...allElements];
  const contentGroups = allElements.reduce((acc, curr) => {
    if (curr.tagName.toLowerCase() === 'p' && curr.textContent.trim() === '--') {
      acc.push([]);
    } else {
      acc[acc.length - 1].push(curr);
    }
    return acc;
  }, [[]]);

  contentGroups.forEach((group, index) => {
    if (index === 0) { // Top section
      const headings = group.filter((e) => e.tagName.toLowerCase() === 'h3');
      const topBody = group.filter((e) => e.tagName.toLowerCase() === 'p');
      appendSlot(headings, 'heading-xs', merchCard);
      appendSlot(topBody, 'body-xs-top', merchCard);
    } else if (index === 1) { // Body section
      const content = group.filter((e) => e.tagName.toLowerCase() === 'p' || e.tagName.toLowerCase() === 'ul');
      const bodySlot = createTag('div', { slot: 'body-xs' }, content);
      merchCard.append(bodySlot);
    } else if (index === 2) { // Footer section
      const footerContent = group.filter((e) => ['h5', 'p'].includes(e.tagName.toLowerCase()));
      const footer = createTag('div', { slot: 'footer' }, footerContent);
      merchCard.append(footer);
    }
  });

  const offerSelection = el.querySelector('ul');
  if (offerSelection) {
    const { initOfferSelection } = await import('./merch-offer-select.js');
    await initOfferSelection(merchCard, offerSelection);
  }
};

const parseContent = async (el, merchCard) => {
  let bodySlotName = `body-${merchCard.variant !== MINI_COMPARE_CHART ? 'xs' : 'm'}`;
  let headingMCount = 0;

  if (merchCard.variant === MINI_COMPARE_CHART) {
    bodySlotName = 'body-m';
    const priceSmallType = el.querySelectorAll('h6');
    appendSlot(priceSmallType, 'price-commitment', merchCard);
  }

  let headingSize = 3;
  const bodySlot = createTag('div', { slot: bodySlotName });
  const mnemonicList = el.querySelector('.mnemonic-list');
  if (mnemonicList) {
    await loadMnemonicList(mnemonicList);
  }
  const innerElements = [
    ...el.querySelectorAll(INNER_ELEMENTS_SELECTOR),
  ];
  innerElements.forEach((element) => {
    let { tagName } = element;
    if (isHeadingTag(tagName)) {
      element.classList.add('editable');
      element.classList.add('addable');
      element.classList.add('removable');
      let slotName = SLOT_MAP[merchCard.variant]?.[tagName] || SLOT_MAP_DEFAULT[tagName];
      if (slotName) {
        if (['H2', 'H3', 'H4', 'H5'].includes(tagName)) {
          element.classList.add('card-heading');
          if (merchCard.badgeText) {
            element.closest('div[role="tabpanel"')?.classList.add('badge-merch-cards');
          }
          if (HEADING_MAP[merchCard.variant]?.[tagName]) {
            tagName = HEADING_MAP[merchCard.variant][tagName];
          } else {
            if (tagName === 'H2') {
              headingMCount += 1;
            }
            if (headingMCount === 2 && merchCard.variant === MINI_COMPARE_CHART) {
              slotName = 'heading-m-price';
            }
            tagName = `H${headingSize}`;
            headingSize += 1;
          }
        }
        element.setAttribute('slot', slotName);

        const newElement = createTag(tagName);
        Array.from(element.attributes).forEach((attr) => {
          newElement.setAttribute(attr.name, attr.value);
        });
        newElement.innerHTML = element.innerHTML;
        merchCard.append(newElement);
      }
      return;
    } else if (tagName ==='H6' && element.firstElementChild?.tagName === 'EM') {
      element.classList.add('editable');
      const calloutSlot = createTag('div', { slot: 'callout-text' });
      const calloutContentWrapper = createTag('div', { class: 'callout-content-wrapper' });
      const calloutContent = createTag('div', { class: 'callout-content' });
      const emElement = element.firstElementChild;
      let imgElement = null;
      const children = Array.from(emElement.childNodes);
      for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (child.nodeType === Node.ELEMENT_NODE && child.tagName === 'A' && child.innerText.trim() === '#ICON'){
              const hrefParts = child.getAttribute('href').split('#');
              const tooltipText = hrefParts[1];
              const imgSrc = hrefParts[0];
              imgElement = document.createElement('img');
              imgElement.src = imgSrc;
              imgElement.title = tooltipText;
              imgElement.className = 'callout-icon';
              imgElement.style.width = '16px';
              imgElement.style.height = '16px';
              child.parentNode.removeChild(child);
          } else {
              calloutContent.append(child.cloneNode(true));
          }
      }
      calloutContentWrapper.append(calloutContent);
      if (imgElement) {
          calloutContentWrapper.append(imgElement);
      }
      calloutSlot.append(calloutContentWrapper);
      merchCard.append(calloutSlot);
      return;
    }
    if (isParagraphTag(tagName)) {
      element.classList.add('editable');
      bodySlot.append(element);
      merchCard.append(bodySlot);
    }
    if (mnemonicList) bodySlot.append(mnemonicList);
  });

  if (merchCard.variant === MINI_COMPARE_CHART && merchCard.childNodes[1]) {
    merchCard.insertBefore(bodySlot, merchCard.childNodes[1]);
  }
};

const getBadgeStyle = (badgeMetadata) => {
  const badgeStyleRegex = /^#[0-9a-fA-F]+, #[0-9a-fA-F]+$/;
  if (!badgeStyleRegex.test(badgeMetadata[0]?.innerText)) return null;
  const style = badgeMetadata[0].innerText;
  const badgeBackgroundColor = style.split(',')[0].trim();
  const badgeColor = style.split(',')[1].trim();
  const badgeWrapper = badgeMetadata[0].parentNode;
  const badgeText = badgeMetadata[1].innerText;
  badgeWrapper.remove();
  return { badgeBackgroundColor, badgeColor, badgeText };
};

const getActionMenuContent = (el) => {
  const actionMenuContentWrapper = [...el.children].find((child) => child.querySelector('ul') && child.querySelector('h2') === null);
  if (!actionMenuContentWrapper) return undefined;
  actionMenuContentWrapper.remove();
  return actionMenuContentWrapper?.firstElementChild;
};

const extractTags = (container) => [...container.querySelectorAll('p')]
  .map((tag) => tag.innerText?.trim())
  .filter((item) => TAG_PATTERN.test(item))
  .reduce((acc, item) => {
    const [, tag] = item.split(':');
    if (!tag) return acc;
    const parts = tag.split('/');
    if (!acc[parts[0]]) return acc;
    acc[parts[0]].push(parts.pop());
    return acc;
  }, { categories: ['all'], types: [] });

const addMerchCardGridIfMissing = (section, cardType) => {
  const el = section?.querySelector('.section-metadata');
  const directSection = section?.parentElement?.tagName === 'MAIN';
  if (el) {
    const metadata = getMetadata(el);
    let styleClasses = [];
    styleClasses = metadata?.style?.text?.split(',').map((token) => token.split(' ').join('-')) ?? [];
    if (!styleClasses.some((styleClass) => /-merch-card/.test(styleClass))) {
      if (styleClasses.some((styleClass) => /-up/.test(styleClass) || directSection)) {
        section.classList.add('three-merch-cards', cardType);
      }
    }
    section.classList.add(cardType);
    return true;
  }
  if (directSection) {
    section.classList.add('three-merch-cards', cardType);
  }
  return false;
};

const decorateMerchCardLinkAnalytics = (el) => {
  [...el.querySelectorAll('a')].forEach((link, index) => {
    const heading = el.querySelector('h3');
    const linkText = `${processTrackingLabels(link.textContent)}-${index + 1}`;
    const headingText = heading ? `${processTrackingLabels(heading.textContent)}` : '';
    const analyticsString = heading ? `${linkText}--${headingText}` : linkText;
    link.setAttribute('daa-ll', analyticsString);
  });
};

const addStock = (merchCard, styles) => {
  if (styles.includes('add-stock') && merchCard.variant !== TWP) {
    let stock;
    const selector = styles.includes('edu') ? '.merch-offers.stock.edu > *' : '.merch-offers.stock > *';
    const [label, ...rest] = [...document.querySelectorAll(selector)];
    if (label) {
      const offers = rest.filter(({ dataset: { wcsOsi } }) => wcsOsi);
      stock = { label: label?.innerText, offers: offers?.map((offer) => offer.dataset.wcsOsi).join(',') };
    }
    if (stock !== undefined) {
      merchCard.setAttribute('checkbox-label', stock.label);
      merchCard.setAttribute('stock-offer-osis', stock.offers);
    }
  }
};

const simplifyHrs = (el) => {
  const hrs = el.querySelectorAll('hr');
  hrs.forEach((hr) => {
    if (hr.parentElement.tagName === 'P') {
      hr.parentElement.replaceWith(hr);
    }
  });
};

const getMiniCompareChartFooterRows = (el) => {
  let footerRows = Array.from(el.children).slice(1);
  footerRows = footerRows.filter((row) => !row.querySelector('.footer-row-cell'));
  if (footerRows[0].firstElementChild.innerText === 'Alt-cta') {
    footerRows.splice(0, 2);
  }
  footerRows.forEach((row) => row.remove());
  return footerRows;
};

const decorateFooterRows = (merchCard, footerRows) => {
  if (footerRows) {
    const footerRowsSlot = createTag('div', { slot: 'footer-rows' });
    footerRows.forEach((row) => {
      const rowIcon = row.firstElementChild.querySelector('picture');
      const rowText = row.querySelector('div > div:nth-child(2)').innerHTML;
      const rowTextParagraph = createTag('div', { class: 'footer-row-cell-description' }, rowText);
      const footerRowCell = createTag('div', { class: 'footer-row-cell' });
      if (rowIcon) {
        rowIcon.classList.add('footer-row-icon');
        footerRowCell.appendChild(rowIcon);
      }
      footerRowCell.appendChild(rowTextParagraph);
      footerRowsSlot.appendChild(footerRowCell);
    });
    merchCard.appendChild(footerRowsSlot);
  }
};

const setMiniCompareOfferSlot = (merchCard, offers) => {
  if (merchCard.variant !== MINI_COMPARE_CHART) return;
  const miniCompareOffers = merchCard.querySelector('div[slot="offers"]');
  if (offers) {
    miniCompareOffers.append(offers);
  } else {
    miniCompareOffers.appendChild(createTag('p'));
  }
  merchCard.appendChild(miniCompareOffers);
};

export default async function init(el) {
  if (!el.querySelector(INNER_ELEMENTS_SELECTOR)) return el;
  const styles = [...el.classList];
  const cardType = getPodType(styles) || PRODUCT;
  if (!styles.includes(cardType)) {
    styles.push(cardType);
  }
  let section = el.closest('.section');
  if (section) {
    const merchCards = addMerchCardGridIfMissing(section, cardType);
    if (!merchCards) {
      if (section?.parentElement.classList.contains('fragment')) {
        const fragment = section.parentElement;
        const fragmentParent = fragment.parentElement;
        section.style.display = 'contents';
        fragment.style.display = 'contents';
        fragmentParent.style.display = fragmentParent.classList.contains('nested')
          ? fragmentParent.style.display
          : 'contents';
        section = fragmentParent.parentElement;
        addMerchCardGridIfMissing(section, cardType);
      }
    }
  }

  await Promise.all([
    import(`../../features/spectrum-web-components/dist/theme.js`),
    import(`../../features/spectrum-web-components/dist/button.js`),
    import(`../../features/spectrum-web-components/dist/icons-workflow.js`),
  ]);

  const app = createTag('sp-theme', { color: 'light', scale: 'medium' });
  const merchCard = createTag('merch-card', { class: styles.join(' '), 'data-block': '' }, '', { parent: app });
  merchCard.setAttribute('variant', cardType);
  merchCard.setAttribute('size', styles.find((style) => CARD_SIZES.includes(style)) || '');
  if (el.dataset.removedManifestId) {
    merchCard.dataset.removedManifestId = el.dataset.removedManifestId;
  }

  let tags = {};
  if (el.lastElementChild?.previousElementSibling?.querySelector('h3,h4,h5,h6')) {
    // tag section is available
    const nameSelector = 'h3,h4,h5,h6';
    const nameEl = el.lastElementChild.querySelector(nameSelector);
    if (nameEl) {
      merchCard.setAttribute('name', nameEl.textContent?.trim());
      nameEl.remove();
    }
    tags = extractTags(el.lastElementChild);
    if (tags.categories?.length > 1 || tags.types?.length > 0) {
    // this div contains tags, remove it from further processing.
      el.lastElementChild.remove();
    }
  }
  const { categories = ['all'], types = [] } = tags;
  if (el.firstElementChild) {
    const badgeMetadata = el.firstElementChild.querySelector('ul,h2') === null
  && el.firstElementChild.innerText.includes('#') ? el.firstElementChild : null;
    if (badgeMetadata !== null) {
      const badge = getBadgeStyle(badgeMetadata.children);
      if (badge !== null) {
        merchCard.setAttribute(
          'badge-background-color',
          badge.badgeBackgroundColor,
        );
        merchCard.setAttribute('badge-color', badge.badgeColor);
        merchCard.setAttribute('badge-text', badge.badgeText);
        merchCard.classList.add('badge-card');
      }
    }
  }
  let footerRows;
  if ([MINI_COMPARE_CHART, PLANS, SEGMENT].includes(cardType)) {
    intersectionObserver.observe(merchCard);
  }
  if (cardType === MINI_COMPARE_CHART) {
    footerRows = getMiniCompareChartFooterRows(el);
  }
  const allPictures = el.querySelectorAll('picture');
  const pictures = Array.from(allPictures).filter((picture) => !picture.closest('.mnemonic-list'));
  let image;
  const icons = [];
  pictures.forEach((img) => {
    const imgNode = img.querySelector('img');
    const { width, height } = imgNode;
    const isSquare = Math.abs(width - height) <= 10;
    if (img) {
      if (isSquare) {
        icons.push(img);
      } else {
        image = img;
      }
    }
  });
  const actionMenuContent = cardType === CATALOG
    ? getActionMenuContent(el)
    : null;
  if (actionMenuContent) {
    merchCard.setAttribute('action-menu', true);
    merchCard.append(
      createTag(
        'div',
        { slot: 'action-menu-content' },
        actionMenuContent.innerHTML,
      ),
    );
  }
  let ctas = el.querySelector('p > strong a, p > em a')?.closest('p');
  if (!ctas) {
    const candidate = el.querySelector('p:last-of-type');
    if (candidate?.querySelector('a')) {
      ctas = candidate;
    }
  }
  if (image !== undefined) {
    const imageSlot = createTag('div', { slot: 'bg-image' });
    imageSlot.appendChild(image);
    merchCard.appendChild(imageSlot);
  }
  if (!icons || icons.length > 0) {
    const iconImgs = Array.from(icons).map((icon) => {
      const img = {
        src: icon.querySelector('img').src,
        alt: icon.querySelector('img').alt,
        href: icon.closest('a')?.href ?? '',
      };
      return img;
    });
    iconImgs.forEach((icon) => {
      const merchIcon = createTag('merch-icon', { slot: 'icons', src: icon.src, alt: icon.alt, href: icon.href, size: 'l' });
      merchCard.appendChild(merchIcon);
    });
    icons.forEach((icon) => icon.remove());
  }

  addStock(merchCard, styles);
  if (styles.includes('secure')) {
    await replaceKey('secure-transaction', getConfig()).then((key) => merchCard.setAttribute('secure-label', key));
  }
  merchCard.setAttribute('filters', categories.join(','));
  merchCard.setAttribute('types', types.join(','));

  if (merchCard.variant !== TWP) {
    parseContent(el, merchCard);

    const footer = createTag('div', { slot: 'footer' });
    const editCardDiv = createTag('div', { class: 'edit-card-div', style: 'display: flex; gap: 16px;'});
    const hr = document.createElement('hr');
    hr.style.width = '100%';
    const editbutton = createTag('custom-button', { class: 'edit-card-button' });
    editCardDiv.append(editbutton);
    const ctasDiv = createTag('div');
    ctasDiv.style.width = '100%';
    ctasDiv.style.display = 'flex';
    ctasDiv.style.justifyContent = 'flex-end';
    ctasDiv.style.gap = '16px';
    
    if (ctas) {
      decorateButtons(ctas, (merchCard.variant === MINI_COMPARE_CHART) ? 'button-l' : undefined);
      ctasDiv.append(ctas);
    }

    footer.append(ctasDiv);
    footer.append(hr);
    footer.append(editCardDiv);
    merchCard.appendChild(footer);

    if (MULTI_OFFER_CARDS.includes(cardType)) {
      const quantitySelect = extractQuantitySelect(el);
      const offerSelection = el.querySelector('ul');
      if (merchCard.variant === MINI_COMPARE_CHART) {
        const miniCompareOffers = createTag('div', { slot: 'offers' });
        merchCard.append(miniCompareOffers);
      }
      if (offerSelection) {
        const { initOfferSelection } = await import('./merch-offer-select.js');
        setMiniCompareOfferSlot(merchCard, undefined);
        initOfferSelection(merchCard, offerSelection, quantitySelect);
      }
      if (quantitySelect) {
        if (merchCard.variant === MINI_COMPARE_CHART) {
          setMiniCompareOfferSlot(merchCard, quantitySelect);
        } else {
          const bodySlot = merchCard.querySelector('div[slot="body-xs"]');
          bodySlot.append(quantitySelect);
        }
      }
    }

    decorateBlockHrs(merchCard);
    simplifyHrs(merchCard);
    if (merchCard.classList.contains('has-divider')) merchCard.setAttribute('custom-hr', true);
    decorateFooterRows(merchCard, footerRows);
  } else {
    parseTwpContent(el, merchCard);
  }
  
  el.replaceWith(app);
  decorateMerchCardLinkAnalytics(merchCard);
  return app;
}
