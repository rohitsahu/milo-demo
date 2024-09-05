import { css } from "../../deps/lit-all.min.js";

export const style = css`
.text-block {
  position: relative;
}

.dark .text-block,
.text-block.dark {
  color: #fff;
}

.text-block p,
.text-block [class^="body-"] { margin: var(--spacing-xs) 0; }

.text-block [class^="body-"]:only-child { margin: 0; }

.text-block [class^="heading"] { margin: 0 0 var(--spacing-xs) 0; }

.text-block [class^="detail"] { margin: 0 0 var(--spacing-xxs) 0; }

.text-block .cta-container,
.text-block p.action-area { margin-top: var(--spacing-s); }

.text-block div > *:last-child { margin-bottom: 0; }

.grid .text-block div > *:last-child { margin-bottom: var(--spacing-s); }

.text-block .foreground > div *:first-child { margin-top: 0; }

.text-block .background {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
  overflow: hidden;
}

.text-block .background > div {
  height: 100%;
}

.text-block .background img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.text-block .foreground {
  max-width: var(--grid-container-width);
  margin: 0 auto;
}

[class*=-up] .text-block .foreground {
  max-width: none;
  margin: 0;
}

.text-block .action-area {
  margin-top: var(--spacing-s);
  display: flex;
  gap: var(--spacing-s);
  flex-wrap: wrap;
  align-items: center;
}

.text-block .cta-container .action-area {
  width: 100%;
}

.text-block hr {
  border-color: #e1e1e1;
  border-style: solid;
  margin: var(--spacing-m) 0;
}

.text-block .icon-list-item {
  list-style: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E"); 
  position: relative;
}

.text-block .icon-list-item .icon.margin-right:not(.margin-left) { 
  position: absolute;
  inset: 0 100% auto auto;
}

/* Alignment */
.text-block.center {
  text-align: center;
  align-items: center;
}

.text-block.center .action-area,
.text-block.center .icon-area { justify-content: center; }

.text-block.right {
  text-align: right;
  align-items: end;
}

.text-block.right .action-area,
.text-block.right .icon-area { justify-content: end; }

/* Vertical */
.vertical.text-block .foreground {
  padding-bottom: var(--spacing-m);
}

/* Inset */
.inset.text-block .foreground {
  position: relative;
  padding-top: var(--spacing-m);
  padding-bottom: var(--spacing-m);
}

.inset.text-block .foreground::before {
  content: '';
  position: absolute;
  width: 2px;
  height: 100%;
  left: -8.3%;
  top: 0;
  background: var(--color-gray-400);
}

.inset.text-block [class^="heading"]:nth-child(n+2) {
  margin-top: var(--spacing-xxl);
}

.inset.text-block .foreground ul,
.inset.text-block .foreground ol {
  list-style: outside;
  padding-left: var(--spacing-xs);
}

/* Legal */
.legal.text-block {
  padding: var(--spacing-xl) 0;
}

.legal.text-block .foreground {
  font-style: italic;
}

.section[class*='grid-width-'] .text-block .foreground {
  max-width: unset;
}

.text-block .icon-area {
  display: flex;
  column-gap: var(--spacing-xxs);
}

.text-block .icon-area.con-button {
  column-gap: unset;
}

.text-block .icon-area picture {
  line-height: 0em;
}

/* icon inline */
.text-block.icon-inline .foreground > div {
  display: grid;
  column-gap: var(--spacing-xs);
  align-items: center;
  grid-template-columns: auto 1fr;
  justify-content: start;
}

.text-block.icon-inline .foreground [class^="body-"],
.text-block.icon-inline .foreground .cta-container {
  grid-column: span 2;
  margin-top: 0;
}

.text-block.icon-inline .icon-area {
  margin-bottom: var(--spacing-xs);
}

.text-block.icon-inline .icon-area picture img {
  min-width: var(--icon-size-m);
  max-width: var(--icon-size-m);
}

.text-block.center .foreground > .mobile-up {
  justify-content: center;
}

.text-block.right .foreground > .mobile-up {
  justify-content: end;
}

.text-block .foreground > .desktop-up,
.text-block .foreground > .tablet-up,
.text-block.icon-inline .foreground > .desktop-up,
.text-block.icon-inline .foreground > .tablet-up {
  display: none;
}

/* Text Alignment */
.section[class*="-up"] .text-block:not(.legal, .link-farm) {
  display: flex;
  align-self: stretch;
}

.section[class*="-up"] .text-block:not(.legal, .link-farm) .foreground {
  display: flex;
  align-self: stretch;
  width: 100%;
}

.section[class*="-up"] .text-block:not(.legal, .link-farm) .foreground > div {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.section[class*="-up"] .text-block:not(.legal, .link-farm) [class^="heading"],
.section[class*="-up"] .text-block:not(.legal, .link-farm) p:not([class^="detail-"]),
.section[class*="-up"] .text-block:not(.legal, .link-farm) [class^="body-"] {
  margin-bottom: 0;
}

.section[class*="-up"] .text-block:not(.legal, .link-farm) .cta-container {
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
}

/* Tablet up */
@media screen and (min-width: 600px) {
  .inset.text-block .foreground::before {
    display: none;
  }

  .inset.text-block .foreground {
    border-left: 2px solid var(--color-gray-400);
  }

  .inset.text-block .foreground > div {
    padding-left: var(--spacing-l);
  }

  .text-block .foreground > .tablet-up,
  .text-block .foreground > .tablet-up.desktop-up {
    display: block;
  }

  .text-block.icon-inline .foreground > .tablet-up,
  .text-block.icon-inline .foreground > .tablet-up.desktop-up {
    display: grid;
  }

  .text-block.center .foreground > .tablet-up {
    justify-content: center;
  }
  
  .text-block.right .foreground > .tablet-up {
    justify-content: end;
  }
  
  .text-block .foreground > .mobile-up,
  .text-block .foreground > .desktop-up,
  .text-block.icon-inline .foreground > .mobile-up,
  .text-block.icon-inline .foreground > .desktop-up {
    display: none;
  }
}

/* Desktop up */
@media screen and (min-width: 1200px) {
  .text-block .foreground > .desktop-up,
  .text-block .foreground > .tablet-up.desktop-up {
    display: block;
  }

  .text-block.icon-inline .foreground > .desktop-up,
  .text-block.icon-inline .foreground > .tablet-up.desktop-up {
    display: grid;
  }

  .text-block.center .foreground > .desktop-up {
    justify-content: center;
  }
  
  .text-block.right .foreground > .desktop-up {
    justify-content: end;
  }
  
  .text-block .foreground > .mobile-up,
  .text-block .foreground > .tablet-up,
  .text-block.icon-inline .foreground > .mobile-up,
  .text-block.icon-inline .foreground > .tablet-up {
    display: none;
  }
}
`;