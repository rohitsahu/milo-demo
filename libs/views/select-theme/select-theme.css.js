import { css } from "../../deps/lit-all.min.js";

export const style = css`
 
    #select-theme-container {
        display: flex;
        flex-direction: column;
        margin-block-start: 100px;
        flex-direction: column;
        flex-grow: auto;
        gap: 30px;
        margin-left: auto;
        margin-right: auto;
    }

    h1 {
        text-align : center;
    }

    h2{
        text-align : center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    #cards-container {
        display: flex;
        flex-direction: row;
        gap : 12px;
    }

    .card {
       outline: 2px solid black;
        border-radius: 5px;
        border: 2px double grey;
    }

    .card:hover {
        border : 2px solid blue;
        outline: 2px solid black;
    }

    .selected {
      border : 2px solid blue;
       outline: 2px solid blue;
    }

    img {
        width : 200px;
        height : 300px;
        object-fit : cover;
    }

`;