import { css } from "../../deps/lit-all.min.js";

export const style = css`
.aside {
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.dark .aside,
.aside.dark {
  color: var(--color-white);
}

.aside p {
  margin: 0;
}

.aside.split picture {
  display: flex;
}

.aside .split-image img,
.aside .split-image video {
  object-fit: cover;
  min-height: 700px;
  width: 100%;
  height: 100%;
}

.aside.notification .background img {
  min-height: unset;
}

.aside .foreground.container {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: var(--spacing-l);
}

.aside:not(.notification):not(.inline) .foreground > :first-child {
  padding: var(--spacing-xxxl) 0 0;
}

.aside:not(.notification):not(.inline) .foreground > :last-child {
  margin-bottom: var(--spacing-xxxl);
}

.aside .foreground.container .text {
  display: flex;
  flex-wrap: wrap;
}

.aside.split .foreground.container .text {
  margin: 0;
  max-width: var(--grid-container-width);
  padding: var(--spacing-xxxl) 0 var(--spacing-l) 0;
}

.aside.simple .foreground.container .text {
  margin-bottom: 80px;
}

.aside.notification .foreground.container .text {
  max-width: none;
  padding-top: 0;
  padding-bottom: 0;
}

.aside .foreground.container .image {
  position: relative;
  display: flex;
}

.aside .foreground.container > div {
  flex-grow: 1;
  flex-basis: 0;
  min-width: 0;
}

.aside.notification .foreground.container > div {
  flex-basis: 100%;
}

.aside.inline .foreground.container .image,
.aside.inline .foreground.container .text {
  padding: 0;
}

.aside.split.large .foreground.container .text {
  padding: var(--spacing-l) 0 var(--spacing-xxxl) 0;
}

.aside.split .icon-stack-area li,
.aside.split .icon-stack-area li a {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: bold;
}

.aside.notification .foreground.container .text a {
  white-space: nowrap;
}

.aside:not(.notification) .foreground.container .text > * {
  width: 100%;
}

.aside .foreground.container .text .heading-xl {
  margin: 0 0 var(--spacing-xs);
}

.aside .foreground.container .text .body-m,
.aside .foreground.container .text .body-s {
  margin-bottom: var(--spacing-s);
}

.aside .foreground.container .text .supplemental-text {
  padding-top: var(--spacing-s);
  margin-bottom: 0;
}

.aside.promobar .promo-text .action-area {
  flex-wrap: nowrap;
  gap: var(--spacing-xs);
}

.aside.promobar .promo-text .action-area,
.aside .foreground.container .text .action-area {
  margin-bottom: 0;
  display: flex;
  gap: var(--spacing-s);
  flex-wrap: wrap;
  align-items: center;
}

.aside.notification .icon-area {
  display: flex;
  align-items: center;
}

.aside .foreground.container .icon-area {
  height: 56px;
  max-width: 234px;
  margin-bottom: var(--spacing-s);
}

.aside .foreground.container a.icon-area {
  height: auto;
  margin-bottom: 0;
}

.aside.split .split-image img,
.aside.split .split-image video {
  position: relative;
  min-height: 270px;
}

.aside.split .split-image video {
  display: block;
}

.aside.split .mobile-square img,
.aside.split .mobile-square video {
  aspect-ratio: var(--aspect-ratio-square);
}

.aside.split .mobile-wide img,
.aside.split .mobile-wide video {
  aspect-ratio: var(--aspect-ratio-wide);
}

.aside.split .mobile-standard img,
.aside.split .mobile-standard video {
  aspect-ratio: var(--aspect-ratio-standard);
}

.aside.split .format img,
.aside.split .format video {
  height: auto;
}

.aside.split .icon-stack-area li img {
  width: var(--icon-size-m);
  height: auto;
}

.aside.split .format picture,
.aside.split .format video {
  display: flex;
  height: 100%;
  align-items: center;
}

.aside .foreground.container .icon-area img {
  max-width: 234px;
  height: var(--icon-size-l);
  width: auto;
  object-fit: cover;
  object-position: left top;
}

.aside.simple .foreground.container .image {
  display: none;
}

.aside.split {
  flex-direction: column;
}

.aside.split.large {
  flex-direction: column-reverse;
}

.aside.split .foreground.container {
  width: 100%;
  max-width: 100%;
  flex-direction: column;
  z-index: 1;
}

.aside.split .background {
  position: relative;
}

.aside.split.large .background {
  background-color: transparent;
}

.aside.split .foreground.container .image {
  margin: 0;
  display: none;
}

.aside.split .icon-stack-area li picture {
  flex-shrink: 0;
}

.aside.notification .text [class^="heading-"] + .action-area {
  margin-top: var(--spacing-xs);
}

.aside.notification .foreground.container img {
  display: block;
}

.aside .foreground.container .image video,
.aside .foreground.container .image picture,
.aside .foreground.container .image picture img {
  width: 100%;
  display: flex;
}

.aside.split .foreground.container .split-image img,
.aside.split .foreground.container .split-image video {
  object-fit: cover;
  height: 270px;
}

.aside.inline {
  border-radius: 10px;
}

.aside.inline .foreground.container {
  width: 100%;
  min-height: 0;
  margin: var(--spacing-m);
  padding: 0;
  gap: var(--spacing-m);
}

.aside.inline .foreground.container .image {
  margin-top: 0;
}

.aside.inline .heading-s {
  margin-bottom: var(--spacing-s);
}

.aside.notification {
  min-height: 0;
}

.aside.notification .foreground.container {
  padding-top: var(--spacing-s);
  padding-bottom: var(--spacing-s);
  box-sizing: border-box;
  justify-content: flex-start;
}

.aside.notification .foreground.container .image {
  max-width: 75px;
  margin: 0;
  order: -1;
}

.aside.notification .foreground.container .text a:not(.con-button) {
  width: auto;
  font-weight: normal;
}

.aside.notification .foreground.container .text .action-area > a {
  margin-right: 0;
}

.aside.promobar .foreground.container {
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
}

.aside.promobar .foreground.container .icon-area {
  margin-bottom: 0;
  height: var(--icon-size-m);
}

.aside.promobar .foreground.container .icon-area img {
  height: var(--icon-size-m);
}

.aside.notification.extra-small .foreground.container a:last-child {
  font-weight: bold;
}

.aside.notification.extra-small .foreground.container a:not(.con-button):last-of-type {
  margin-left: var(--spacing-xs);
  color: var(--link-color);
}

.static-links .aside.notification.extra-small .foreground.container a:not(.con-button):last-of-type {
  color: inherit;
}

.aside.notification.small .foreground.container .text a.con-button {
  display: table;
  margin-left: 0;
}

.aside.notification .foreground.container .text .heading-l {
  margin-bottom: var(--spacing-xxs);
}

.aside.notification .foreground.container:not(.no-image) .text .body-s.action-area,
.aside.notification .foreground.container:not(.no-image) .text .body-m.action-area {
  margin-bottom: 0;
}

.aside.notification .foreground.container .icon-area {
  height: auto;
  max-width: none;
  margin-bottom: var(--spacing-xs);
}

.aside.notification .foreground.container .icon-area img {
  max-height: 40px;
  height: auto;
}

.aside.notification.extra-small .foreground.container {
  min-height: 50px;
  padding-top: var(--spacing-xs);
  padding-bottom: var(--spacing-xs);
}

.aside.notification.extra-small .foreground.container .text {
  display: block;
}

.aside.notification.medium .foreground.container .text,
.aside.notification.large .foreground.container .text {
  flex-direction: column;
}

.aside.notification.small .foreground.container .text {
  flex-direction: column;
  max-width: 1000px;
}

.aside.center:not(.notification) .foreground.container .text {
  margin: 80px 0;
  text-align: center;
  padding: 0;
}

.aside.notification.center.small .foreground.container .text {
  text-align: left;
}

.aside.notification.center.small .foreground.container .text,
.aside.notification.center.extra-small .foreground.container .text {
  margin: 0 auto;
}

.aside.notification.small {
  min-height: 88px;
}

.aside.notification.medium {
  min-height: 160px;
}

.aside.notification.large {
  min-height: 250px;
}

.aside.notification.medium .foreground.container {
  max-width: 800px;
  gap: var(--spacing-xs);
}

.aside.notification.medium .foreground.container .text .heading-s {
  margin-bottom: var(--spacing-xxs);
}

.aside.notification.center.small .foreground.container .text p {
  text-align: initial;
}

.aside.notification.large .foreground.container {
  max-width: 1000px;
  gap: var(--spacing-xs);
}

.aside.notification .foreground.container [data-align=center],
.aside.notification.center .foreground.container,
.aside.notification.center .foreground.container > * {
  text-align: center;
  justify-content: center;
}

.aside.promobar.popup .foreground.container {
  width: 100%;
  padding: 0;
}

.aside.center:not(.notification) .foreground.container {
  padding: 0;
}

.aside.notification.large.center .foreground.container,
.aside.notification.large .foreground.container.no-image {
  max-width: 800px;
}

.aside.promobar.popup .promo-text .action-area {
  justify-content: flex-end;
  padding: 0 var(--spacing-xxs) var(--spacing-xxs) 0;
  gap: var(--spacing-xxs);
}

.aside.notification.center .foreground.container .action-area {
  justify-content: center;
}

.aside.notification.center.small .foreground.container .text,
.aside.notification.center.small .foreground.container .text > * {
  justify-content: flex-start;
}

.aside.split .icon-stack-area {
  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
  gap: 12px;
  margin: -8px 0 var(--spacing-s);
  width: 100%;
  padding: 0;
  list-style-type: none;
}

.aside.promobar.popup .promo-text .icon-area,
.aside.promobar.popup .promo-text .icon-area img {
  display: flex;
  gap: var(--spacing-xxs);
  align-items: center;
  height: var(--icon-size-xs);
}

.aside.center:not(.notification) .foreground.container .icon-area {
  max-width: 100%;
}

.aside.center:not(.notification) .foreground.container .text .action-area {
  justify-content: center;
}

.aside:not(.notification) .foreground.container .text .detail-m {
  margin-bottom: var(--spacing-xs);
}

.aside.split .image.format {
  display: flex;
}

.aside.split.bio .foreground.container .text .icon-area {
  display: none;
}

.aside.center:not(.notification) .foreground.container .text .icon-area {
  height: var(--icon-size-xxl);
}

.aside.center:not(.notification) .foreground.container .text .icon-area img {
  height: var(--icon-size-xxl);
  max-width: 300px;
  width: auto;
}

.aside.promobar .foreground.container > :first-child {
  padding: var(--spacing-xs) 0;
}

.aside.promobar .promo-text[data-align="center"] {
  justify-content: center;
}

.aside.promobar .action-area .con-button {
  flex-shrink: 0;
}

.aside.promobar .promo-text.desktop-up,
.aside.promobar .promo-text.tablet-up {
  display: none;
}

.aside.promobar .promo-text.mobile-up {
  display: flex;
}

.aside.promobar .promo-text {
  display: flex;
  flex-flow: row nowrap;
  gap: var(--spacing-xs);
  justify-content: space-between;
  width: 100%;
  padding: var(--spacing-xs) 0;
}

.aside.promobar .promo-text .content-area {
  display: flex;
  flex-flow: row nowrap;
  gap: var(--spacing-xs);
  align-items: center;
}

.aside.promobar.popup {
  border-radius: var(--spacing-xs);
  width: var(--grid-container-width);
  margin: auto;
  box-shadow: 0 3px 6px #707070;
}

.aside.promobar.popup .foreground.container .promo-text {
  flex-direction: column;
  padding: 0;
}

.aside.promobar.popup .promo-text .content-area {
  padding: var(--spacing-xs) var(--spacing-xs) 0 var(--spacing-xs);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-xxs);
}

.aside.promobar.popup .promo-text .text-area {
  margin-top: var(--spacing-m);
}

.aside.promobar.popup .promo-text .icon-area+.text-area {
  margin-top: 0;
}

.aside.promobar.popup .promo-text .content-area .text-area {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xxs);
}

.aside.promobar.popup .mobile-up.promo-text .detail-xs+.text-area {
  gap: var(--spacing-xs);
}

.aside.promobar.popup .promo-close {
  position: absolute;
  right: var(--spacing-xxs);
  top: var(--spacing-xxs);
  height: 20px;
  width: 20px;
  border: none;
  background: none;
  cursor: pointer;
}

.aside.promobar.popup .promo-close svg {
  position: absolute;
  top: 0;
  left: 0;
}

.aside.promobar.popup .promo-close circle {
  fill: var(--color-black);
}

.aside.promobar.popup .promo-close line {
  stroke: var(--color-white);
}

@media screen and (max-width: 600px) {
  .aside.no-media:not(.notification) .foreground.container {
    gap: 0;
  }

  .aside.split.no-media:not(.notification) .foreground.container .text {
    padding: var(--spacing-xxxl) 0;
  }

  .aside.promobar.popup .mobile-up.hide-block ~ .promo-close {
    display: none;
  }
}

@media screen and (min-width: 600px) {
  .aside.small {
    min-height: 420px;
  }

  .aside.medium {
    min-height: 560px;
  }

  .aside.large {
    min-height: 700px;
  }

  .aside .foreground.container {
    align-items: center;
    flex-direction: row;
    margin: 0 auto;
    padding: var(--spacing-m) 0;
    gap: var(--spacing-xl);
  }

  .aside:not(.notification):not(.inline) .foreground.container > :first-child {
    padding: 0;
  }

  .aside:not(.notification):not(.inline):not(.center) .foreground.container > :last-child {
    margin-bottom: 0;
  }

  .aside .foreground.container .image {
    margin: 0;
  }

  .aside .foreground.container .text.image {
    justify-content: flex-start;
  }

  .aside .background,
  .aside.split .split-image {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .aside .foreground.container .text {
    margin-bottom: 0;
    padding-right: var(--spacing-s);
  }

  .aside.split-right .foreground.container .text {
    padding-left: var(--spacing-s);
  }

  .aside.simple .foreground.container .text {
    margin-bottom: 0;
    max-width: 318px;
    padding-right: 0;
  }

  .aside.split .split-image {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .aside.split .tablet-wide img,
  .aside.split .tablet-wide video {
    aspect-ratio: var(--aspect-ratio-wide);
  }

  .aside.split .tablet-standard img,
  .aside.split .tablet-standard video {
    aspect-ratio: var(--aspect-ratio-standard);
  }

  .aside.split-right .split-image img,
  .aside.split-right .split-image video {
    left: 0;
  }

  .aside.split.large {
    flex-direction: column;
  }

  .aside .split-image .modal-img-link,
  .aside.split .split-image img,
  .aside.split .split-image video {
    width: 60.5vw;
    max-width: 56%;
    position: absolute;
    right: 0;
    object-fit: cover;
    object-position: center top;
  }

  .aside .split-image .modal-img-link,
  .aside.split.half .split-image img,
  .aside.split.half .split-image video {
    width: 50vw;
    max-width: 1396px;
    object-position: left top;
  }

  .aside.split.split-left .split-image img,
  .aside.split.split-left .split-image video {
    right: 0;
    left: auto;
  }

  .aside.split.split-right .split-image img,
  .aside.split.split-right .split-image video {
    left: 0;
    right: auto;
  }

  [dir="rtl"] .aside.split.split-right .split-image img,
  [dir="rtl"] .aside.split.split-right .split-image video {
    right: 0;
    left: auto;
  }

  [dir="rtl"] .aside.split.split-left .split-image img,
  [dir="rtl"] .aside.split.split-left .split-image video {
    left: 0;
    right: auto;
  }

  .aside.split .foreground.container {
    flex-direction: row;
    justify-content: stretch;
    max-width: var(--grid-container-width);
    margin: 0 auto;
    background-color: transparent;
  }

  .aside.split .foreground.container .text {
    flex: 0 0 31vw;
    padding: var(--spacing-xxl) 0;
    max-width: 100%;
    margin: 0;
  }

  .aside.split .foreground.container .image {
    object-fit: cover;
    flex: 0 0 61%;
    display: block;
    padding: 0;
  }

  .aside.inline .foreground.container .text {
    flex: 0 0 calc(60% - var(--spacing-s));
    max-width: none;
  }

  .aside.notification .foreground.container .text {
    padding-right: 0;
  }

  .aside.notification.small .foreground.container .text {
    flex-flow: row nowrap;
    align-items: center;
    flex-grow: 1;
  }

  .aside.notification.small .foreground.container .text .body-m {
    margin: 0;
  }

  .aside.notification.small .foreground.container .text .body-m.action-area {
    margin-left: 24px;
  }

  [dir = "rtl"] .aside.notification.small .foreground.container .text .body-m.action-area {
    margin-left: 0;
    margin-right: 24px;
  }

  .aside.split.half .foreground.container .text {
    flex: 0 0 41.72%;
  }

  .aside.split-right .foreground.container {
    flex-direction: row-reverse;
  }

  .aside.inline .foreground.container .image {
    flex: 0 0 calc(40% - var(--spacing-s));
    margin-bottom: 0;
  }

  .aside.notification .foreground.container {
    flex-direction: row;
  }

  .aside.notification.medium .foreground.container,
  .aside.notification.large .foreground.container {
    gap: var(--spacing-s);
  }

  .aside.notification .foreground.container .image {
    width: 30%;
    max-width: 188px;
    margin: 0;
    padding: 0;
    order: unset;
  }

  .aside.notification .foreground.container .text+.image {
    margin-right: 0;
  }

  .aside.notification .foreground.container .icon-area {
    width: auto;
    margin-right: var(--spacing-xs);
    margin-bottom: 0;
  }

  [dir = "rtl"] .aside.notification .foreground.container .icon-area {
    margin-left: var(--spacing-xs);
    margin-right: 0;
  }

  .aside.notification.extra-small .foreground.container.no-image .text {
    display: flex;
  }

  .aside.notification.extra-small .foreground.container.no-image .text a {
    margin-left: 5px;
  }

  .aside.promobar.popup .promo-text .action-area {
    justify-content: center;
    padding: 0 0 var(--spacing-xxs);
  }

  .aside.notification.small .foreground.container .text .action-area {
    width: auto;
    margin-top: 0;
  }

  .aside.split.bio .foreground.container .text .icon-area {
    display: block;
  }

  .aside.notification.small .foreground.container .text .icon-area {
    height: 40px;
  }

  .aside.center:not(.notification) .foreground.container .text .icon-area img {
    max-width: 234px;
  }

  .aside.medium.split.bio .foreground.container .text .icon-area,
  .aside.large.split.bio .foreground.container .text .icon-area {
    height: var(--icon-size-xxl);
    margin-bottom: var(--spacing-xs);
  }

  .aside.medium.split.bio .foreground.container .text .icon-area img,
  .aside.large.split.bio .foreground.container .text .icon-area img {
    width: var(--icon-size-xxl);
    height: var(--icon-size-xxl);
    border-radius: 50%;
  }

  .aside.promobar .promo-text .content-area .text-area {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--spacing-xxs);
  }

  .aside.promobar .promo-text.mobile-up,
  .aside.promobar .promo-text.desktop-up {
    display: none;
  }

  .aside.promobar .promo-text.tablet-up {
    display: flex;
  }

  .aside.promobar.popup .promo-text {
    gap: var(--spacing-s);
  }

  .aside.promobar.popup .promo-text .content-area {
    padding: var(--spacing-xxs) 0 0;
    align-items: center;
    text-align: center;
  }
}

@media (min-width: 600px) and (max-width: 1200px) {
  .aside.promobar.popup .tablet-up.hide-block ~ .promo-close {
    display: none;
  }
}

@media screen and (min-width: 1200px) {
  .aside .foreground.container {
    min-height: 420px;
    width: var(--grid-container-width);
  }

  .aside .foreground.container > div {
    object-fit: cover;
    padding-left: 0;
  }

  .aside .foreground.container .text {
    padding: var(--spacing-xxl) 0;
  }

  .aside .foreground.container .icon-area {
    max-width: 400px;
  }

  .aside .foreground.container .text .heading-xl {
    margin: 0 0 var(--spacing-xs);
  }

  .aside.inline .foreground.container .text {
    flex: 0 0 calc(64% - var(--spacing-s));
  }

  .aside.simple .foreground.container .text {
    margin-bottom: 0;
    max-width: 500px;
  }

  .aside.split .foreground.container .text {
    flex: 0 0 300px;
  }

  .aside.split .foreground.container .image {
    flex: 0 0 70%;
    max-width: none;
    object-fit: cover;
  }

  .aside.split .split-image img,
  .aside.split .split-image video {
    max-width: 1396px;
  }

  .aside.split .desktop-wide img,
  .aside.split .desktop-wide video {
    aspect-ratio: var(--aspect-ratio-wide);
  }

  .aside.split .desktop-standard img,
  .aside.split .desktop-standard video {
    aspect-ratio: var(--aspect-ratio-standard);
  }

  .aside.split.half .foreground.container .text {
    max-width: 500px;
  }

  .aside.inline {
    max-width: 800px;
    margin-right: auto;
    margin-left: auto;
  }

  .aside.inline .foreground.container .image {
    flex: 0 0 calc(36% - var(--spacing-s));
  }

  .aside.split.icon-stack .foreground.container .text,
  .aside.split.bio .foreground.container .text {
    padding: var(--spacing-xxl) 0;
  }

  .aside.split .icon-stack-area li {
    max-width: calc(50% - 6px);
    min-width: calc(50% - 6px);
  }

  .aside.split .icon-stack-area {
    flex-direction: row;
  }

  .aside.promobar .foreground.container .icon-area,
  .aside.promobar .foreground.container .icon-area img {
    height: var(--icon-size-xxl);
  }

  .aside.promobar.popup .promo-text .icon-area,
  .aside.promobar.popup .promo-text .icon-area img {
    height: var(--icon-size-m);
  }

  .aside.center:not(.notification) .foreground.container .text .icon-area img {
    max-width: 400px;
  }

  .aside.center:not(.notification) .foreground.container .text {
    max-width: 50%;
  }

  .aside.notification .foreground.container {
    min-height: 0;
  }

  .aside.notification.extra-small .foreground.container {
    padding-top: var(--spacing-xxs);
    padding-bottom: var(--spacing-xxs);
  }

  .aside.notification.medium .foreground.container {
    gap: var(--spacing-m);
  }

  .aside.notification.large .foreground.container {
    gap: var(--spacing-l);
  }

  .aside.notification .foreground.container .image {
    width: 20%;
  }

  .aside.notification .foreground.container .text+.image {
    margin-right: 0;
  }

  .aside.notification.small .foreground.container .text {
    align-items: center;
    justify-content: flex-start;
  }

  .aside.notification.center.small .foreground.container .text,
  .aside.notification.center.small .foreground.container .text > * {
    justify-content: center;
  }

  .aside.notification.center.small .foreground.container .text p {
    text-align: center;
  }

  .aside.notification.medium .foreground.container .image {
    max-width: 168px;
  }

  .aside.notification.large .foreground.container .image {
    max-width: 304px;
  }

  .aside.notification.medium .foreground.container .text+.image {
    margin-right: 0;
  }

  .aside.promobar .promo-text .content-area {
    gap: var(--spacing-m);
  }

  .aside.promobar .promo-text .content-area .text-area {
    gap: var(--spacing-xs);
  }

  .aside.promobar .promo-text .action-area {
    gap: var(--spacing-s);
  }

  .aside.promobar .promo-text.mobile-up,
  .aside.promobar .promo-text.tablet-up {
    display: none;
  }

  .aside.promobar .promo-text.desktop-up {
    display: flex;
    gap: var(--spacing-m);
  }

  .aside.promobar.popup {
    border-radius: var(--spacing-xl);
    width: 85%;
    max-width: 1600px;
  }

  .aside.promobar.popup .foreground.container .promo-text {
    padding: var(--spacing-xs) 0;
    flex-direction: row;
    gap: var(--spacing-l);
    justify-content: center;
    max-width: 83.4%;
  }

  .aside.promobar.popup .promo-text .content-area,
  .aside.promobar.popup .promo-text .action-area {
    flex-direction: row;
    padding: 0;
    gap: var(--spacing-xs);
    min-height: 40px;
  }

  .aside.promobar.popup .promo-close {
    right: var(--spacing-s);
    top: calc(50% - 10px);
  }

  .aside.promobar.popup .desktop-up.hide-block ~ .promo-close {
    display: none;
  }

  .aside.promobar.popup .promo-text .text-area {
    margin-top: 0;
  }
}`;
