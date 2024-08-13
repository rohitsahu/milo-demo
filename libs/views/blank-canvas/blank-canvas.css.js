import { css } from "../../deps/lit-all.min.js";

export const style = css`
    #blank-canvas-main {
        display: flex;
        flex-direction : column;
        width: -webkit-fill-available;
        overflow: scroll;
        height: 945px;
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