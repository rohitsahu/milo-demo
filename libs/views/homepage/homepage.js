import { html, LitElement } from "../../deps/lit-all.min.js";
//import { property } from "../../features/spectrum-web-components/src/lit.js";
import { property } from "../../deps/lit-all.min.js";
import { getComponent, ragcomponent } from "../html-components/componentStringMap.js";
const Views = Object.freeze({
    THEME : 0,
    BLANK : 1
})

export class Homepage extends LitElement {

    static tag_name = "rag-homepage";
    
    render(){
        const url = window.location.href;
        if(url.includes("selectTheme=true")) {
            return html`<select-theme style="display:flex;"></select-theme>`;
        } else if (url.includes("theme=product"))
        {
            const elements = ["hero-marquee", "aside_l", "media", "aside_m"];
            return html`<blank-canvas .elements="${elements}"></blank-canvas>`
        } else if (url.includes("theme=catalog"))
        {
            const elements = ["aside_m", "media", "hero-marquee", "aside_l"];
            return html`<blank-canvas .elements="${elements}"></blank-canvas>`
        }
        else {
            return html`<blank-canvas></blank-canvas>`;
        }
    }
}