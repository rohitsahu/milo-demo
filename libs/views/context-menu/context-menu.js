import { LitElement, html, nothing } from "../../deps/lit-all.min.js";
import { text } from "../html-components/text.js";
import { style } from "./context-menu.css.js";

export class ContextMenu extends LitElement {

    static tag = "context-menu";

    static styles = style;

    
    constructor() {
        super();
    }

    applyStyle(tagName) {
        const blankCanvas = document.querySelector('blank-canvas').shadowRoot;
        const selection = blankCanvas.getSelection();
        const selectedText = selection.toString();
        const styleElement = document.createElement(tagName);
        styleElement.textContent = selectedText;
    
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            range.deleteContents();
            range.insertNode(styleElement);
        } else {
            const parentElement = this.parentElement.parentElement;
            const firstTextNode = Array.from(parentElement.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
            if (firstTextNode) {
                const textContent = firstTextNode.nodeValue.trim();
                if (textContent === selectedText) {
                    styleElement.textContent = textContent;
                    parentElement.insertBefore(styleElement, firstTextNode);
                    firstTextNode.nodeValue = '';
                } else {
                    const newTextNode = document.createTextNode(textContent);
                    styleElement.appendChild(newTextNode);
                    parentElement.insertBefore(styleElement, firstTextNode);
                    firstTextNode.nodeValue = '';
                }
            }
        }
    }
    
    executeBold() {
        this.applyStyle('strong');
    }
    
    executeItalic() {
        this.applyStyle('i');
    }
    
    executeUnderline() {
        this.applyStyle('u');
    }

    executeStrikethrough() {
        const blankCanvas = document.querySelector('blank-canvas').shadowRoot;
        const selection = blankCanvas.getSelection();
        const range = selection.getRangeAt(0);
        const selectedText = selection.toString();
        const boldElement = document.createElement('del');
        boldElement.textContent = selectedText;
    
        const content = range.extractContents();
        range.insertNode(boldElement);
    }
    
    deleteElement(e) {
        if(this.elementType==="media"){
            e.currentTarget.parentElement.getRootNode().host.parentElement.parentElement.remove();
        }
        else {
            const contextMenu = e.currentTarget.parentElement.parentElement;
            const contextmenuParent = contextMenu.getRootNode();
            const y = contextmenuParent.host;
            y.parentElement.parentElement.remove()
        }
    }

    renderAnchorInput(event) {
        if(this.elementType==='anchor') {
            event.preventDefault();
            const blankCanvas = document.querySelector('blank-canvas').shadowRoot;
            const toolbar = blankCanvas.querySelector("#context-menu-div");
        
            const anchorInFocus = event.currentTarget.parentElement.parentElement.getRootNode().host.parentElement.parentElement;
            const contextMenu = event.currentTarget.parentElement.parentElement.getRootNode().host.parentElement.parentElement.parentElement;

            const inputFielddiv = document.createElement('div');
            inputFielddiv.style.width = 'fit-content';
            inputFielddiv.innerHTML = this.anchorInputString();
            
            contextMenu.appendChild(inputFielddiv);           
            if (toolbar) {
                toolbar.remove();
                anchorInFocus.contentEditable = false;
            }

            const submit = inputFielddiv.querySelector('#submit-btn');
            const input = inputFielddiv.querySelector('input');
            submit.addEventListener('click', (e) => {
                if(input.value!=""){
                    anchorInFocus.href = input.value;
                }
                contextMenu.removeChild(inputFielddiv);
            })
        }
        else {
            const blankCanvas = document.querySelector('blank-canvas').shadowRoot;
            const toolbar = blankCanvas.querySelector("#context-menu-div");
        
            const anchorInFocus = event.currentTarget.parentElement.getRootNode().host.parentElement.parentElement;
            const contextMenu = event.currentTarget.parentElement.getRootNode().host.parentElement.parentElement;
            const video = event.currentTarget.parentElement.getRootNode().host.parentElement.previousSibling;
            const source = video.querySelector('source');

            const inputFielddiv = document.createElement('div');
            inputFielddiv.style.width = 'fit-content';
            inputFielddiv.innerHTML = this.anchorInputString();
            
            contextMenu.appendChild(inputFielddiv);
            
            if (toolbar) {
                toolbar.remove();
            }

            const submit = inputFielddiv.querySelector('#submit-btn');
            const input = inputFielddiv.querySelector('input');

            submit.addEventListener('click', (e) => {
                if(input.value!=""){
                    source.src = `${input.value}?v=${Math.random()}`;
                    video.load();
                    video.play()
                }
                contextMenu.removeChild(inputFielddiv);
                document.querySelector('blank-canvas').requestUpdate()
            })
        }
    }

