import { LitElement, html } from "../../deps/lit-all.min.js";
import { style } from "./blank-canvas.css.js";

export class BlankCanvas extends LitElement{

    static tag = "blank-canvas";

    static styles = style;
    render() {
        return html`
        <div style="display:flex">
            <rag-toolbar></rag-toolbar>
            <div id="blank-canvas-main">
            </div>
        </div>
        `;
    }
}