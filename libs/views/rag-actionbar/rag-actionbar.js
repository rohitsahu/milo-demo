import { LitElement, html } from "../../deps/lit-all.min.js";
import { style } from "./rag-actionbar.css.js";

export class Actionbar extends LitElement {
    static tag = 'rag-actionbar';

    static styles = style;

    render() {
        return html`
        <sp-theme theme="spectrum" color="light" scale="medium">
        <div id="actionbar-container">
            <sp-button>Save</sp-button>
            <sp-button>Preview</sp-button>
        </div>
        </sp-theme>
        `;
    }

}