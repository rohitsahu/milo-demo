import { LitElement, html } from "../../deps/lit-all.min.js";
import { style } from "./toolbar-item.css.js";

export class ToolbarItem extends LitElement {

    static tag = "toolbar-item";

    static styles = style;

    static properties = {
        text : {type : String}
    }

    render () {
        return html`
            <div id="toolbar-item">
            ${this.text}
            </div>
        `;

    }
}