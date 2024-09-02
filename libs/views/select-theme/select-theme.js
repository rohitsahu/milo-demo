//const { LitElement, html } = require("lit");

import { html, LitElement, svg } from "../../deps/lit-all.min.js";
import { style } from "./select-theme.css.js"
import "../../features/spectrum-web-components/dist/button.js"
import '../../features/spectrum-web-components/dist/checkbox.js'

export class selectTheme extends LitElement {
    
    static styles = style;


    selectTheme = (e) => {
        // if(this.selectedDiv) this.selectedDiv.className = "card";
        // this.selectedDiv = this.shadowRoot.getElementById(e);
        // this.selectedDiv.className = "card selected";

        console.log ("open selected theme");
        let postionQues = window.location.href.indexOf("?");
        window.location.href = window.location.href.substring(0,postionQues)+"?theme=" + e;
    }

    renderSvg(){
        return svg`
            <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
        <defs>
        <style>
            .fill {
            fill: #464646;
            }
        </style>
        </defs>
        <title>S AddToSelection 18 N</title>
        <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path class="fill" d="M12.08,2.7215l.514-.8885a7.97354,7.97354,0,0,0-2.7-.803V2.063A6.94168,6.94168,0,0,1,12.08,2.7215Z" />
        <path class="fill" d="M14.765,5.033l.9-.5175a8.06649,8.06649,0,0,0-1.926-1.985l-.519.894A7.03319,7.03319,0,0,1,14.765,5.033Z" />
        <path class="fill" d="M15.9665,8.3315H17a7.95519,7.95519,0,0,0-.6895-2.6455L15.415,6.2A6.95,6.95,0,0,1,15.9665,8.3315Z" />
        <path class="fill" d="M15.9665,9.6685a6.95,6.95,0,0,1-.55,2.129l.8955.516A7.95513,7.95513,0,0,0,17,9.6685Z" />
        <path class="fill" d="M13.22,14.5755l.5165.894a8.06544,8.06544,0,0,0,1.926-1.985l-.9-.5175A7.033,7.033,0,0,1,13.22,14.5755Z" />
        <path class="fill" d="M9.8925,15.937V16.97a7.97354,7.97354,0,0,0,2.7-.803l-.5125-.8885A6.94146,6.94146,0,0,1,9.8925,15.937Z" />
        <path class="fill" d="M6.269,15.447l-.514.8885A7.99637,7.99637,0,0,0,8.5535,17V15.9775A6.96845,6.96845,0,0,1,6.269,15.447Z" />
        <path class="fill" d="M3.3695,13.1465l-.9.5175a8.06609,8.06609,0,0,0,2.107,2.031l.513-.8875A7.03548,7.03548,0,0,1,3.3695,13.1465Z" />
        <path class="fill" d="M2.0335,9.6685H1a7.94984,7.94984,0,0,0,.787,2.847L2.6825,12A6.94449,6.94449,0,0,1,2.0335,9.6685Z" />
        <path class="fill" d="M2.6825,6,1.787,5.4845A7.94984,7.94984,0,0,0,1,8.3315h3.0335A6.94449,6.94449,0,0,1,2.6825,6Z" />
        <path class="fill" d="M5.092,3.192l-.513-.8875a8.06609,8.06609,0,0,0-2.107,2.031l.9.5175A7.03639,7.03639,0,0,1,5.092,3.192Z" />
        <path class="fill" d="M8.5535,2.0225V1a7.99514,7.99514,0,0,0-2.8.6645l.5135.8885A6.96854,6.96854,0,0,1,8.5535,2.0225Z" />
        <path class="fill" d="M14,9.5a.5.5,0,0,1-.5.5H10v3.5a.5.5,0,0,1-.5.5h-1a.5.5,0,0,1-.5-.5V10H4.5A.5.5,0,0,1,4,9.5v-1A.5.5,0,0,1,4.5,8H8V4.5A.5.5,0,0,1,8.5,4h1a.5.5,0,0,1,.5.5V8h3.5a.5.5,0,0,1,.5.5Z" />
        </svg>
        `;
    }

    render() {
        return html`
        <div id="select-theme-container">
            <h1>Choose your template</h1>
            <div id="cards-container">
                <div id="new-div" @click=${() => this.selectTheme("blank")}>${this.renderSvg()}</div>
                <div id="product" class="card" @click=${() => this.selectTheme("product")}>
                    <img slot="cover-photo"
                    src="https://i.postimg.cc/s2Wvw48F/product.png"
                    width="200"
                    height="200"
                    alt="Product Image"/>
                    <h3> Photoshop </h3>
                </div>
                <div id="catalog" class="card" @click=${() => this.selectTheme("catalog")}>
                    <img slot="cover-photo"
                    src="https://i.postimg.cc/2yZc5J9c/catalog.png"
                    width="200"
                    height="200"
                    alt="Catalog Image"/>
                    <h3> Catalog </h3>
                </div>
            </div>
            <div id="cards-container">
                <div id="product" class="card" @click=${() => this.selectTheme("illustrator")}>
                    <img slot="cover-photo"
                    src="https://i.postimg.cc/h4ZMX83p/www-adobe-com-products-illustrator-html-promoid-FHRLZ9-BG-mv-other.png"
                    width="200"
                    height="200"
                    alt="Blank Image"/>
                    <h3> Illustrator </h3>
                </div>
                <div id="product" class="card" @click=${() => this.selectTheme("express")}>
                    <img slot="cover-photo"
                    src="https://i.postimg.cc/NFF4NLL6/www-adobe-com-express-promoid-FHRLZ9-BG-mv-other.png"
                    width="200"
                    height="200"
                    alt="Product Image"/>
                    <h3>Adobe Express</h3>
                </div>
                <div id="catalog" class="card" @click=${() => this.selectTheme("firefly")}>
                    <img slot="cover-photo"
                    src="https://i.postimg.cc/yYJjcJMB/www-adobe-com-products-firefly-html-promoid-FHRLZ9-BG-mv-other.png"
                    width="200"
                    height="200"
                    alt="Catalog Image"/>
                    <h3>Adobe Firefly</h3>
                </div>
            </div>
        </div>
            
        `;
    }
}