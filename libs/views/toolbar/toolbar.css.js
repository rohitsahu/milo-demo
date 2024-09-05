import { css } from "../../deps/lit-all.min.js";

export const style = css`
    #toolbar-container {
        display: grid;
        row-gap: 20px;
        background-color : #F8F8F8;
        box-shadow: 10px 10px 18px #a9a9a970;
        padding : 10px;
    }

    .row {
        background-color: white;
        padding: 5px 5px;
        border-radius: 7px;
    }

    p {
        font-weight: 600;
        color: grey;
        font-size: 16px;
        margin: 0px;
    }

    .toolbar-row {
        display: contents;
    }
    
    .toolbar-grid {
        display : grid;
        gap : 15px;
        grid-template-columns : 65px 65px 65px;
    }

    toolbar-item {
        width: 50px;
        padding: 5px;
        margin: 2px;
        display: inline-block;
        cursor: pointer;
    }

    toolbar-item * {
        pointer-events: none;
    }
`;