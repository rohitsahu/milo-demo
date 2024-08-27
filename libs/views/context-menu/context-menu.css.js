import { css } from "../../deps/lit-all.min.js";

export const style = css`
    #canvas-context-toolbar {
        position: fixed;
        display: flex;
        z-index: 21;
        flex-direction: column;
        --tw-shadow: 0px 0px 1px rgba(18, 15, 40, .24), 0px 3px 6px rgba(18, 15, 40, .12), 0px .5px 2px rgba(18, 15, 40, .06);
        --tw-shadow-colored: 0px 0px 1px var(--tw-shadow-color), 0px 3px 6px var(--tw-shadow-color), 0px .5px 2px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        font-size: .875rem;
        line-height: 1.25rem;
        --tw-bg-opacity: 1;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));
        border-radius: .375rem;
        align-items: center;
        padding: 7px 15px;
    }

    #anchor-input {
        position: relative;
        margin-top: 0.5rem; /* Adjust margin as needed */
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.375rem;
        width: 100%;
    }

    .hover-bg-gray-200:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(238 237 242 / var(--tw-bg-opacity));
    }

    .input-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .icon-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 0.375rem;
        transition: background-color 0.3s ease;
        cursor: pointer;
    }

    .icon-container:hover {
        background-color: #f0f0f0;
    }

    .drag-toolbar-icon{
        padding-left: .75rem;
        padding-right: .25rem;
    }

    .toolbar-icon {
        height: 30px; /* Adjust size as needed */
    }

    .toolbar-row {
        padding: .375rem;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 5px;
    }

    .toolbar-row-item {
        padding-top: .25rem;
        padding-bottom: .25rem;
        width: fit-content;
        height: 100%;
        align-items: center;
        display: flex;
    }

    .toolbar-row-item-inner{
        position: relative;
        display: flex;
        outline: 2px solid transparent;
        outline-offset: 2px;
    }

    .toolbar-subtext {
        font-size: 12px;
        color: #333;
        float: left;
        margin-left: 10px;
        align-self: self-start;
    }

    .link-subtext {
        font-size: 12px;
        color: #333;
    }
    
    #submit-btn {
        width: 17px;
        height: 17px;
        position: absolute;
        top: 18px;
        right: 25px;
        cursor: pointer;
    }

    #link-icon {
        transform: rotate(-45deg);
        height: 30px;
        width: 70px;
    }

    .inner-container {
        display: flex;
    }

    .capitalize {
        text-transform: capitalize;
    }
    .text-xs {
        font-size: .75rem;
        line-height: 1rem;
    }
    .text-center {
        text-align: center;
    }
    .py-1 {
        padding-top: .25rem;
        padding-bottom: .25rem;
        padding-left: .375rem;
        padding-right: .375rem;
    }
    .px-1\.5 {
        padding-left: .375rem;
        padding-right: .375rem;
    }
    .rounded {
        border-radius: .25rem;
    }
    .whitespace-nowrap {
        white-space: nowrap;
    }
    .cursor-pointer {
        cursor: url(https://cdn.visily.ai/app/production/1723111432887/static/Pointer-2a769ff1.svg) 12 6, auto;
    }
    .box-border {
        box-sizing: border-box;
    }

    #canvas-hyperlink-popup{
        display: flex;
    width: fit-content;
    top: 351px;
    left: 854px;
    z-index: 31;
    flex-direction: column;
    filter: drop-shadow(0px 0px 1px rgba(18, 15, 40, .24)) drop-shadow(0px 3px 6px rgba(18, 15, 40, .12)) drop-shadow(0px .5px 2px rgba(18, 15, 40, .06));
    border-radius: 10px;
    }

    #position-icon{
        align-self: center;
    }
    `