//const { LitElement, html } = require("lit");

import { html, LitElement } from "../../deps/lit-all.min.js";
import { style } from "./select-theme.css.js"
import "../../features/spectrum-web-components/dist/button.js"
import '../../features/spectrum-web-components/dist/checkbox.js'
// import '../../features/spectrum-web-components/dist/card.js'


export class selectTheme extends LitElement {
    
    static styles = style;

    selectedDiv = undefined;

    selectTheme = (e) => {
        if(this.selectedDiv) this.selectedDiv.className = "card";
        this.selectedDiv = this.shadowRoot.getElementById(e);
        this.selectedDiv.className = "card selected";
    }

    openSelectedTheme = () => {
        console.log ("open selected theme");
        window.location.href = "http://localhost:3000/?theme=" + this.selectedDiv.id;
    }

    render() {
        return html`
        <div id="select-theme-container">
            <h1>Choose your theme</h1>
            <div id="cards-container">
                <div id="blank" class="card" @click=${() => this.selectTheme("blank")}>
                    <img slot="cover-photo"
                    src="https://picsum.photos/200/300"
                    alt="Blank Image"/>
                    <h2> Blank </h2>
                </div>
                <div id="product" class="card" @click=${() => this.selectTheme("product")}>
                    <img slot="cover-photo"
                    src="https://picsum.photos/200/300"
                    alt="Product Image"/>
                    <h2> Product </h2>
                </div>
                <div id="catalog" class="card" @click=${() => this.selectTheme("catalog")}>
                    <img slot="cover-photo"
                    src="https://picsum.photos/200/300"
                    alt="Catalog Image"/>
                    <h2> Catalog </h2>
                </div>
            </div>
            <sp-button @click=${this.openSelectedTheme}>Create Page</sp-button>
        </div>
            
        `;
    }
}