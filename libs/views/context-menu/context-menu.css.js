import { css } from "../../deps/lit-all.min.js";

export const style = css`
    #canvas-context-toolbar {
        position: fixed;
        display: flex;
        z-index: 21;
        flex-direction: row;
        --tw-shadow: 0px 0px 1px rgba(18, 15, 40, .24), 0px 3px 6px rgba(18, 15, 40, .12), 0px .5px 2px rgba(18, 15, 40, .06);
        --tw-shadow-colored: 0px 0px 1px var(--tw-shadow-color), 0px 3px 6px var(--tw-shadow-color), 0px .5px 2px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        font-size: .875rem;
        line-height: 1.25rem;
        --tw-bg-opacity: 1;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));
        border-radius: .375rem;
        align-items: center;
        
    }

    .hover-bg-gray-200:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(238 237 242 / var(--tw-bg-opacity));
    }

    .drag-toolbar-icon{
        padding-left: .75rem;
        padding-right: .25rem;
    }

    .toolbar-row {
    
    padding: .375rem;
    padding-left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
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
    `