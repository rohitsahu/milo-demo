import { LitElement, html, nothing, unsafeHTML } from "../../deps/lit-all.min.js";
import { getComponent, ragcomponent } from "../html-components/componentStringMap.js";
import { style } from "./blank-canvas.css.js";
import { style as style1 } from "../../styles/styles.css.js"
import  { style as style2 } from "../../blocks/hero-marquee/hero-marquee.css.js";
import { style as style3 } from "../../blocks/aside/aside.css.js";
import { style as mediaStyle} from "../../blocks/media/media.css.js";
export class BlankCanvas extends LitElement{

    static tag = "blank-canvas";
   
    static styles = [style, style1, style2, style3, mediaStyle];

    static properties = {
        dynamicListOfElements : {type : Array},
        elements: { type: Array },
        draggedElementIndex: {type: Number},
        _draggedElement: {type: HTMLElement},
        _offsetX: {type: Number},
        _offsetY: {type: Number},
        pointerMap: {type: Map}
    }

    constructor() {
        super();
        this.dynamicListOfElements = [];
        this.elements = [];
        this._draggedElementIndex = -1;
        this._draggedElement = null;
        this._offsetX = 0;
        this._offsetY = 0;
        this.pointerMap = new Map();

        this._onDragStart = this._onDragStart.bind(this);
        this._onDragOver = this._onDragOver.bind(this);
        this._onDrop = this._onDrop.bind(this);
    }

    renderComponentFromString(comp) {
        if(comp === undefined) return nothing;
        return html`
            ${
                unsafeHTML(comp.replace(/\\"/g, '"'))
            }
        `;

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

       return html`
              ${this.dynamicListOfElements.map((code, index) => html`
                <div draggable="true"
                    class="canvas-element"
                    @dragstart=${(e) => this._onDragStart(e, index)}
                    @dragover=${this._onDragOver}
                    @dragenter=${this._onDragEnter}
                    @drop=${(e) => this._onDrop(e)}
                    @drag=${(e) => this._onDrag(e, index)}
                    @dragend=${this._onDragEnd}
                    key=${index}
                >
                  ${this.renderComponentFromString(code)}
                </div>
              `)}
             
            `;
    }

    elementDroped(comp) {
        if(comp === undefined) return;
        const component = getComponent(comp);
        this.dynamicListOfElements = [...this.dynamicListOfElements,component];
        //this.requestUpdate();
    }

    _onDragEnter(e) {
        e.preventDefault();
    }

    _onDragStart(e, index) {
        this._draggedElement = e.target;
        this._draggedElementIndex = index;
        e.dataTransfer.setData('text/plain', index);

        this._offsetX = e.clientX;
        this._offsetY = e.clientY;
        this.pointerMap.set(index, {
            startPos: { x: e.clientX, y: e.clientY },
            currentPos: { x: e.clientX, y: e.clientY },
          })
  
      }
    
      _onDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const target = e.target.closest('.canvas-element');
        if (target && target !== this._draggedElement) {
            e.currentTarget.style.cursor = 'grabbing';
        }
      }
    
      _onDrop(e) {
        e.preventDefault();
        if (this._draggedElement) {
            e.preventDefault();
            const saved = this.pointerMap.get(this._draggedElementIndex);
            const current = { ...saved.currentPos };
            saved.currentPos = { x: e.clientX, y: e.clientY };
            const delta = {
                x: saved.currentPos.x - current.x,
                y: saved.currentPos.y - current.y,
            }
            this.moveElement(delta);
        }
      }

      moveElement(delta) {
        const getNumber = (key, fallback) => {
          const saved = this._draggedElement.style.getPropertyValue(key);
          if (saved.length > 0) {
            return parseFloat(saved.replace("px", ""));
          }
          return fallback;
        };
        const dx = getNumber("--dx", 0) + delta.x;
        const dy = getNumber("--dy", 0) + delta.y;
        this._draggedElement.style.transform = `translate(${dx}px, ${dy}px)`;
        this._draggedElement.style.setProperty("--dx", `${dx}px`);
        this._draggedElement.style.setProperty("--dy", `${dy}px`);
      }

      _onDragEnd(e) {
        console.log(dragENd);
        this._draggedElement = null;
        this._offsetX = 0;
        this._offsetY = 0;
      }
    
    _onDrag(e) {
        if (this._draggedElement) {
            e.preventDefault();
        }
    }

    render() {
        //this.elementDroped(ragcomponent.heromarquee);
        return html`
        <div id="container">
            <rag-toolbar @drop-elem=${(event)=>{this.elementDroped(event.detail.component)}}></rag-toolbar>
            <div id="blank-canvas-main" @dragover=${this._onDragOver} @dragenter=${this._onDragEnter} @drop=${(e) => this._onDrop(e)}>
            ${this.renderDynamicElements()}
            </div>
        </div>
        `;
    }
}