import { LitElement, html } from "../../deps/lit-all.min.js";
import { style } from "./toolbar-item.css.js";

export class ToolbarItem extends LitElement {

    static tag = "toolbar-item";

    static styles = style;

    static properties = {
        text : {type : String},
        tag : {type : String}
    }

    constructor() {
        super();
        this._onDragStart = this._onDragStart.bind(this);
    }
    
    _onDragStart(e) {
        e.dataTransfer.setData('text/toolbar-item', this.tag); 
    }

    render () {
        return html`
            <div id="toolbar-item" 
                draggable="true"
                @dragstart=${this._onDragStart}
                @click=${()=>{
                    this.dispatchEvent(new CustomEvent("drop-elem",{
                        bubbles: true,
                        composed: true,
                        detail : {component : this.tag}
                }))}}>
                <slot name="icon" slot="icon"></slot>
                <div class="toolbar-text">${this.text}</div>
            </div>
        `;

    }
}