import { css } from "../../deps/lit-all.min.js";

export const style = css`

.hero-marquee {
  --s-min-height: 248px; /* 360px */
  --m-min-height: 448px; /* 560px */
  --l-min-height: 588px; /* 700px */
  
  /* 112 = 56px default padding */

  padding: var(--spacing-xl) 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
  width: 100%;
  overflow: hidden;
  min-height: var(--m-min-height);
  justify-content: center;
  align-items: center;
}

.hero-marquee.s-min-height { min-height: var(--s-min-height); }
.hero-marquee.l-min-height { min-height: var(--l-min-height); }

.dark .hero-marquee,
.hero-marquee.dark {
  color: var(--color-white);
}

.hero-marquee .background picture {
  line-height: 0;
  width: 100%;
  height: 100%;
  display: flex;
}

/* Alignment */
.hero-marquee .action-area,
.hero-marquee .lockup-area {
  display: flex;
}

.hero-marquee .action-area {
  flex-flow: column wrap;
  gap: var(--spacing-s); 
  width: 100%;
}

.hero-marquee .background-split picture img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.hero-marquee.media-cover picture {
  line-height: 0em;
  display: block;
}

.hero-marquee .main-copy {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  justify-content: center;
}

/* Lockup Area */
.hero-marquee .lockup-area { 
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  margin: 0 0 var(--spacing-xxs); 
  font-size: var(--type-body-m-size);
  line-height: var(--type-body-m-lh);
  text-transform: initial;
  white-space: nowrap;
} 

.hero-marquee .lockup-area picture { 
  line-height: 0;
  display: block;
}

.hero-marquee .lockup-area a,
.hero-marquee .lockup-area a:hover {
  color: inherit;
}

.hero-marquee .action-area a:not(.con-button) {
  font-weight: 700;
}

.hero-marquee .foreground-media {
  z-index: 1;
}

.hero-marquee .foreground-media picture img,
.hero-marquee .foreground-media video {
  object-fit: cover;
  object-position: center top;
  width: 100%;
  height: 100%;
  display: block;
}

/* Lockup Area sizes - default large */
.hero-marquee .lockup-area picture img,
.hero-marquee .l-icon .lockup-area,
.hero-marquee.l-icon .lockup-area {
  font-size: var(--type-body-m-size);
  line-height: var(--type-body-m-lh);
}

.hero-marquee .lockup-area picture img,
.hero-marquee .l-icon .lockup-area picture img,
.hero-marquee.l-icon .lockup-area picture img {
  min-width: var(--icon-size-l);
  height: var(--icon-size-l);
}

.hero-marquee .m-icon .lockup-area,
.hero-marquee.m-icon .lockup-area {
  font-size: var(--type-body-s-size);
  line-height: var(--type-body-s-lh);
}

.hero-marquee .m-icon .lockup-area picture img, 
.hero-marquee.m-icon .lockup-area picture img {
  min-width: var(--icon-size-m);
  height: var(--icon-size-m);
}

.hero-marquee .xl-icon .lockup-area,
.hero-marquee.xl-icon .lockup-area {
  font-size: var(--type-body-xl-size);
  line-height: var(--type-body-xl-lh);
}

.hero-marquee .xl-icon .lockup-area picture img,
.hero-marquee.xl-icon .lockup-area picture img {
  min-width: var(--icon-size-xl);
  height: var(--icon-size-xl);
}

.hero-marquee.center {
  text-align: center;
  align-items: center;
}

.hero-marquee.center .action-area,
.hero-marquee.center .lockup-area { 
  justify-content: center; 
}

.hero-marquee .norm p { margin: var(--spacing-xs) 0; }

.hero-marquee .main-copy p,
.hero-marquee .main-copy p:only-child,
.hero-marquee .main-copy [class^="heading"],
.hero-marquee .norm p:only-child { margin: 0; }
.hero-marquee .norm :is(h1, h2, h3, h4, h5, h6) { margin: 0 0 var(--spacing-xs) 0; }
.hero-marquee .norm .action-area { margin-top: var(--spacing-s); }
.hero-marquee .norm div > *:last-child { margin-bottom: 0; }
.hero-marquee .norm div *:first-child { margin-top: 0; }

.hero-marquee > .foreground {
  max-width: var(--grid-container-width);
  min-width: var(--grid-container-width);
  margin: 0 auto;
  display: grid;
  gap: var(--spacing-m);
}

html[dir="rtl"] .hero-marquee .foreground {
  flex-direction: row-reverse;
}

.hero-marquee > .foreground.fw {
  width: 100%;
}

.hero-marquee .foreground .copy {
  display: grid;
  gap: var(--spacing-xs);
}

.hero-marquee hr {
  width: 100%;
  border: none;
  height: 1px;
  margin: 0;
}

.hero-marquee .has-divider {
  margin: var(--spacing-xxs) 0;
}

/* content hidden */
.hero-marquee .hidden {
  visibility: hidden;
  height: 0;
}

.hero-marquee .foreground div:empty {
  display: none;
}

/* Row Types */
.hero-marquee .row-list {
  text-align: left;
} 

html[dir="rtl"] .hero-marquee .row-list {
  text-align: right;
}

.hero-marquee .row-list .row-wrapper {
  display: table;
}

.hero-marquee .row-list li {
  margin-bottom: var(--spacing-xxs);
} 

/* row-qr */
.hero-marquee .row-qrcode .row-wrapper {
  display: flex;
  gap: var(--spacing-s);
  margin: 0;
}

.hero-marquee .row-qrcode .row-wrapper > p {
  margin: 0;
}

.hero-marquee .row-qrcode .qr-code-img {
  display: none;
}

.hero-marquee .row-qrcode .google-play a,
.hero-marquee .row-qrcode .app-store a {
  width: 135px;
  height: 40px;
  display: inline-flex;
  color: transparent;
}

.hero-marquee .row-qrcode .google-play a {
  background: url('/libs/img/ui/google-play.svg') no-repeat transparent;
}

.hero-marquee .row-qrcode .app-store a {
  background: url('/libs/img/ui/app-store.svg') no-repeat transparent;
}

.hero-marquee.center .row-qrcode .row-wrapper {
  justify-content: center;
}

.hero-marquee.center .row-list .row-wrapper { 
  margin: 0 auto; 
}

.hero-marquee .row-list .icon-list {
  padding-inline-start: var(--spacing-m);
  margin: 0;
}

.hero-marquee li.icon-item {
  position: relative;
  list-style: none;
}

.hero-marquee li::marker {
  padding-inline-start: 40px;
}

.hero-marquee li.icon-item::marker {
  color: transparent;
}

.hero-marquee li.icon-item span.icon {
  position: absolute;
  left: -28px;
}

html[dir="rtl"] .hero-marquee li.icon-item span.icon {
  left: unset;
  right: -28px;
}

/* row-supplemental */
.hero-marquee .row-supplemental.bold {
  font-weight: 700;
}

.hero-marquee.media-cover.has-bg .asset {
  display: none;
}

.hero-marquee.asset-left > .foreground.cols-2 > .asset {
  order: 2;
}

/* mobile ONLY */
@media (max-width: 600px) {
  .hero-marquee .con-button {
    display: block;
    text-align: center;
  }
  
  .hero-marquee.media-top-mobile {
    flex-direction: column-reverse;
  }

  .hero-marquee.media-top-mobile .foreground .copy {
    order: 2;
  } 
  
  .hero-marquee.media-cover:not(.bg-bottom-mobile),
  .hero-marquee.media-cover:not(.media-hidden-mobile) {
    padding-bottom: 0;
  }

  /* con-vars support */
  .hero-marquee:is(.bg-top-mobile, .bg-top-mobile, .bg-bottom-mobile) .background {
      position: relative;
  }

  .hero-marquee.bg-top-mobile  {
    padding-top: unset;
  }

  .hero-marquee.bg-bottom-mobile {
    padding-bottom: unset;
  }
  
  .hero-marquee.media-cover.media-top-mobile,
  .hero-marquee.media-cover.media-hidden-mobile:not(.bg-bottom-mobile) {
    padding-top: 0;
    padding-bottom: var(--spacing-xl);
  }

  .hero-marquee.bg-top-mobile:not(.bg-bottom-mobile),
  .hero-marquee.bg-top-mobile.media-top-mobile {
    padding-top: 0;
  }

  .hero-marquee.bg-bottom-mobile .background {
    order: 2;
  }
  
  .hero-marquee.media-hidden-mobile .foreground .asset,
  .hero-marquee.media-hidden-mobile .foreground-media { display: none; }
}

/* Tablet ONLY */
@media screen and (min-width: 600px) and (max-width: 1199px) {
  .hero-marquee.media-cover:not(.bg-bottom-mobile) {
    padding-bottom: 0;
  }
  
  .hero-marquee.media-top-tablet,
  .hero-marquee.media-cover.media-top-tablet {
    flex-direction: column-reverse;
  }

  .hero-marquee.media-top-tablet > .foreground .copy {
    order: 2;
  } 
  
  .hero-marquee.media-cover.media-top-tablet,
  .hero-marquee.media-cover.media-hidden-tablet {
    padding-top: 0;
    padding-bottom: var(--spacing-xl);
  }

  /* con-vars support */
  .hero-marquee.bg-top-tablet .background,
  .hero-marquee.bg-bottom-tablet .background {
    position: relative;
  }

  .hero-marquee.bg-top-tablet {
    padding-top: 0;
  }

  .hero-marquee.bg-bottom-tablet .background {
    order: 2;
  }
  
  /* helper classes */
  .hero-marquee.media-hidden-tablet .foreground .asset,
  .hero-marquee.media-hidden-tablet .foreground-media,
  .hero-marquee.media-hidden-tablet-tablet .foreground-media { display: none; }
}

/* Tablet UP */
@media screen and (min-width: 600px) {
  .hero-marquee,
  .hero-marquee .action-area { 
    flex-direction: row;
  }

  .hero-marquee .action-area { 
    align-items: center;
  }
  
  .hero-marquee.media-cover { 
    flex-direction: column;
  }

  .hero-marquee.center .action-area {
    justify-content: center;
  }

  .hero-marquee.bg-top-tablet {
    flex-direction: column;
  }

  /* min height */
  .hero-marquee.s-min-height-tablet { min-height: var(--s-min-height);}
  .hero-marquee.l-min-height-tablet { min-height: var(--l-min-height);}
  
  /* helper classes */
  .hero-marquee .order-0-tablet { order: 0; }
  .hero-marquee .order-1-tablet { order: 1; }
  .hero-marquee .order-2-tablet { order: 2; }
  .hero-marquee .order-3-tablet { order: 3; }
}

@media screen and (min-width: 920px) {
  .hero-marquee .foreground.cols-1 {
    max-width: 800px;
    min-width: unset;
  }
}

/* desktop up */
@media screen and (min-width: 1200px) {
  .hero-marquee {
    display: flex;
    flex-direction: row;
  }
  
  .hero-marquee.media-cover { 
    flex-direction: row;
  }

  .hero-marquee.media-cover picture {
    display: unset;
  }
  
  .hero-marquee.media-cover.has-bg .asset {
    display: initial;
  }

  .hero-marquee > .foreground.cols-2 {
    grid-template-columns: minmax(50%, 1fr) minmax(50%, 1fr);
    align-items: center;
    gap: 0;
  }

  .hero-marquee > .foreground.cols-2 .copy {
    padding-inline-end: 100px;
  }

  .hero-marquee.asset-left > .foreground.cols-2 .copy {
    padding-inline-start: 100px;
    padding-inline-end: unset;
  }


  .hero-marquee .foreground-media {
    position: absolute;
    width: 50vw;
    height: 100%;
    right: 0;
    top: 0;
  }

  .hero-marquee.asset-left .foreground-media,
  html[dir="rtl"] .hero-marquee .foreground-media {
    right: unset;
    left: 0;
  }

  html[dir="rtl"] .hero-marquee.asset-left .foreground-media {
    right: 0;
    left: unset;
  }
  
  .hero-marquee.asset-left > .foreground.cols-2 > .asset {
    order: unset;
  }
  
  /* Action area order */
  .hero-marquee .main-copy .action-area,
  .hero-marquee .main-copy [class*='heading-'] + [class*='body-'] {
    order: unset;
  }

  /* meta blocks */
  .hero-marquee .row-qrcode .qr-code-img {
    display: inline-block;
    max-width: 140px;
    max-height: 140px;
    margin: 0;
  }

  .hero-marquee .row-qrcode .google-play,
  .hero-marquee .row-qrcode .app-store {
    display: none;
  }

  /* min height */
  .hero-marquee.s-min-height-desktop { min-height: var(--s-min-height);}
  .hero-marquee.l-min-height-desktop { min-height: var(--l-min-height);}

  /* helper classes */
  .hero-marquee .order-0-desktop { order: 0; }
  .hero-marquee .order-1-desktop { order: 1; }
  .hero-marquee .order-2-desktop { order: 2; }
  .hero-marquee .order-3-desktop { order: 3; }
}`;