    renderAnchorMenuItem(elementType) {
        return html`
            <div @click = ${(e)=>this.renderAnchorInput(e, elementType)} class="box-border cursor-pointer whitespace-nowrap rounded capitalize hover-bg-gray-200 px-1.5 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                    <defs>
                        <style>
                        .fill {
                            fill: #464646;
                        }
                        </style>
                    </defs>
                    <title>S Link 18 N</title>
                    <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path class="fill" d="M15.85,2.15a3.588,3.588,0,0,0-5.074,0c-.1925.193-2.132,2.111-2.6755,2.6545A4.15349,4.15349,0,0,1,9.972,5.108c.2595-.26,1.784-1.763,1.8915-1.8705a2.05061,2.05061,0,1,1,2.9,2.9L11.204,9.695a2.30853,2.30853,0,0,1-1.686.65,1.97648,1.97648,0,0,1-1.35-.5545,2.07708,2.07708,0,0,1-.6205-.813,1.03342,1.03342,0,0,0-.214.159l-.8175.856a3.57187,3.57187,0,0,0,.613.8365,3.92429,3.92429,0,0,0,5.3385-.219L15.85,7.226a3.587,3.587,0,0,0,.00322-5.07278Z" />
                    <path class="fill" d="M7.963,12.912c-.26.26-1.75,1.7735-1.8565,1.881a2.05061,2.05061,0,0,1-2.9-2.9L6.8,8.3a2.29,2.29,0,0,1,1.683-.646,2.1,2.1,0,0,1,1.892,1.391,1.03342,1.03342,0,0,0,.214-.159l.867-.8605a3.58269,3.58269,0,0,0-.613-.8365,3.6555,3.6555,0,0,0-5.13.024L2.1195,10.806a3.588,3.588,0,1,0,5.074,5.0745c.193-.193,2.097-2.1215,2.6405-2.665A4.15006,4.15006,0,0,1,7.963,12.912Z" />
                </svg>
            </div>
        `
    }

