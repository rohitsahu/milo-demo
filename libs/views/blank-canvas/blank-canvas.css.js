import { css } from "../../deps/lit-all.min.js";

export const style = css`
    #blank-canvas-main {
        display: flex;
        flex-direction : column;
        width: -webkit-fill-available;
        overflow-y: scroll;
        height: 958px;
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
    #delete-component {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background: transparent;
        border: none;
        color: red;
        cursor: pointer;
        margin-top: 5px;
        margin-left: 5px;
        opacity: 0.70;
    }
`;