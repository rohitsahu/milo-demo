import { LitElement, html, nothing, unsafeHTML } from "../../deps/lit-all.min.js";
import { getComponent, ragcomponent } from "../html-components/componentStringMap.js";
import { style } from "./blank-canvas.css.js";
import { style as style1 } from "../../styles/styles.css.js"
import  { style as style2 } from "../../blocks/hero-marquee/hero-marquee.css.js";
import { style as style3 } from "../../blocks/aside/aside.css.js";
import { style as mediaStyle} from "../../blocks/media/media.css.js";
import { styles as sectionMetadatastyle} from "../../blocks/section-metadata/section-metadata.css.js"
import { style as videoStyle } from "../../blocks/video/video.css.js";
export class BlankCanvas extends LitElement{

    static tag = "blank-canvas";
   
    static styles = [style, style1, style2, style3, mediaStyle, sectionMetadatastyle, videoStyle];

    static properties = {
        dynamicListOfElements : {type : Array},
        elements: { type: Array }
    }

    constructor() {
        super();
        this.dynamicListOfElements = [];
        this.elements = [];
    }

    renderComponentFromString(comp) {
        if(comp === undefined) return nothing;
        return html`
            ${
                unsafeHTML(comp.replace(/\\"/g, '"'))
            }
        `;

    }

    async updated() {
        let isUpdateComplete = await this.updateComplete;
        const elem = this.shadowRoot.getElementById("blank-canvas-main");
        console.log(elem.childElementCount);

    }

    renderDynamicElements() {
        if (this.elements && this.elements.length > 0) {
            console.log('Elements received:', this.elements);
            this.elements.forEach((element, index) => {
                this.dynamicListOfElements = [...this.dynamicListOfElements, getComponent(element)];
            });
            this.elements = [];
        } else {
            console.log('No elements provided');
        }
        //this.elementDroped(ragcomponent.heromarquee);
        return html`
            ${this.dynamicListOfElements.map((code)=>this.renderComponentFromString(code))}
        `;
    }

    elementDroped(comp) {
        if(comp === undefined) return;
        const component = getComponent(comp);
        this.dynamicListOfElements = [...this.dynamicListOfElements,component];
    }

    render() {
        //this.elementDroped(ragcomponent.heromarquee);
        return html`
        <div id="container">
            <rag-toolbar @drop-elem=${(event)=>{this.elementDroped(event.detail.component)}}></rag-toolbar>
            <div id="blank-canvas-main">
            ${this.renderDynamicElements()}
            </div>
        </div>
        `;
    }
}