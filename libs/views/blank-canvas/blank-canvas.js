import { LitElement, html, nothing, unsafeHTML } from "../../deps/lit-all.min.js";
import { getComponent, ragcomponent } from "../html-components/componentStringMap.js";
import { style } from "./blank-canvas.css.js";
import { style as style1 } from "../../styles/styles.css.js"
import  { style as style2 } from "../../blocks/hero-marquee/hero-marquee.css.js";
import { style as style3 } from "../../blocks/aside/aside.css.js";
import { style as mediaStyle} from "../../blocks/media/media.css.js";
import { style as libraryConfigStyle } from "./library-config/library-config.css.js"
import init from "./library-config/demo-library-config.js";
import { getContainers } from "../../blocks/library-config/lists/blocks.js";
import { loadArea } from "../../utils/utils.js";

export class BlankCanvas extends LitElement{

    static tag = "blank-canvas";
   
    static styles = [style, style1, style2, style3, mediaStyle, libraryConfigStyle];

    static properties = {
        dynamicListOfElements : {type : Array},
        elements: { type: Array },
        miloLibraries: { type: Object }
    }

    constructor() {
        super();
        this.dynamicListOfElements = [];
        this.elements = [];
        this.miloLibraries = {};
    }

    renderComponentFromString(comp) {
        if(comp === undefined) return nothing;
        return comp;
    }

    async updated() {
        super.updated();
        const el = this.shadowRoot.querySelector('div');
        if(el) {
            await loadArea(el);
        }
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

    _getComponent(comp) {
        const block = this.miloLibraries.blocks.find(block => block.name.toLowerCase() === comp.toLowerCase());
        if (!block) {
            console.error(`Block with name ${comp} not found`);
            return null;
        }
    
        return block;
    }

    async elementDroped(comp, variant) {
        if(this.miloLibraries === undefined || this.miloLibraries.blocks === undefined) {
            await this.fetchLibraries();
        }

        if(comp === undefined) return;

        const blockComponent = this._getComponent(comp, 0);
        if (!blockComponent) return;

        const variantComponent  = await this.getContainersFromBlock(blockComponent);
        console.log(variantComponent[variant]);
        

        this.dynamicListOfElements = [...this.dynamicListOfElements, variantComponent[variant].elements[0]];
    }

    async getContainersFromBlock(block) {
        const resp = await fetch(`${block.path}.plain.html`);
        if (!resp.ok) return;

        const html = await resp.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        return getContainers(doc);
    }

    //move to store
    async fetchLibraries() {
        this.miloLibraries = await init(this.shadowRoot);

        // Define the old and new domains
        const oldDomain = "https://main--milo--adobecom.hlx.page/docs/library/blocks/";
        const newDomain = "https://main--milo-demo--rohitsahu.hlx.page/blocks/";

        // Iterate over the blocks and replace the domain in the path
        if (this.miloLibraries && Array.isArray(this.miloLibraries.blocks)) {
        this.miloLibraries.blocks = this.miloLibraries.blocks.map(block => {
            if (block.path.startsWith(oldDomain)) {
            block.path = block.path.replace(oldDomain, newDomain);
            }
            return block;
        });
        }
    }

    render() {
        return html`
        <div id="container">
            <rag-toolbar @drop-elem=${(event)=>{this.elementDroped(event.detail.component, event.detail.variant)}}></rag-toolbar>
            <div id="blank-canvas-main">
            ${this.renderDynamicElements()}
            </div>
        </div>
        `;
    }
}