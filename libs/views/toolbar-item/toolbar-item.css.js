import { css } from "../../deps/lit-all.min.js";


export const style = css`
    #toolbar-item {
        /*background-color: rgba(255, 255, 255, 0.8);*/
        /*border: 1px solid rgba(0, 0, 0, 0.8);*/
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
        background-color: rgba(200, 200, 200, 0.8);
        color : blue;
    }`;