import { LitElement, html } from "../../deps/lit-all.min.js";
import ('../../blocks/hero-marquee/hero-marquee.js');
import { style } from "./component-preview.css.js";

export class ComponentPreview extends LitElement {
    
    static tag = "component-preview";

    static styles = style;

    static properties = {
        componentName : {type : String}
    }

    render() {
        return html`
            <div id="preview-div">
                Preview comming soon...
                <hero-marquee></hero-marquee>
            </div>
        `;
    }
 }