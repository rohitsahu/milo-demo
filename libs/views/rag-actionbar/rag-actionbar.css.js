import { css } from "../../deps/lit-all.min.js";

export const style = css`
    #actionbar-container {
        border-bottom : 1px solid grey;
        display : flex;
        flex-direction: row;
        justify-content: space-between;
    }

    #toolbar-button {
        background-color: #e8e8e8;
        width: 46px;
        height: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    sp-button {
        margin : 7px;
    }
`;