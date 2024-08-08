import { css } from "../../deps/lit-all.min.js";

export const style = css`
a[href*='.mp4'].hide-video {
  visibility: hidden !important;
}

video {
  max-width: 100%;
  height: auto;
}`;
