import { LitElement, html } from "../../deps/lit-all.min.js";
import { style } from "../../styles/styles.css.js";
import  { style as style2 } from "../../blocks/hero-marquee/hero-marquee.css.js";
import { loadArea } from "../../utils/utils.js";
import { style as asideStyle } from "../../blocks/aside/aside.css.js";

export class BlankCanvas extends LitElement{

    static tag = "blank-canvas";

    static styles = [style, style2, asideStyle];

    static properties = {
        showCustom: { type: Boolean }
    }

    handleClick() {
        this.showCustom = !this.showCustom;
    }

    showCustomElement() {
        return html`
<div>
  <div class="hero-marquee bg-bottom-mobile bg-top-tablet static-links media-cover media-hidden-mobile media-hidden-tablet">
    <div>
      <div data-valign="middle">con-block-row-bgcolor</div>
      <div data-valign="middle"><a href="/libs/media_11def647aaa61ee7c3f1798b92ce6441c459989b9.mp4#_autoplay">https://main--milo-demo--rohitsahu.hlx.page/libs/media_11def647aaa61ee7c3f1798b92ce6441c459989b9.mp4#_autoplay</a></div>
    </div>
    <div>
      <div data-valign="middle">
        <p><a href="https://www.adobe.com/cc-shared/assets/img/product-icons/svg/photoshop-40.svg">https://www.adobe.com/cc-shared/assets/img/product-icons/svg/photoshop-40.svg</a> <strong>Photoshop</strong></p>
        <h2 id="go-from-inspiration-to-creation-faster"><strong>Go from inspiration to creation faster.</strong></h2>
        <p>Explore quick new ways to edit images and text with new innovations in Photoshop. Get Photoshop in Creative Cloud All Apps and save 40%. <a href="https://milo.adobe.com/tools/ost?osi=Mutn1LYoGojkrcMdCLO7LQlx1FyTHw27ETsfLv0h8DQ&#x26;type=priceStrikethrough">PRICE - ABM - Creative Cloud All Apps with 4TB</a> <a href="https://milo.adobe.com/tools/ost?osi=Mutn1LYoGojkrcMdCLO7LQlx1FyTHw27ETsfLv0h8DQ&#x26;type=price">PRICE - ABM - Creative Cloud All Apps with 4TB</a> First year only. Ends Aug 4. <a href="https://www.adobe.com/offer-terms/cc_full_special_offer.html">See terms</a>.</p>
        <p><strong><a href="https://www.adobe.com/creativecloud/plans.html?plan=individual">Buy now</a></strong></p>
      </div>
      <div data-valign="middle"></div>
    </div>
  </div>
  <div class="aside large">
    <div>
      <div data-valign="middle">con-block-row-bgcolor</div>
      <div data-valign="middle"><strong>linear-gradient(49deg, rgba(36,160,219,1) 0%, rgba(32,188,163,1) 35%, rgba(26,208,127,1) 100%)</strong></div>
    </div>
    <div>
      <div data-valign="middle"><a href="/libs/media_1d73928ecf92f5ac87654a20e9bba22ac39e626f2.mp4#_autoplay">https://main--milo-demo--rohitsahu.hlx.page/libs/media_1d73928ecf92f5ac87654a20e9bba22ac39e626f2.mp4#_autoplay</a></div>
      <div data-valign="middle">
        <p><strong>REMOVE BACKGROUND</strong></p>
        <h3 id="swap-out-your-scene"><strong>Swap out your scene.</strong></h3>
        <p>Use intuitive tools to make complex edits in a few steps. Replace a blah background with a whole new setting and give your images a natural, custom look.</p>
      </div>
    </div>
  </div>
  <div class="aside large">
    <div>
      <div data-valign="middle">con-block-row-bgcolor</div>
      <div data-valign="middle"><strong>linear-gradient(49deg, rgba(36,160,219,1) 0%, rgba(32,188,163,1) 35%, rgba(26,208,127,1) 100%)</strong></div>
    </div>
    <div>
      <div data-valign="middle">
        <p><strong>COMBINE IMAGES</strong></p>
        <h3 id="create-something-totally-new"><strong>Create something totally new.</strong></h3>
        <p>With best-in-class design tools at your fingertips it’s simple to merge images. Make a composite with bits and pieces of multiple images to create the unexpected.</p>
      </div>
      <div data-valign="middle"><a href="/libs/media_1dfb27bf082a3d5500d7c54e1fe13d006b417a6a1.mp4#_autoplay">https://main--milo-demo--rohitsahu.hlx.page/libs/media_1dfb27bf082a3d5500d7c54e1fe13d006b417a6a1.mp4#_autoplay</a></div>
    </div>
  </div>
  <div class="aside large">
    <div>
      <div data-valign="middle">con-block-row-bgcolor</div>
      <div data-valign="middle"><strong>linear-gradient(49deg, rgba(36,160,219,1) 0%, rgba(32,188,163,1) 35%, rgba(26,208,127,1) 100%)</strong></div>
    </div>
    <div>
      <div data-valign="middle"><a href="/libs/media_13def703b57ca4bef0817cbc62c3e739add4a603d.mp4#_autoplay">https://main--milo-demo--rohitsahu.hlx.page/libs/media_13def703b57ca4bef0817cbc62c3e739add4a603d.mp4#_autoplay</a></div>
      <div data-valign="middle">
        <p><strong>TRANSFORM IMAGES</strong></p>
        <h3 id="make-instant-edits"><strong>Make instant edits.</strong></h3>
        <p>Make amazing graphics and more. Use a full set of one-of-a kind tools to customize text, color, and images to create something completely unique.</p>
      </div>
    </div>
  </div>
</div>
`;
    }

    async updated() {
        super.updated();
        const el = this.shadowRoot.querySelector('div');
        if(el) {
            await loadArea(el);
        }
    }

    render() {
        return html`
        <div id="blank-canvas-main">
        ${this.showCustom ? this.showCustomElement() : html`<sp-button @click=${this.handleClick}>Click me</sp-button>`}
        </div>
        `;
    }
}