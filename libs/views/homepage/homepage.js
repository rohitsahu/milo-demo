import { html, LitElement } from "../../deps/lit-all.min.js";
//import { property } from "../../features/spectrum-web-components/src/lit.js";
import { property } from "../../deps/lit-all.min.js";
const Views = Object.freeze({
    THEME : 0,
    BLANK : 1
})

export class Homepage extends LitElement {

    static tag_name = "rag-homepage";
    
    render(){
        const url = window.location.href;
        let selectTheme = url.includes("selectTheme=true");
        if(selectTheme) {
            return html`<select-theme style="display:flex;"></select-theme>`;
        } else {
            return html`<blank-canvas></blank-canvas>`
        }
    }
}