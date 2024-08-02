import { css } from "../../deps/lit-all.min.js";

export const style = css`
    #blank-canvas-main {
        display: flex;
        flex-direction : column;
        width : calc(100% - 280px);
    }

    #container {
    display:flex;
    flex-direction : row;
    }

    .child {
      --dx: 0px;
      --dy: 0px;
      position: fixed;
      flex-shrink: 1;
      z-index: var(--layer, 0);
      transform: translate(var(--dx), var(--dy));
    }
`;