    renderAllOptions() {
        return html`
            <div class="toolbar-row">
                <div @click = ${this.executeBold} class="box-border cursor-pointer whitespace-nowrap rounded capitalize hover-bg-gray-200 px-1.5 py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M14.7 11.3c1-.6 1.5-1.6 1.5-3 0-2.3-1.3-3.4-4-3.4H7v14h5.8c1.4 0 2.5-.3 3.3-1 .8-.7 1.2-1.7 1.2-2.9.1-1.9-.8-3.1-2.6-3.7zm-5.1-4h2.3c.6 0 1.1.1 1.4.4.3.3.5.7.5 1.2s-.2 1-.5 1.2c-.3.3-.8.4-1.4.4H9.6V7.3zm4.6 9c-.4.3-1 .4-1.7.4H9.6v-3.9h2.9c.7 0 1.3.2 1.7.5.4.3.6.8.6 1.5s-.2 1.2-.6 1.5z"></path></svg>
                </div>
                <div @click = ${this.executeItalic} class="box-border cursor-pointer whitespace-nowrap rounded capitalize hover-bg-gray-200 px-1.5 py-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current">
                        <path d="M6.31576 17C5.84091 17 5.45612 16.6152 5.45612 16.1404C5.45612 15.6655 5.84091 15.2807 6.31576 15.2807H8.06781L10.1801 4.7193H8.77191C8.29705 4.7193 7.91226 4.3345 7.91226 3.85965C7.91226 3.3848 8.29705 3 8.77191 3H13.6842C14.159 3 14.5438 3.3848 14.5438 3.85965C14.5438 4.3345 14.159 4.7193 13.6842 4.7193H11.9321L9.81986 15.2807H11.228C11.7029 15.2807 12.0877 15.6655 12.0877 16.1404C12.0877 16.6152 11.7029 17 11.228 17H8.77191H6.31576Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div @click = ${this.executeUnderline} class="box-border cursor-pointer whitespace-nowrap rounded capitalize hover-bg-gray-200 px-1.5 py-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current">
                        <path d="M4.61243 16.9228C4.61243 16.6467 4.83628 16.4228 5.11243 16.4228H14.8876C15.1637 16.4228 15.3876 16.6467 15.3876 16.9228V17.0003C15.3876 17.2765 15.1637 17.5003 14.8876 17.5003H5.11243C4.83629 17.5003 4.61243 17.2765 4.61243 17.0003V16.9228Z" fill="currentColor"></path>
                        <path d="M13.8326 2.5C13.6669 2.5 13.5326 2.63431 13.5326 2.8V10.7102C13.5326 12.4367 12.063 13.78 9.99668 13.78C7.93702 13.78 6.46256 12.4367 6.46256 10.7102V2.8C6.46256 2.63431 6.32825 2.5 6.16256 2.5H4.91243C4.74674 2.5 4.61243 2.63431 4.61243 2.8V10.8655C4.61243 13.536 6.74494 15.4302 9.99668 15.4302C13.2484 15.4302 15.3876 13.536 15.3876 10.8655V2.8C15.3876 2.63431 15.2532 2.5 15.0876 2.5H13.8326Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div @click = ${this.executeStrikethrough} class="box-border cursor-pointer whitespace-nowrap rounded capitalize hover-bg-gray-200 px-1.5 py-1">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 10C2.25 9.51675 2.64175 9.125 3.125 9.125H16.875C17.3582 9.125 17.75 9.51675 17.75 10C17.75 10.4832 17.3582 10.875 16.875 10.875H3.125C2.64175 10.875 2.25 10.4832 2.25 10Z" fill="currentColor"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.625C7.84635 4.625 6.7422 5.82783 6.7422 6.875V6.88521L6.74214 6.88521C6.74076 7.00337 6.7584 7.12098 6.79439 7.23353C6.94156 7.69383 6.68771 8.18627 6.22742 8.33344C5.76712 8.4806 5.27468 8.22676 5.12751 7.76647C5.03489 7.47677 4.98921 7.17413 4.9922 6.87002C4.99542 4.46684 7.3274 2.875 10 2.875C12.0899 2.875 13.9057 3.81077 14.655 5.36149C14.8653 5.7966 14.683 6.31977 14.2479 6.53003C13.8128 6.74028 13.2896 6.558 13.0794 6.12289C12.7037 5.34548 11.6289 4.625 10 4.625Z" fill="currentColor"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.9725 9.75523C10.1078 9.29131 10.5936 9.02492 11.0575 9.16023C12.0005 9.43526 13.023 9.78556 13.8138 10.3645C14.6537 10.9795 15.25 11.869 15.25 13.1252C15.25 14.3447 14.556 15.3656 13.6012 16.0473C12.6447 16.7302 11.3684 17.1252 10 17.1252C8.63159 17.1252 7.35534 16.7302 6.39881 16.0473C5.44399 15.3656 4.75 14.3447 4.75 13.1252C4.75 12.642 5.14175 12.2502 5.625 12.2502C6.10825 12.2502 6.5 12.642 6.5 13.1252C6.5 13.6323 6.78647 14.1739 7.41564 14.6231C8.0431 15.071 8.95435 15.3752 10 15.3752C11.0457 15.3752 11.9569 15.071 12.5844 14.6231C13.2135 14.1739 13.5 13.6323 13.5 13.1252C13.5 12.5221 13.2525 12.1225 12.78 11.7765C12.2583 11.3946 11.4995 11.1121 10.5675 10.8402C10.1036 10.7049 9.83719 10.2191 9.9725 9.75523Z" fill="currentColor"></path>
                    </svg>
                </div>
                ${this.elementType==="anchor"? this.renderAnchorMenuItem() : nothing}
                <div @click = ${(e)=>this.deleteElement(e)} class="box-border cursor-pointer whitespace-nowrap rounded capitalize hover-bg-gray-200 px-1.5 py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                        <defs>
                            <style>
                            .fill {
                                fill: #464646;
                            }
                            </style>
                        </defs>
                        <title>S Delete 18 N</title>
                        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path class="fill" d="M15.75,3H12V2a1,1,0,0,0-1-1H6A1,1,0,0,0,5,2V3H1.25A.25.25,0,0,0,1,3.25v.5A.25.25,0,0,0,1.25,4h1L3.4565,16.55a.5.5,0,0,0,.5.45H13.046a.5.5,0,0,0,.5-.45L14.75,4h1A.25.25,0,0,0,16,3.75v-.5A.25.25,0,0,0,15.75,3ZM5.5325,14.5a.5.5,0,0,1-.53245-.46529L5,14.034l-.5355-8a.50112.50112,0,0,1,1-.067l.5355,8a.5.5,0,0,1-.46486.53283ZM9,14a.5.5,0,0,1-1,0V6A.5.5,0,0,1,9,6ZM11,3H6V2h5Zm1,11.034a.50112.50112,0,0,1-1-.067l.5355-8a.50112.50112,0,1,1,1,.067Z" />
                    </svg>
                </div>
            </div>
        </div>`
    }

