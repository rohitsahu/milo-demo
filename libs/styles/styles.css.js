/*** Variables ***/
import { css } from "../deps/lit-all.min.js";

export const style = css`
 :root {
  --global-height-nav: 64px;
  --global-height-breadcrumbs: 33px;
  /* stylelint-disable-next-line custom-property-pattern */
  --global-height-navPromo: 65px;
  --feds-totalheight-nav: calc(var(--feds-height-nav, --global-height-nav) + var(--feds-height-breadcrumbs, --global-height-breadcrumbs));

  /* Colors */
  --link-color: #035fe6;
  --link-hover-color: #136ff6;
  --link-color-dark: #1473E6;
  --link-hover-color-dark: #0d66d0;
  --background-color: #fff;
  --overlay-background-color: #ffffff20;
  --highlight-background-color: #ffffff40;
  --text-color: #2c2c2c;
  --color-white: #FFF;
  --color-gray-100: #F8F8F8;
  --color-gray-200: #E8E8E8;
  --color-gray-300: #D4D4D4;
  --color-gray-400: #B6B6B6;
  --color-gray-500: #909090;
  --color-gray-600: #686868;
  --color-gray-700: #444;
  --color-gray-800: #242424;
  --color-black: #000;
  --color-brand-title: #000B1D;
  --color-accent: var(--link-color-dark);
  --color-accent-hover: var(--link-hover-color-dark);
  --color-accent-down: #095aba;
  --color-accent-focus-ring: #378ef0;
  --color-info-accent: #5C5CE0;
  --color-info-accent-hover: #4646C6;
  --color-info-accent-down: #3D3DB4;
  --color-info-accent-light: #DEDEF9;

  /* Fonts */
  --body-font-family: 'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif;
  --fixed-font-family: 'Roboto Mono', menlo, consolas, 'Liberation Mono', monospace;

  /* Spacing */
  --spacing-xxs: 8px;
  --spacing-xs: 16px;
  --spacing-s: 24px;
  --spacing-m: 32px;
  --spacing-l: 40px;
  --spacing-xl: 48px;
  --spacing-xxl: 56px;
  --spacing-xxxl: 80px;

  /* Static Spacing */
  --spacing-xl-static: 56px;
  --spacing-xxl-static: 80px;
  --spacing-xxxl-static: 104px;

  /* Headings (Consonant) */
  --type-heading-all-weight: 700;
  --type-heading-xxxl-size: calc(var(--font-size-multiplier, 1) * 44px);
  --type-heading-xxxl-lh: 55px;
  --type-heading-xxl-size: calc(var(--font-size-multiplier, 1) * 36px);
  --type-heading-xxl-lh: 45px;
  --type-heading-xl-size: calc(var(--font-size-multiplier, 1) * 28px);
  --type-heading-xl-lh: 35px;
  --type-heading-l-size: calc(var(--font-size-multiplier, 1) * 24px);
  --type-heading-l-lh: 30px;
  --type-heading-m-size: calc(var(--font-size-multiplier, 1) * 20px);
  --type-heading-m-lh: 25px;
  --type-heading-s-size: calc(var(--font-size-multiplier, 1) * 18px);
  --type-heading-s-lh: 22.5px;
  --type-heading-xs-size: calc(var(--font-size-multiplier, 1) * 16px);
  --type-heading-xs-lh: 20px;
  --type-heading-xxs-size: calc(var(--font-size-multiplier, 1) * 14px);
  --type-heading-xxs-lh: 18px;

  /* Headings (General) */
  --type-heading-base-lh: 1.2;

  /* Body (Consonant) */
  --type-body-xxl-size: calc(var(--font-size-multiplier, 1) * 28px);
  --type-body-xxl-lh: 42px;
  --type-body-xl-size: calc(var(--font-size-multiplier, 1) * 22px);
  --type-body-xl-lh: 33px;
  --type-body-l-size: calc(var(--font-size-multiplier, 1) * 20px);
  --type-body-l-lh: 30px;
  --type-body-m-size: calc(var(--font-size-multiplier, 1) * 18px);
  --type-body-m-lh: 27px;
  --type-body-s-size: calc(var(--font-size-multiplier, 1) * 16px);
  --type-body-s-lh: 24px;
  --type-body-xs-size: calc(var(--font-size-multiplier, 1) * 14px);
  --type-body-xs-lh: 21px;
  --type-body-xxs-size: calc(var(--font-size-multiplier, 1) * 12px);
  --type-body-xxs-lh: 18px;

  /* Detail */
  --type-detail-all-weight: 700;
  --type-detail-all-transform: uppercase;
  --type-detail-xl-size: calc(var(--font-size-multiplier, 1) * 20px);
  --type-detail-xl-lh: 25px;
  --type-detail-l-size: calc(var(--font-size-multiplier, 1) * 16px);
  --type-detail-l-lh: 20px;
  --type-detail-m-size: calc(var(--font-size-multiplier, 1) * 12px);
  --type-detail-m-lh: 15px;
  --type-detail-s-size: calc(var(--font-size-multiplier, 1) * 10px);
  --type-detail-s-lh: 12px;

  /* grid sizes */
  --grid-container-width: 83.4%;
  --grid-column-width: calc(var(--grid-container-width) / 12);
  --grid-margins-width: calc((100vw - var(--grid-container-width)) / 2);
  --grid-margins-width-10: calc((100vw - (var(--grid-column-width) * 10)) / 2);
  --grid-margins-width-8: calc((100vw - (var(--grid-column-width) * 8)) / 2);
  --grid-margins-width-6: calc((100vw - (var(--grid-column-width) * 6)) / 2);

  /* aspect ratios */
  --aspect-ratio-square: 1/1;
  --aspect-ratio-standard: 4/3;
  --aspect-ratio-wide: 16/9;

  /* icon sizes */
  --icon-size-xxl: 80px;
  --icon-size-xl: 64px;
  --icon-size-l: 56px;
  --icon-size-m: 40px;
  --icon-size-s: 32px;
  --icon-size-xs: 24px;
  --icon-size-xxs: 16px;

  /* z-index */
  --above-all: 9000; /* Used for page tools that overlay page content */
}

:root:lang(ar) {
  --body-font-family: adobe-arabic, myriad-arabic, 'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif;
  --font-size-multiplier: 1.25;
}

:root:lang(ko-KR),
:root:lang(ko) {
  --body-font-family: adobe-clean-han-korean, 'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif;

  word-break: keep-all;
}

:root:lang(ja-JP),
:root:lang(ja){
  --body-font-family: adobe-clean-han-japanese, 'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif;
}

:root:lang(zh-TW) {
  --body-font-family: adobe-clean-han-traditional, 'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif;
}

:root:lang(zh-CN) {
  --body-font-family: adobe-clean-han-simplified-c, 'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif;
}

:root:lang(zh-HK) {
  --body-font-family: adobe-clean-han-traditional, 'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif;
}

:root:lang(th) {
  --body-font-family: adobe-clean-thai, 'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif;
}

@media (min-width: 1200px) {
  :root {
    --spacing-xl: 56px;
    --spacing-xxl: 80px;
    --spacing-xxxl: 104px;
    --type-heading-xxxl-size: calc(var(--font-size-multiplier, 1) * 80px);
    --type-heading-xxxl-lh: 88px;
    --type-heading-xxl-size: calc(var(--font-size-multiplier, 1) * 44px);
    --type-heading-xxl-lh: 55px;
    --type-heading-xl-size: calc(var(--font-size-multiplier, 1) * 36px);
    --type-heading-xl-lh: 45px;
    --type-heading-l-size: calc(var(--font-size-multiplier, 1) * 28px);
    --type-heading-l-lh: 35px;
    --type-heading-m-size: calc(var(--font-size-multiplier, 1) * 24px);
    --type-heading-m-lh: 30px;
    --type-heading-s-size: calc(var(--font-size-multiplier, 1) * 20px);
    --type-heading-s-lh: 25px;
    --type-heading-xs-size: calc(var(--font-size-multiplier, 1) * 18px);
    --type-heading-xs-lh: 22.5px;
  }
}

@media (min-width: 1440px) {
  :root {
    --grid-container-width: 1200px;
  }
}

/*** Consonant Typography ***/

.heading-xxxl,
.heading-xxl,
.heading-xl,
.heading-l,
.heading-m,
.heading-s,
.heading-xs,
.body-xxl,
.body-xl,
.body-l,
.body-m,
.body-s,
.body-xs,
.detail-xl,
.detail-l,
.detail-m,
.detail-s {
  margin: 0;
}

.heading-xxxl {
  font-size: var(--type-heading-xxxl-size);
  line-height: var(--type-heading-xxxl-lh);
}

.heading-xxl {
  font-size: var(--type-heading-xxl-size);
  line-height: var(--type-heading-xxl-lh);
}

.heading-xl {
  font-size: var(--type-heading-xl-size);
  line-height: var(--type-heading-xl-lh);
}

.heading-l {
  font-size: var(--type-heading-l-size);
  line-height: var(--type-heading-l-lh);
}

.heading-m {
  font-size: var(--type-heading-m-size);
  line-height: var(--type-heading-m-lh);
}

.heading-s {
  font-size: var(--type-heading-s-size);
  line-height: var(--type-heading-s-lh);
}

.heading-xs {
  font-size: var(--type-heading-xs-size);
  line-height: var(--type-heading-xs-lh);
}

.body-xxl {
  font-size: var(--type-body-xxl-size);
  line-height: var(--type-body-xxl-lh);
}

.body-xl {
  font-size: var(--type-body-xl-size);
  line-height: var(--type-body-xl-lh);
}

.body-l {
  font-size: var(--type-body-l-size);
  line-height: var(--type-body-l-lh);
}

.body-m {
  font-size: var(--type-body-m-size);
  line-height: var(--type-body-m-lh);
}

.body-s {
  font-size: var(--type-body-s-size);
  line-height: var(--type-body-s-lh);
}

.body-xs {
  font-size: var(--type-body-xs-size);
  line-height: var(--type-body-xs-lh);
}

.body-xxs {
  font-size: var(--type-body-xxs-size);
  line-height: var(--type-body-xxs-lh);
}

.detail-xl {
  font-size: var(--type-detail-l-size);
  line-height: var(--type-detail-l-lh);
}

.detail-l {
  font-size: var(--type-detail-l-size);
  line-height: var(--type-detail-l-lh);
}

.detail-m {
  font-size: var(--type-detail-m-size);
  line-height: var(--type-detail-m-lh);
}

.detail-s {
  font-size: var(--type-detail-s-size);
  line-height: var(--type-detail-s-lh);
}

.detail-xs {
  font-size: var(--type-body-xs-size);
  line-height: var(--type-body-xs-lh);
  font-weight: 700;
}

.detail-xl,
.detail-l,
.detail-m,
.detail-s {
  font-weight: 700;
  text-transform: uppercase;
}

.con-button {
  background-color: transparent;
  border-radius: 16px;
  border: 2px solid var(--text-color);
  color: var(--text-color);
  display: inline-block;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  padding: 5px 14px;
  text-decoration: none;
}

.con-button:hover {
  background-color: var(--color-black);
  border-color: var(--color-black);
  color: var(--color-white);
  text-decoration: none;
}

.con-button2 {
  background-color: transparent;
  border-radius: 16px;
  border: 2px solid var(--text-color);
  color: var(--text-color);
  display: inline-block;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  padding: 5px 14px;
  text-decoration: none;
}

.con-button2:hover {
  border-color: var(--color-black);
  text-decoration: none;
  color: var(--text-color);
}

.l-button .con-button,
.con-button.button-l {
  border-radius: 20px;
  font-size: 17px;
  line-height: 20px;
  min-height: 21px;
  padding: 7px 18px 8px;
}

.xl-button .con-button,
.con-button.button-xl,
.con-button2.button-xl {
  border-radius: 25px;
  font-size: 19px;
  line-height: 24px;
  min-height: 28px;
  padding: 10px 24px 8px;
}

.con-button.button-justified {
  display: block;
  text-align: center;
  width: 100%;
}

.xxl-button .con-button {
  border-radius: 30px;
  font-size: 22px;
  line-height: 27px;
  min-height: 27px;
  padding: 14px 30px 15px;
}

.dark .con-button {
  border-color: var(--color-white);
  color: var(--color-white);
}

.light .con-button {
  border-color: var(--text-color);
  color: var(--text-color);
}

.light .con-button:hover,
.light .con-button:active  {
  background-color: var(--color-black);
  border-color: var(--color-black);
  color: var(--color-white);
}

.dark .con-button:hover {
  background-color: var(--color-white);
  color: var(--color-black);
  text-decoration: none;
}

.con-button.blue {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-white);
}

.con-button.blue:hover,
.con-button.blue:active {
  background: var(--color-accent-hover);
  border-color: var(--color-accent-hover);
  color: var(--color-white);
}

.con-button.fill {
  background: var(--text-color);
  border-color: var(--text-color);
  color: var(--color-white);
}

.con-button.fill:hover,
.con-button.fill:active {
  background: var(--color-black);
  border-color: var(--color-black);
}

.dark .con-button.fill {
  background: var(--color-white);
  border-color: var(--color-white);
  color: var(--text-color);
}

.dark .con-button.fill:hover,
.dark .con-button.fill:active {
  background: var(--color-white);
  border-color: var(--color-white);
  color: var(--color-black);
}

img {
  max-width: 100%;
  height: auto;
}

svg.icon-milo, img.icon-milo {
  height: 1em;
  position: relative;
  top: .1em;
  width: auto;
}

/* Not blocks */
div:not([class]) > div > div > img[src^="./media_"] {
  width: 100%;
}

.container {
  width: var(--grid-container-width);
  margin: 0 auto;
}

picture.bg-img {
  display: block;
  position: absolute;
  inset: 0;
  z-index: -1;
}

picture.bg-img img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.section .section-background img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}



/* progressive section appearance */
main > div,
main .section[data-status='decorated'] {
  display: none;
}

main > .section,
.fragment > .section {
  display: block;
  position: relative;
}

main > .section > .content,
.fragment > .section > .content {
  display: block;
  max-width: var(--grid-container-width);
  margin: 0 auto;
}

div[data-failed="true"] {
  border: 4px solid #ff00a0;
  position: relative;
  margin: 12px;
  border-radius: 6px;
  display: block;
}

div[data-failed="true"]::before {
  content: attr(data-reason);
  color: white;
  padding: 0 0 2px 6px;
  background: #ff00a0;
  font-weight: 700;
  display: block;
}

.milo-card-section {
  visibility: hidden;
}

/* Con Button */
.con-button svg.icon-milo {
  display: inline-block;
  height: 1em;
  width: 1em;
}

.con-button[aria-disabled="true"],
.con-button.blue[aria-disabled="true"],
.con-button.fill[aria-disabled="true"] {
  background-color: transparent;
  border-color: var(--color-gray-500);
  color: var(--color-gray-500);
}

.con-button.blue[aria-disabled="true"],
.con-button.fill[aria-disabled="true"] {
  background-color: var(--color-gray-500);
  color: var(--color-gray-300);
}

.con-button[aria-disabled="true"]:hover,
.con-button.blue[aria-disabled="true"]:hover,
.con-button.fill[aria-disabled="true"]:hover {
  cursor: default;
}

.dark .con-button[aria-disabled="true"]:hover {
  background-color: transparent;
  color: var(--color-gray-500);
}

.dark .con-button.blue[aria-disabled="true"]:hover,
.dark .con-button.fill[aria-disabled="true"]:hover {
  background-color: var(--color-gray-500);
  color: var(--color-gray-300);
}

span.icon.margin-right { margin-right: 8px; }

span.icon.margin-left { margin-left: 8px; }

span.icon.margin-inline-end { margin-inline-end: 8px; }

span.icon.margin-inline-start { margin-inline-start: 8px; }

.button-l .con-button span.icon.margin-left,
.con-button.button-l span.icon.margin-left { margin-left: 12px; }

.button-xl .con-button span.icon.margin-left,
.con-button.button-xl span.icon.margin-left { margin-left: 14px; }

/* Con Block Utils */
.con-block.xs-spacing { padding: var(--spacing-xs) 0; }
.con-block.s-spacing { padding: var(--spacing-s) 0; }
.con-block.m-spacing { padding: var(--spacing-m) 0; }
.con-block.l-spacing { padding: var(--spacing-l) 0; }
.con-block.xl-spacing { padding: var(--spacing-xl) 0; }
.con-block.xxl-spacing { padding: var(--spacing-xxl) 0; }
.con-block.xxxl-spacing { padding: var(--spacing-xxxl) 0; }
.con-block.no-spacing { padding: 0; }

.con-block.xs-spacing-top { padding-top: var(--spacing-xs); }
.con-block.s-spacing-top { padding-top: var(--spacing-s); }
.con-block.m-spacing-top { padding-top: var(--spacing-m); }
.con-block.l-spacing-top { padding-top: var(--spacing-l); }
.con-block.xl-spacing-top { padding-top: var(--spacing-xl); }
.con-block.xxl-spacing-top { padding-top: var(--spacing-xxl); }
.con-block.xxxl-spacing-top { padding-top: var(--spacing-xxxl); }
.con-block.no-spacing-top { padding-top: 0; }

.con-block.xs-spacing-bottom { padding-bottom: var(--spacing-xs); }
.con-block.s-spacing-bottom { padding-bottom: var(--spacing-s); }
.con-block.m-spacing-bottom { padding-bottom: var(--spacing-m); }
.con-block.l-spacing-bottom { padding-bottom: var(--spacing-l); }
.con-block.xl-spacing-bottom { padding-bottom: var(--spacing-xl); }
.con-block.xxl-spacing-bottom { padding-bottom: var(--spacing-xxl); }
.con-block.xxxl-spacing-bottom { padding-bottom: var(--spacing-xxxl); }
.con-block.no-spacing-bottom { padding-bottom: 0; }

.con-block.xl-spacing-static-bottom { padding-bottom: var(--spacing-xl-static); }
.con-block.xxl-spacing-static-bottom { padding-bottom: var(--spacing-xxl-static); }
.con-block.xxxl-spacing-static-bottom { padding-bottom: var(--spacing-xxxl-static); }

div[class*='-up'] .con-block.full-width { grid-column: 1 /-1; }
div[class*='-up'] .con-block.has-bg { padding: var(--spacing-m); }
div[class*='-up'] .con-block.has-bg.xs-spacing { padding: var(--spacing-xs); }
div[class*='-up'] .con-block.has-bg.s-spacing { padding: var(--spacing-s); }
div[class*='-up'] .con-block.has-bg.m-spacing { padding: var(--spacing-m); }
div[class*='-up'] .con-block.has-bg.l-spacing { padding: var(--spacing-l); }
div[class*='-up'] .con-block.has-bg.xl-spacing { padding: var(--spacing-xl); }
div[class*='-up'] .con-block.has-bg.xxl-spacing { padding: var(--spacing-xxl); }
div[class*='-up'] .con-block.has-bg.xxxl-spacing { padding: var(--spacing-xxxl); }
div[class*='-up'] .con-block.has-bg.no-spacing { padding: 0; }

.con-block .foreground { position: relative; }

.con-block.max-width-6 .foreground { max-width: 600px; }
.con-block.max-width-8 .foreground { max-width: 800px; }
.con-block.max-width-10 .foreground { max-width: 1000px; }
.con-block.max-width-12 .foreground { max-width: 1200px; }
.con-block.max-width-auto .foreground { max-width: unset; }

.con-block .background {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.con-block .background>div { height: 100%; }

.con-block .background img,
.con-block .background video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.con-block .background video {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.con-block .background .tablet-only,
.con-block .background .desktop-only {
  display: none;
}

/*** Global Styles ***/
@font-face {
  font-family: 'Trebuchet MS';
  font-weight: 700;
  size-adjust: 95%;
  src: local('Trebuchet MS Bold'),
    local('TrebuchetMSBold');
}

@font-face {
  font-family: 'Trebuchet MS';
  font-weight: 400;
  size-adjust: 93%;
  src: local('Trebuchet MS'),
    local('TrebuchetMS');
}

body {
  display: block;
  font-family: var(--body-font-family);
  font-size: var(--type-body-m-size);
  line-height: var(--type-body-m-lh);
  background-color: var(--background-color);
  color: var(--text-color);
  margin: 0;
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  opacity: 1 !important; /* Fix Target hiding */
}

header:not(.global-navigation) {
  height: 57px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  overflow: hidden;
  background: #FFF;
  box-sizing: border-box;
}

header:not(.global-navigation) nav {
  display: none;
}

header:not(.global-navigation) ~ main {
  margin-top: 57px;
}

/*
  After switching from the Milo nav to the FEDS one,
  only the styles with 'header.global-navigation' need to be kept;
  the 'global-navigation' class should also be removed from the 'header' selector
  all of the ':not(.global-navigation)' rules can be entirely removed.
 */
header.global-navigation {
  height: var(--global-height-nav);
  visibility: hidden;
}

@media (min-width: 900px) {
  header.global-navigation.has-promo {
    height: auto;
    /* stylelint-disable-next-line custom-property-pattern */
    min-height: calc(var(--global-height-nav) + var(--global-height-navPromo));
  }

  header.global-navigation.has-breadcrumbs {
    padding-bottom: var(--global-height-breadcrumbs);
  }
}

.breadcrumbs {
  display: none;
}

.gnav-hide {
  opacity: 0;
}

.hide-block {
  display: none !important;
}

h1, h2, h3, h4, h5, h6 {
  scroll-margin-top: var(--feds-totalheight-nav);
}

h1 {
  font-size: var(--type-heading-xl-size);
  line-height: var(--type-heading-xl-lh);
}

h2 {
  font-size: var(--type-heading-l-size);
  line-height: var(--type-heading-l-lh);
}

h3 {
  font-size: var(--type-heading-m-size);
  line-height: var(--type-heading-m-lh);
}

h4 {
  font-size: var(--type-heading-s-size);
  line-height: var(--type-heading-s-lh);
}

h5 {
  font-size: var(--type-heading-xs-size);
  line-height: var(--type-heading-xs-lh);
}

h6 {
  font-size: var(--type-heading-xs-size);
  line-height: var(--type-heading-xs-lh);
}

/* Links */
a.auto-block,
a.fragment {
  display: none;
}

a {
  color: var(--link-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: var(--link-hover-color);
}

/* Links Static */
a.static,
a.static:hover {
  color: var(--text-color);
  text-decoration: underline;
}

.dark a.static,
.dark a.static:hover {
  color: var(--color-white);
  text-decoration: underline;
}

/* Buttons */
.dark a {
  color: var(--link-color-dark);
}

.static-links a:not([class*="button"]) {
  color: inherit;
  text-decoration: underline;
}

/* Tooltip */
.tooltip-wrapper {
  visibility: hidden;
}

/* mobile only */
@media (max-width: 600px) {
  .con-button.button-justified-mobile {
    display: block;
    text-align: center;
  }
}

/* Tablet up */
@media screen and (min-width: 600px) {
  dialog {
    width: 60vw;
  }

  dialog .fragment > *:first-child {
    margin-top: 0;
  }

  dialog .fragment > *:last-child {
    margin-bottom: 0;
  }

  .con-block.max-width-6-tablet .foreground { max-width: 600px; }
  .con-block.max-width-8-tablet .foreground { max-width: 800px; }
  .con-block.max-width-10-tablet .foreground { max-width: 1000px; }
  .con-block.max-width-12-tablet .foreground { max-width: 1200px; }

  .con-block .background .mobile-only,
  .con-block .background .desktop-only {
    display: none;
  }

  .con-block .background .tablet-only { display: block; }

  /* spacing */
  .con-block.xs-spacing-tablet { padding: var(--spacing-xs) 0; }
  .con-block.s-spacing-tablet { padding: var(--spacing-s) 0; }
  .con-block.m-spacing-tablet { padding: var(--spacing-m) 0; }
  .con-block.l-spacing-tablet { padding: var(--spacing-l) 0; }
  .con-block.xl-spacing-tablet { padding: var(--spacing-xl) 0; }
  .con-block.xxl-spacing-tablet { padding: var(--spacing-xxl) 0; }
  .con-block.xxxl-spacing-tablet { padding: var(--spacing-xxxl) 0; }
  .con-block.no-spacing-tablet { padding: 0; }

  .con-block.xs-spacing-top-tablet { padding-top: var(--spacing-xs); }
  .con-block.s-spacing-top-tablet { padding-top: var(--spacing-s); }
  .con-block.m-spacing-top-tablet { padding-top: var(--spacing-m); }
  .con-block.l-spacing-top-tablet { padding-top: var(--spacing-l); }
  .con-block.xl-spacing-top-tablet { padding-top: var(--spacing-xl); }
  .con-block.xxl-spacing-top-tablet { padding-top: var(--spacing-xxl); }
  .con-block.xxxl-spacing-top-tablet { padding-top: var(--spacing-xxxl); }
  .con-block.no-spacing-top-tablet { padding-top: 0; }

  .con-block.xs-spacing-bottom-tablet { padding-bottom: var(--spacing-xs); }
  .con-block.s-spacing-bottom-tablet { padding-bottom: var(--spacing-s); }
  .con-block.m-spacing-bottom-tablet { padding-bottom: var(--spacing-m); }
  .con-block.l-spacing-bottom-tablet { padding-bottom: var(--spacing-l); }
  .con-block.xl-spacing-bottom-tablet { padding-bottom: var(--spacing-xl); }
  .con-block.xxl-spacing-bottom-tablet { padding-bottom: var(--spacing-xxl); }
  .con-block.xxxl-spacing-bottom-tablet { padding-bottom: var(--spacing-xxxl); }
  .con-block.no-spacing-bottom-tablet { padding-bottom: 0; }

  .con-block.xl-spacing-static-bottom-tablet { padding-bottom: var(--spacing-xl-static); }
  .con-block.xxl-spacing-static-bottom-tablet { padding-bottom: var(--spacing-xxl-static); }
  .con-block.xxxl-spacing-static-bottom-tablet { padding-bottom: var(--spacing-xxxl-static); }
}

/* tablet large up */
@media (min-width: 900px) {
  header:not(.global-navigation) {
    min-height: var(--global-height-nav);
    border-bottom: 1px solid #EAEAEA;
    overflow: unset;
  }

  header:not(.global-navigation) ~ main {
    margin-top: 64px;
  }

  header:not(.global-navigation).has-breadcrumbs {
    min-height: 97px;
  }

  header:not(.global-navigation) nav {
    display: unset;
  }

  header:not(.global-navigation).has-breadcrumbs + main {
    margin-top: 97px;
  }
}

/* desktop up */
@media screen and (min-width: 1200px) {
  .con-block.max-width-6-desktop .foreground { max-width: 600px; }
  .con-block.max-width-8-desktop .foreground { max-width: 800px; }
  .con-block.max-width-10-desktop .foreground { max-width: 1000px; }
  .con-block.max-width-12-desktop .foreground { max-width: 1200px; }

  .con-block .background .mobile-only,
  .con-block .background .tablet-only {
    display: none;
  }

  .con-block .background .desktop-only { display: block; }

  /* spacing */
  .con-block.xs-spacing-desktop { padding: var(--spacing-xs) 0; }
  .con-block.s-spacing-desktop { padding: var(--spacing-s) 0; }
  .con-block.m-spacing-desktop { padding: var(--spacing-m) 0; }
  .con-block.l-spacing-desktop { padding: var(--spacing-l) 0; }
  .con-block.xl-spacing-desktop { padding: var(--spacing-xl) 0; }
  .con-block.xxl-spacing-desktop { padding: var(--spacing-xxl) 0; }
  .con-block.xxxl-spacing-desktop { padding: var(--spacing-xxxl) 0; }
  .con-block.no-spacing-desktop { padding: 0; }

  .con-block.xs-spacing-top-desktop { padding-top: var(--spacing-xs); }
  .con-block.s-spacing-top-desktop { padding-top: var(--spacing-s); }
  .con-block.m-spacing-top-desktop { padding-top: var(--spacing-m); }
  .con-block.l-spacing-top-desktop { padding-top: var(--spacing-l); }
  .con-block.xl-spacing-top-desktop { padding-top: var(--spacing-xl); }
  .con-block.xxl-spacing-top-desktop { padding-top: var(--spacing-xxl); }
  .con-block.xxxl-spacing-top-desktop { padding-top: var(--spacing-xxxl); }
  .con-block.no-spacing-top-desktop { padding-top: 0; }

  .con-block.xs-spacing-bottom-desktop { padding-bottom: var(--spacing-xs); }
  .con-block.s-spacing-bottom-desktop { padding-bottom: var(--spacing-s); }
  .con-block.m-spacing-bottom-desktop { padding-bottom: var(--spacing-m); }
  .con-block.l-spacing-bottom-desktop { padding-bottom: var(--spacing-l); }
  .con-block.xl-spacing-bottom-desktop { padding-bottom: var(--spacing-xl); }
  .con-block.xxl-spacing-bottom-desktop { padding-bottom: var(--spacing-xxl); }
  .con-block.xxxl-spacing-bottom-desktop { padding-bottom: var(--spacing-xxxl); }
  .con-block.no-spacing-bottom-desktop { padding-bottom: 0; }

  .con-block.xl-spacing-static-bottom-desktop { padding-bottom: var(--spacing-xl-static); }
  .con-block.xxl-spacing-static-bottom-desktop { padding-bottom: var(--spacing-xxl-static); }
  .con-block.xxxl-spacing-static-bottom-desktop { padding-bottom: var(--spacing-xxxl-static); }
}

/* desktop large < 1440 */
@media screen and (min-width: 1440px) {
  .con-block.max-width-12-desktop-large .foreground { max-width: 1200px; }
}
  `;
