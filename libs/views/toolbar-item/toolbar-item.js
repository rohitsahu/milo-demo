import { LitElement, html } from "../../deps/lit-all.min.js";
import { style } from "./toolbar-item.css.js";

export class ToolbarItem extends LitElement {

    static tag = "toolbar-item";

    static styles = style;

    static properties = {
        text : {type : String},
        tag : {type : String},
        variant : {type : Number}
    }


    render () {
        return html`
            <div id="toolbar-item" @click=${()=>{
                this.dispatchEvent(new CustomEvent("drop-elem",{
                    bubbles: true,
                    composed: true,
                    detail : {component : this.tag, variant: this.variant}
                }))}}>
            ${this.text}
            </div>
        `;

    }
}