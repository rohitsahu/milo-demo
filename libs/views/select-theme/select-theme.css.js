import { css } from "../../deps/lit-all.min.js";

export const style = css`
 
    #select-theme-container {
        display: flex;
        flex-direction: column;
        margin-block-start: 100px;
        flex-direction: column;
        flex-grow: auto;
        gap: 48px;
        margin-left: auto;
        margin-right: auto;
    }

    h1 {
        text-align : center;
    }

    h3{
        text-align : center;
    }

    #cards-container {
        display: flex;
        flex-direction: row;
        gap : 48px;
    }

    .card {
       outline: 1px solid rgb(230,230,230);
        border-radius: 10px;
        border: 1px solid rgb(230,230,230);
    }

    .card:hover {
        border : 1px solid blue;
        outline: 1px solid black;
    }

    .selected {
      border : 1px solid blue;
       outline: 1px solid blue;
    }

    img {
        width : 300px;
        height : 250px;
        object-fit : none;
        border-radius: 10px 10px 0px 0px;
    }

    #new-div {
        width : 300px;
        height : 308px;
        display : flex;

        outline: 1px solid rgb(230,230,230);
        border-radius: 10px;
        border: 1px double rgb(230,230,230);
    }

    #new-div:hover {
        border : 1px solid blue;
        outline: 1px solid black;
    }

    svg {
        margin : auto;
        width : 70px;
        height : 70px;
    }

`;