    renderMediaOptions() {
        return html`
            <div style="display: flex;">
                <div @click = ${(e)=>this.deleteElement(e)} class="box-border cursor-pointer whitespace-nowrap rounded capitalize hover-bg-gray-200 px-1.5 py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18" style="vertical-align: middle;">
                        <defs>
                            <style>
                            .fill {
                                fill: #464646;
                            }
                            </style>
                        </defs>
                        <title>S Delete 18 N</title>
                        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path class="fill" d="M15.75,3H12V2a1,1,0,0,0-1-1H6A1,1,0,0,0,5,2V3H1.25A.25.25,0,0,0,1,3.25v.5A.25.25,0,0,0,1.25,4h1L3.4565,16.55a.5.5,0,0,0,.5.45H13.046a.5.5,0,0,0,.5-.45L14.75,4h1A.25.25,0,0,0,16,3.75v-.5A.25.25,0,0,0,15.75,3ZM5.5325,14.5a.5.5,0,0,1-.53245-.46529L5,14.034l-.5355-8a.50112.50112,0,0,1,1-.067l.5355,8a.5.5,0,0,1-.46486.53283ZM9,14a.5.5,0,0,1-1,0V6A.5.5,0,0,1,9,6ZM11,3H6V2h5Zm1,11.034a.50112.50112,0,0,1-1-.067l.5355-8a.50112.50112,0,1,1,1,.067Z" />
                    </svg>
                </div>
                <span class="box-border cursor-pointer whitespace-nowrap rounded capitalize px-1.5 py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18" style="vertical-align: middle;">
                        <defs>
                            <style>
                            .fill {
                                fill: #464646;
                            }
                            </style>
                        </defs>
                        <title>S Link 18 N</title>
                        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path class="fill" d="M15.85,2.15a3.588,3.588,0,0,0-5.074,0c-.1925.193-2.132,2.111-2.6755,2.6545A4.15349,4.15349,0,0,1,9.972,5.108c.2595-.26,1.784-1.763,1.8915-1.8705a2.05061,2.05061,0,1,1,2.9,2.9L11.204,9.695a2.30853,2.30853,0,0,1-1.686.65,1.97648,1.97648,0,0,1-1.35-.5545,2.07708,2.07708,0,0,1-.6205-.813,1.03342,1.03342,0,0,0-.214.159l-.8175.856a3.57187,3.57187,0,0,0,.613.8365,3.92429,3.92429,0,0,0,5.3385-.219L15.85,7.226a3.587,3.587,0,0,0,.00322-5.07278Z" />
                        <path class="fill" d="M7.963,12.912c-.26.26-1.75,1.7735-1.8565,1.881a2.05061,2.05061,0,0,1-2.9-2.9L6.8,8.3a2.29,2.29,0,0,1,1.683-.646,2.1,2.1,0,0,1,1.892,1.391,1.03342,1.03342,0,0,0,.214-.159l.867-.8605a3.58269,3.58269,0,0,0-.613-.8365,3.6555,3.6555,0,0,0-5.13.024L2.1195,10.806a3.588,3.588,0,1,0,5.074,5.0745c.193-.193,2.097-2.1215,2.6405-2.665A4.15006,4.15006,0,0,1,7.963,12.912Z" />
                    </svg>
                </span>
                <span style="align-self: center;">:</span>
                <span @mousedown=${this.handleMouseDown} id="input-wrapper" style="padding: 5px 5px;
                    width: 216px;
                    background: white;
                    border-radius: 6px;"
                    class="flex w-fit items-center justify-center rounded-md bg-white px-1.5 py-1 text-12 leading-3.75 h-10">
                    <input type="text" .value=${this.linkText} @input=${this.handleLinkInput} @focus=${this.handleFocus} @click=${this.handleClick} style="width: 100%;"/>
                </span>
                <span id="submit-btn-media" @click=${this.handleSubmitClickMedia}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="9" stroke="black" stroke-width="1" fill="none"/>
                        <g id="ArrowSize100">
                        <rect id="Frame" width="20" height="20" fill="red" opacity="0"/>
                        <path style="transform: translate(5px, 5px);" d="M9.94952,4.99652a.87815.87815,0,0,0-.02966-.15259.854.854,0,0,0-.03522-.17315L9.882,4.66217A.86384.86384,0,0,0,9.7464,4.459a.819.819,0,0,0-.04718-.07226l-.00488-.005-.00086-.00079L6.62354,1.26172A.87459.87459,0,1,0,5.37646,2.48828L6.98682,4.125H.9248a.875.875,0,0,0,0,1.75h6.062L5.37646,7.51172A.87459.87459,0,1,0,6.62354,8.73828l3.06994-3.1192.00086-.00079.00488-.005A.819.819,0,0,0,9.7464,5.541.86384.86384,0,0,0,9.882,5.33783l.00262-.00861a.854.854,0,0,0,.03522-.17315.87815.87815,0,0,0,.02966-.15259L9.9502,5Z"/>
                        </g>
                    </svg>
                </span>
            </div>`
    }

