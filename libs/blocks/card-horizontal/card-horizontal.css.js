import { css } from "../../deps/lit-all.min.js";

export const style = css`
.card-horizontal {
  display: block;
  width: 100%;
  position: relative;
}

.card-horizontal p {
  margin: 0;
}

.card-horizontal a {
  color: var(--text-color);
}

.card-horizontal a:focus {
  outline: none;
}

.card-horizontal a:hover {
  text-decoration: none;
}

.card-horizontal a::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

.card-horizontal .background {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.card-horizontal .background > div {
  height: 100%;
}

.card-horizontal .background img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  min-height: 700px;
}

.card-horizontal .foreground {
  gap: var(--spacing-m);
  max-width: var(--grid-container-width);
  margin: 0 auto;
}

.two-up .card-horizontal .foreground,
.three-up .card-horizontal .foreground {
  max-width: 100%;
  margin: 0;
}

.card-horizontal .foreground .card-block {
  position: relative;
  display: flex;
  flex-direction: row;
  text-align: initial;
  align-items: center;
  background-color: white;
  border-radius: 4px;
  gap: var(--spacing-s);
  border: 1px solid #EAEAEA;
  max-height: 130px;
  max-width: 600px;
  margin: 0 auto;
}

.card-horizontal .foreground .card-block:hover {
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
  transition: box-shadow .3s ease-in-out;
}

.card-horizontal .foreground .card-block.card-block-focus {
  border: 1px solid var(--color-accent);
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
  transition: box-shadow .3s ease-in-out;
}

.card-horizontal .foreground .card-block .card-content {
  padding-right: var(--spacing-s);
  margin: 16px 0;
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
}

[dir = "rtl"] .card-horizontal .foreground .card-block .card-content {
  padding-left: var(--spacing-s);
  padding-right: 0;
}

.card-horizontal .foreground .card-block .card-image {
  height: 130px;
  flex: 0 0 90px;
}

.card-horizontal:not(.tile) .foreground .card-block .card-image {
  position: relative;
}

.card-horizontal:not(.tile) .foreground .card-block .card-image::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(0 0 0 / 35%);
  transition: opacity .3s ease-in-out;
  opacity: 0;
}

.card-horizontal:not(.tile) .foreground .card-block:hover .card-image::after {
  opacity: 1;
}

.card-horizontal.tile .foreground .card-block .card-image picture {
  height: 62px;
}

.card-horizontal .foreground .card-block .card-image img {
  object-fit: cover;
  height: 100%;
}

.card-horizontal:not(.tile) .foreground .card-block .card-image img {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.card-horizontal.tile .foreground .card-block .card-image {
  height: 130px;
  flex: 0 0 88px;
  display: flex;
  align-items: center;
}

.card-horizontal.tile .foreground .card-block .card-image img {
  width: 64px;
  height: 62px;
  object-fit: contain;
  margin-left: var(--spacing-s);
}

[dir = "rtl"] .card-horizontal.tile .foreground .card-block .card-image img {
  margin-left: 0;
  margin-right: var(--spacing-s);
}

.two-up .card-horizontal .foreground .card-block .card-image,
.three-up .card-horizontal .foreground .card-block .card-image {
  flex: 0 0 91px;
}

@media screen and (min-width: 600px) {
  .card-horizontal .foreground .card-block {
    gap: var(--spacing-m);
  }

  .card-horizontal .foreground .card-block .card-image {
    flex: 0 0 191px;
  }

  .card-horizontal.tile .foreground .card-block .card-content {
    padding-right: var(--spacing-m);
  }

  [dir = "rtl"] .card-horizontal.tile .foreground .card-block .card-content {
    padding-left: var(--spacing-m);
    padding-right: 0;
  }

  .card-horizontal.tile .foreground .card-block .card-image {
    flex: 0 0 106px;
  }

  .card-horizontal.tile .foreground .card-block .card-image picture {
    height: 73px;
  }

  .card-horizontal.tile .foreground .card-block .card-image img {
    width: 74px;
    height: 72px;
    margin-left: var(--spacing-m);
  }

  [dir = "rtl"] .card-horizontal.tile .foreground .card-block .card-image img {
    margin-left: 0;
    margin-right: var(--spacing-m);
  }

  .two-up .card-horizontal .foreground .card-block {
    gap: var(--spacing-s);
  }

  .three-up .card-horizontal .foreground .card-block {
    gap: var(--spacing-s);
  }

  .two-up .card-horizontal.tile .foreground .card-block .card-image {
    flex: 0 0 96px;
  }

  .two-up .card-horizontal.tile .foreground .card-block .card-content {
    padding-right: var(--spacing-s);
  }

  [dir = "rtl"] .two-up .card-horizontal.tile .foreground .card-block .card-content {
    padding-left: var(--spacing-s);
    padding-right: 0;
  }

  .two-up .card-horizontal.tile .foreground .card-block .card-image img {
    width: 74px;
    height: 72px;
    margin-left: var(--spacing-s);
  }

  [dir = "rtl"] .two-up .card-horizontal.tile .foreground .card-block .card-image img {
    margin-left: 0;
    margin-right: var(--spacing-s);
  }

  .three-up .card-horizontal.tile .foreground .card-block .card-image {
    flex: 0 0 98px;
  }

  .three-up .card-horizontal.tile .foreground .card-block .card-image img {
    margin-left: var(--spacing-s);
  }

  [dir = "rtl"] .three-up .card-horizontal.tile .foreground .card-block .card-image img {
    margin-left: 0;
    margin-right: var(--spacing-s);
  }
}

@media screen and (min-width: 1200px) {
  .card-horizontal .foreground {
    max-width: 600px;
    margin: 0 auto;
  }

  .card-horizontal .foreground .card-block .card-content {
    padding-right: var(--spacing-m);
  }

  [dir = "rtl"] .card-horizontal .foreground .card-block .card-content {
    padding-left: var(--spacing-m);
    padding-right: 0;
  }

  .two-up .card-horizontal .foreground .card-block .card-content {
    padding-right: var(--spacing-s);
  }

  [dir = "rtl"] .two-up .card-horizontal .foreground .card-block .card-content {
    padding-left: var(--spacing-s);
    padding-right: 0;
  }

  .three-up .card-horizontal .foreground .card-block .card-content {
    padding-right: var(--spacing-s);
  }

  [dir = "rtl"] .three-up .card-horizontal .foreground .card-block .card-content {
    padding-left: var(--spacing-s);
    padding-right: 0;
  }

  .card-horizontal .foreground .card-block .card-image {
    flex: 0 0 180px;
  }

  .card-horizontal.tile .foreground .card-block .card-image {
    flex: 0 0 106px;
  }

  .two-up .card-horizontal .foreground .card-block {
    gap: var(--spacing-s);
  }

  .two-up .card-horizontal .foreground .card-block .card-image {
    flex: 0 0 115px;
  }

  .three-up .card-horizontal .foreground .card-block {
    gap: var(--spacing-s);
  }

  .three-up .card-horizontal .foreground .card-block .card-image {
    flex: 0 0 113px;
  }

  .two-up .card-horizontal.tile .foreground .card-block .card-image {
    flex: 0 0 98px;
  }

  .two-up .card-horizontal.tile .foreground .card-block .card-image img {
    margin-left: var(--spacing-s);
  }

  [dir = "rtl"] .two-up .card-horizontal.tile .foreground .card-block .card-image img {
    margin-left: 0;
    margin-right: var(--spacing-s);
  }

  .three-up .card-horizontal.tile .foreground .card-block .card-image {
    flex: 0 0 98px;
  }

  .three-up .card-horizontal.tile .foreground .card-block .card-image img {
    margin-left: var(--spacing-s);
  }

  [dir = "rtl"] .three-up .card-horizontal.tile .foreground .card-block .card-image img {
    margin-left: 0;
    margin-right: var(--spacing-s);
  }
}`;
