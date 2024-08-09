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

    .canvas-element {
        --dx: 0px;
      --dy: 0px;
      
      transform: translate(var(--dx), var(--dy));
    }
`;