    handleIconClick(icon) {
        switch(icon) {
            case 'link':
                this.element.classList.remove(...this.element.classList); // Clear all classes
                break;
            case 'outline':
                this.element.classList.remove(...this.element.classList); // Clear all classes
                this.element.classList.add('con-button', 'outline', 'button-xl'); // Add new classes
                break;
            case 'fill':
                this.element.classList.remove(...this.element.classList); // Clear all classes
                this.element.classList.add('con-button', 'blue', 'button-xl');
                break;
            case 'secondary':
                this.element.classList.remove(...this.element.classList); // Clear all classes
                this.element.classList.add('con-button', 'secondary', 'button-xl');
                break;
            case 'negative':
                this.element.classList.remove(...this.element.classList); // Clear all classes
                this.element.classList.add('con-button', 'negative', 'button-xl');
                break;
            case 'disabled':
                this.element.classList.remove(...this.element.classList); // Clear all classes
                this.element.classList.add('con-button', 'disabled', 'button-xl');
                break;
        }
        console.log(icon);
    }

    handleLinkInput(event) {
        this.parentElement.parentElement.href = event.target.value;
        this.linkText = event.target.value;
    }

    handleTextInput(event) {
        this.textVal = event.target.value;
        //this.parentElement.parentElement.innerText = event.target.value;
    }

    handleSubmitClick(event) {
        event.preventDefault();
        event.stopPropagation();
        // Logic to close the context menu
        this.parentElement.parentElement.dispatchEvent(new CustomEvent('handle-submit', { detail: { linkText:this.linkText, text: this.textVal } }));
    }

    handleSubmitClickMedia(event) {
        event.preventDefault();
        const blankCanvas = document.querySelector('blank-canvas').shadowRoot;
        const toolbar = blankCanvas.querySelector("#context-menu-div");
    
        const video = event.currentTarget.parentElement.getRootNode().host.parentElement.previousSibling;
        const source = video.querySelector('source');

        source.src = `${this.linkText}?v=${Math.random()}`;
        video.load();
        video.play()
        
        if (toolbar) {
            toolbar.remove();
        }

        video.dispatchEvent(new CustomEvent('handle-submit', { detail: { content: this.linkText } }));
    }

