import { css } from "../../deps/lit-all.min.js";


export const style = css`
    #toolbar-item {
        padding: 2px;
        font-size: 12px;
        text-align: center;
        align-content: center;
        border-radius : 4px;
        line-height: normal;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        margin: 2px;
    }

    #toolbar-item:hover {
        background-color: rgb(218 220 224 / 44%);
    }


    .toolbar-text {
        position: absolute;
        visibility: hidden;
        white-space: nowrap;
        z-index: 10;
        margin-top: 63px;
        margin-left: 30px;
        background-color: rgb(60 64 67 / 23%);
        padding: 1px 5px;
        border-radius: 4px;
    }

    #toolbar-item:hover .toolbar-text {
        visibility: visible;
    }

    `;