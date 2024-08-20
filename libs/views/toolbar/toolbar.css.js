import { css } from "../../deps/lit-all.min.js";

export const style = css`
    #toolbar-container {
        width:260px;
        height:935px;
        background-color : #F8F8F8;
        box-shadow: 10px 10px 18px darkgrey;
        padding-left : 10px;
        padding-top : 10px;
        outline: 1px solid grey;
        margin-right:10px;
        overflow: scroll;
    }

    p {
            font-weight: 600;
            color: grey;
            font-size: 16px;
            padding-top: 10px;
    }
    
    .toolbar-grid {
        display : grid;
        column-gap : 10px;
        row-gap : 5px;
        grid-template-columns : 80px 80px 80px;
    }
`;