    renderButtonOptions() {
        return html`
            <div class="toolbar-row">
                <div @click = ${this.executeBold} class="icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
                        <path d="M14.7 11.3c1-.6 1.5-1.6 1.5-3 0-2.3-1.3-3.4-4-3.4H7v14h5.8c1.4 0 2.5-.3 3.3-1 .8-.7 1.2-1.7 1.2-2.9.1-1.9-.8-3.1-2.6-3.7zm-5.1-4h2.3c.6 0 1.1.1 1.4.4.3.3.5.7.5 1.2s-.2 1-.5 1.2c-.3.3-.8.4-1.4.4H9.6V7.3zm4.6 9c-.4.3-1 .4-1.7.4H9.6v-3.9h2.9c.7 0 1.3.2 1.7.5.4.3.6.8.6 1.5s-.2 1.2-.6 1.5z"></path></svg>
                </div>
                <div @click = ${this.executeItalic} class="icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true" focusable="false">
                        <path d="M6.31576 17C5.84091 17 5.45612 16.6152 5.45612 16.1404C5.45612 15.6655 5.84091 15.2807 6.31576 15.2807H8.06781L10.1801 4.7193H8.77191C8.29705 4.7193 7.91226 4.3345 7.91226 3.85965C7.91226 3.3848 8.29705 3 8.77191 3H13.6842C14.159 3 14.5438 3.3848 14.5438 3.85965C14.5438 4.3345 14.159 4.7193 13.6842 4.7193H11.9321L9.81986 15.2807H11.228C11.7029 15.2807 12.0877 15.6655 12.0877 16.1404C12.0877 16.6152 11.7029 17 11.228 17H8.77191H6.31576Z"></path>
                    </svg>
                </div>
                <div @click = ${this.executeUnderline} class="icon-container">
                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current">
                        <path d="M4.61243 16.9228C4.61243 16.6467 4.83628 16.4228 5.11243 16.4228H14.8876C15.1637 16.4228 15.3876 16.6467 15.3876 16.9228V17.0003C15.3876 17.2765 15.1637 17.5003 14.8876 17.5003H5.11243C4.83629 17.5003 4.61243 17.2765 4.61243 17.0003V16.9228Z"></path>
                        <path d="M13.8326 2.5C13.6669 2.5 13.5326 2.63431 13.5326 2.8V10.7102C13.5326 12.4367 12.063 13.78 9.99668 13.78C7.93702 13.78 6.46256 12.4367 6.46256 10.7102V2.8C6.46256 2.63431 6.32825 2.5 6.16256 2.5H4.91243C4.74674 2.5 4.61243 2.63431 4.61243 2.8V10.8655C4.61243 13.536 6.74494 15.4302 9.99668 15.4302C13.2484 15.4302 15.3876 13.536 15.3876 10.8655V2.8C15.3876 2.63431 15.2532 2.5 15.0876 2.5H13.8326Z"></path>
                    </svg>
                </div>
                <div @click = ${(e)=>this.deleteElement(e)} class="icon-container">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                        <defs>
                            <style>
                            .fill {
                                fill: #464646;
                            }
                            </style>
                        </defs>
                        <title>S Delete 18 N</title>
                        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path class="fill" d="M15.75,3H12V2a1,1,0,0,0-1-1H6A1,1,0,0,0,5,2V3H1.25A.25.25,0,0,0,1,3.25v.5A.25.25,0,0,0,1.25,4h1L3.4565,16.55a.5.5,0,0,0,.5.45H13.046a.5.5,0,0,0,.5-.45L14.75,4h1A.25.25,0,0,0,16,3.75v-.5A.25.25,0,0,0,15.75,3ZM5.5325,14.5a.5.5,0,0,1-.53245-.46529L5,14.034l-.5355-8a.50112.50112,0,0,1,1-.067l.5355,8a.5.5,0,0,1-.46486.53283ZM9,14a.5.5,0,0,1-1,0V6A.5.5,0,0,1,9,6ZM11,3H6V2h5Zm1,11.034a.50112.50112,0,0,1-1-.067l.5355-8a.50112.50112,0,1,1,1,.067Z" />
                    </svg>
                </div>
                <div id="submit-btn" @click=${this.handleSubmitClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="9" stroke="black" stroke-width="1" fill="none"/>
                        <g id="ArrowSize100">
                        <rect id="Frame" width="20" height="20" fill="red" opacity="0"/>
                        <path style="transform: translate(5px, 5px);" d="M9.94952,4.99652a.87815.87815,0,0,0-.02966-.15259.854.854,0,0,0-.03522-.17315L9.882,4.66217A.86384.86384,0,0,0,9.7464,4.459a.819.819,0,0,0-.04718-.07226l-.00488-.005-.00086-.00079L6.62354,1.26172A.87459.87459,0,1,0,5.37646,2.48828L6.98682,4.125H.9248a.875.875,0,0,0,0,1.75h6.062L5.37646,7.51172A.87459.87459,0,1,0,6.62354,8.73828l3.06994-3.1192.00086-.00079.00488-.005A.819.819,0,0,0,9.7464,5.541.86384.86384,0,0,0,9.882,5.33783l.00262-.00861a.854.854,0,0,0,.03522-.17315.87815.87815,0,0,0,.02966-.15259L9.9502,5Z"/>
                        </g>
                    </svg>
                </div>
            </div>
            <div class="toolbar-row">
                <div class="link-subtext">Text: </div>
                <div id="input-wrapper" style="padding: 5px 5px;
                    width: 216px;
                    background: white;
                    border-radius: 6px;"
                    class="flex w-fit items-center justify-center rounded-md bg-white px-1.5 py-1 text-12 leading-3.75 h-10">
                    <input type="text" .value=${this.textVal} @input=${this.handleTextInput} @focus=${this.handleFocus} @focusout=${this.handleFocusout} @click=${this.handleClick} @blur=${this.handleBlur} style="width: 100%;"/>
                </div>
            </div>
            <div class="toolbar-row">
                <div class="link-subtext">Link: </div>
                <div @mousedown=${this.handleMouseDown} id="input-wrapper" style="padding: 5px 5px;
                    width: 216px;
                    background: white;
                    border-radius: 6px;"
                    class="flex w-fit items-center justify-center rounded-md bg-white px-1.5 py-1 text-12 leading-3.75 h-10">
                    <input type="text" .value=${this.linkText} @input=${this.handleLinkInput} @focus=${this.handleFocus} @click=${this.handleClick} style="width: 100%;"/>
                </div>
            </div>
            <div class="toolbar-subtext">Choose a variant:</div>
            <div class="toolbar-row" style="padding-bottom: 0px;">
                <div class="toolbar-row-item">
                    <div class="icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="link-icon" @click=${() => this.handleIconClick('link')}>
                            <path d="M3.9,12c0-1.7,1.4-3.1,3.1-3.1h4.1v-2H7C4.2,6.9,2,9.1,2,12s2.2,5.1,5.1,5.1h4.1v-2H7C5.3,15.1,3.9,13.7,3.9,12z M16.9,6.9h-4.1v2h4.1c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1h-4.1v2h4.1c2.8,0,5.1-2.2,5.1-5.1S19.7,6.9,16.9,6.9z M8.9,13h6.1v-2H8.9V13z"/>
                        </svg>
                    </div>
                </div>
                <div class="toolbar-row-item">
                    <div class="icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" class="toolbar-icon" @click=${() => this.handleIconClick('outline')}>
                            <rect x="2" y="2" width="96" height="36" rx="18" fill="none" stroke="#000000" stroke-width="2"/>
                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="black" font-family="Arial, sans-serif">Outline</text>
                        </svg>
                    </div>
                </div>
                <div class="toolbar-row-item">
                    <div class="icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" class="toolbar-icon" @click=${() => this.handleIconClick('fill')}>
                            <rect width="100" height="40" rx="20" fill="#3273DC"/>
                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="white" font-family="Arial, sans-serif">Default Fill</text>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="toolbar-row" style="padding-top: 0px;">
                <div class="toolbar-row-item">
                    <div class="icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" class="toolbar-icon" onclick=${() => this.handleIconClick('secondary')}>
                            <rect width="100" height="40" rx="20" fill="#F0F0F0"/>
                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="black" font-family="Arial, sans-serif">Secondary</text>
                        </svg>

                    </div>
                </div>
                <div class="toolbar-row-item">
                    <div class="icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" class="toolbar-icon" onclick=${() => this.handleIconClick('disabled')}>
                            <rect width="100" height="40" rx="20" fill="#F0F0F0"/>
                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="black" fill-opacity="0.3" font-family="Arial, sans-serif">Disabled</text>
                        </svg>
                    </div>
                </div>
                <div class="toolbar-row-item">
                    <div class="icon-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40" class="toolbar-icon" onclick=${() => this.handleIconClick('negative')}>
                            <rect width="100" height="40" rx="20" fill="#D31510"/>
                            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" fill="white" font-family="Arial, sans-serif">Negative</text>
                        </svg>
                    </div>
                </div>
            </div>
        </div>`
    }

    anchorInputString() {
        return `
            <div id="canvas-hyperlink-popup" class="filter-shadow-m fixed flex items-center justify-center" style="top: 351px; left: 854px; z-index: 31; display: flex;
            width: fit-content;
            top: 351px;
            left: 854px;
            z-index: 31;
            flex-direction: column;
            filter: drop-shadow(0px 0px 1px rgba(18, 15, 40, .24)) drop-shadow(0px 3px 6px rgba(18, 15, 40, .12)) drop-shadow(0px .5px 2px rgba(18, 15, 40, .06));
            border-radius: 10px;">
                
                <div id="input-wrapper" style="padding: 5px 5px;
                    background: white;
                    border-radius: 6px;"
                    class="flex w-fit items-center justify-center rounded-md bg-white px-1.5 py-1 text-12 leading-3.75 h-10">
                    <div id="input-wrapper-child" style="
                                                display: flex;
                                                background: #F1F2F3;
                                                width: fit-content;
                                                border-radius: 6px;"
                                                   class="relative relative my-0.5 flex h-7 w-50 items-center rounded border bg-gray-50 p-1 focus-within:border-primary focus-within:bg-white focus-within:ring-4 focus-within:ring-primary/25 hover:bg-gray-200">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex select-none items-center pl-1.5" style="padding: 0 5px;">
                            <span class="text-xs text-gray-600">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
                                <path d="M7.64414 4.46254L8.88164 3.22504C9.40558 2.74749 10.0934 2.49019 10.8021 2.5066C11.5108 2.52301 12.186 2.81186 12.6873 3.31315C13.1886 3.81443 13.4774 4.48959 13.4938 5.19832C13.5102 5.90705 13.2529 6.59485 12.7754 7.11879L11.0066 8.88129C10.7517 9.13716 10.4488 9.34018 10.1152 9.47871C9.78169 9.61724 9.42407 9.68855 9.06289 9.68855C8.70171 9.68855 8.34409 9.61724 8.01053 9.47871C7.67698 9.34018 7.37405 9.13716 7.11914 8.88129" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M8.35629 11.5375L7.11879 12.775C6.59485 13.2526 5.90705 13.5099 5.19832 13.4935C4.48959 13.4771 3.81443 13.1882 3.31315 12.6869C2.81186 12.1856 2.52301 11.5105 2.5066 10.8018C2.49019 10.093 2.74749 9.40523 3.22504 8.88128L4.99379 7.11878C5.24871 6.86291 5.55163 6.65989 5.88518 6.52136C6.21874 6.38283 6.57636 6.31152 6.93754 6.31152C7.29872 6.31152 7.65634 6.38283 7.9899 6.52136C8.32346 6.65989 8.62638 6.86291 8.88129 7.11878" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            </span>
                        </div>
                        <input type="text" placeholder="Add link &amp; enter to save" class="pld-text-gray-600 h-full w-full bg-transparent text-xs outline-none text-gray-900 pl-6" autocomplete="off" value="" style="    border: 0;
                            width: 300px;
                            background: #F1F2F3;"
                        >
                        <div id="submit-btn" style="padding: 0 5px; cursor: pointer;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                                <g id="ArrowSize100">
                                <rect id="Frame" width="10" height="10" fill="red" opacity="0"/>
                                <path d="M9.94952,4.99652a.87815.87815,0,0,0-.02966-.15259.854.854,0,0,0-.03522-.17315L9.882,4.66217A.86384.86384,0,0,0,9.7464,4.459a.819.819,0,0,0-.04718-.07226l-.00488-.005-.00086-.00079L6.62354,1.26172A.87459.87459,0,1,0,5.37646,2.48828L6.98682,4.125H.9248a.875.875,0,0,0,0,1.75h6.062L5.37646,7.51172A.87459.87459,0,1,0,6.62354,8.73828l3.06994-3.1192.00086-.00079.00488-.005A.819.819,0,0,0,9.7464,5.541.86384.86384,0,0,0,9.882,5.33783l.00262-.00861a.854.854,0,0,0,.03522-.17315.87815.87815,0,0,0,.02966-.15259L9.9502,5Z"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    render() {
        const renderOptions = () => {
            switch(this.elementType) {
                case "button":
                    return this.renderButtonOptions();
                case "anchor":
                    return this.renderAnchorMenuItem();
                case "media":
                    return this.renderMediaOptions();
                default:
                    return this.renderAllOptions();
            }
        };
    
        return html`   
        <div id="canvas-context-toolbar" class="fixed flex select-none items-center rounded-md bg-white text-sm shadow-md"
            style="${this.extraMargin ? 'margin-top: 14px; margin-left: -6px;' : ''}">
            ${renderOptions()}
        </div>
        `;
    }
}