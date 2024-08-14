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
      // dynamicListOfElements : {type : Array},
      elements: { type: Array },
      draggedElementIndex: {type: Number},
      _draggedElement: {type: HTMLElement},
      _offsetX: {type: Number},
      _offsetY: {type: Number},
      pointerMap: {type: Map}
    }

    constructor() {
      super();
      // this.dynamicListOfElements = [];
      this.elements = [];
      const url = window.location.href;
      if (url.includes("theme=product"))
      {
        this.elements = ["hero-marquee", "aside_l", "media", "aside_m"];
      } 
      else if (url.includes("theme=catalog"))
      {
        this.elements = ["aside_m", "media", "hero-marquee", "aside_l"];
      }
      this._draggedElementIndex = -1;
      this._draggedElement = null;
      this._offsetX = 0;
      this._offsetY = 0;
      this.pointerMap = new Map();

      this._onDragStart = this._onDragStart.bind(this);
      this._onDragOver = this._onDragOver.bind(this);
      this._onDrop = this._onDrop.bind(this);
    }

    async updated() {
      let isUpdateComplete = await this.updateComplete;
      const elem = this.shadowRoot.getElementById("blank-canvas-main");
      this.renderDynamicElements();
      this.makeParagraphsEditable(elem);
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
        let canvasElement = this.shadowRoot.getElementById('blank-canvas-main');
        this.elements.forEach((element, index) => {
          const element1 = document.createElement('div');
          element1.setAttribute('draggable', 'true');
          element1.setAttribute('class', 'canvas-element');
          element1.addEventListener('dragstart', this._onDragStart);
          element1.addEventListener('drop', this._onDrop);

          const component = getComponent(element);
          element1.innerHTML = component.trim();
          canvasElement.append(element1);
          // this.dynamicListOfElements = [...this.dynamicListOfElements, getComponent(element)];
        });
        this.elements = [];
      } else {
        console.log('No elements provided');
      }
    }

    elementDroped(comp) {
        if(comp === undefined) return;
        const element = document.createElement('div');
        element.setAttribute('draggable', 'true');
        element.setAttribute('class', 'canvas-element');
        element.addEventListener('dragstart', (e) => {
          this._onDrag(e, 0);
        });
        element.addEventListener('drop', (e) => {
          this._onDrag(e, 0);
        });
        
        const component = getComponent(comp);
        element.innerHTML = component.trim();
        let canvasElement = this.shadowRoot.getElementById('blank-canvas-main');
        canvasElement.append(element);
         // this.dynamicListOfElements = [...this.dynamicListOfElements,component];
    }

    getDropLocation(relativeX, relativeY, halfWidth, halfHeight) {
      let dropLocation;
      if (relativeX < halfWidth) {
          dropLocation = 'left';
        } else {
          dropLocation = 'right';
      }

      if (relativeY < halfHeight) {
        if (dropLocation === 'left') {
            dropLocation = 'top-left';
        } else {
            dropLocation = 'top-right';
        }
      } else {
        if (dropLocation === 'left') {
            dropLocation = 'bottom-left';
        } else {
            dropLocation = 'bottom-right';
        }
      }
      return dropLocation;
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
      console.log("inside on drop")
      e.preventDefault();
      
      if (e.dataTransfer.types.includes('text/toolbar-item')) {
        const elementTag = e.dataTransfer.getData('text/toolbar-item');
        this.elementDroped(elementTag)
        this._onDragStart(e, 0);
        // this._onDrop(e);
      }
      let canvasElement = this.shadowRoot.getElementById('blank-canvas-main');
      if(e.currentTarget === canvasElement) {
        const saved = this.pointerMap.get(this._draggedElementIndex);
        const current = { ...saved.currentPos };
        saved.currentPos = { x: e.clientX, y: e.clientY };
        const delta = {
            x: saved.currentPos.x - current.x,
            y: saved.currentPos.y - current.y,
        }
        this.moveElement(delta);
      }else {
        const targetRect = e.currentTarget.getBoundingClientRect();
        const relativeX = e.clientX - targetRect.left;
        const relativeY = e.clientY - targetRect.top;
        const halfWidth = targetRect.width / 2;
        const halfHeight = targetRect.height / 2;

        let dropLocation = this.getDropLocation(relativeX, relativeY, halfWidth, halfHeight)
       

        const draggedIndex = this._draggedElementIndex;
        console.log("currentTarget", e.currentTarget.innerHTML);
        const targetIndex = this.dynamicListOfElements.findIndex(
          (element) => {
            console.log("element", element);
            return e.currentTarget.innerHTML.includes(element);
          }
        );

        this.updateElementOrder(draggedIndex, targetIndex, dropLocation);

        this._draggedElementIndex = -1;
        
        this.requestUpdate();
      }
    }

      updateElementOrder(draggedIndex, targetIndex, dropLocation) {
        const draggedElement = this.dynamicListOfElements[draggedIndex];
        this.dynamicListOfElements.splice(draggedIndex, 1); // Remove dragged element
      
        if (draggedIndex < targetIndex) {
          targetIndex--;
        }
      
        switch (dropLocation) {
          case 'top':
          case 'top-left':
          case 'top-right':
            this.dynamicListOfElements.splice(targetIndex, 0, draggedElement);
            break;
          case 'bottom':
          case 'bottom-left':
          case 'bottom-right':
            this.dynamicListOfElements.splice(targetIndex + 1, 0, draggedElement);
            break;
          case 'left':
            this.dynamicListOfElements.splice(targetIndex, 0, draggedElement);
            break;
          case 'right':
            this.dynamicListOfElements.splice(targetIndex + 1, 0, draggedElement);
            break;
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
        
        this._draggedElement = null;
        this._offsetX = 0;
        this._offsetY = 0;
      }
    
    _onDrag(e) {
        if (this._draggedElement) {
            e.preventDefault();
        }
    }

    makeParagraphsEditable(element) {
      const paragraphs =  Array.from(element.querySelectorAll('p, h1, h2, h3, h4, h5, h6'));

      paragraphs.forEach(paragraph => {
        paragraph.addEventListener('dblclick', () => {
          this.enableEditMode(paragraph);
        });
        paragraph.addEventListener('blur', () => {
          this.disableEditMode(paragraph);
        });
      });
    }

    enableEditMode(element) {
      element.contentEditable = true;
      element.focus();
      //this.enableContextualMenu(element)
    }
    
    disableEditMode(element) {
      element.contentEditable = false;
    }

    // enableContextualMenu(element) {
    //   const quill = new Quill(element, {
    //     // Quill configuration options
    //     theme: 'snow', // Or 'bubble'
    //     modules: {
    //       toolbar: [
    //         ['bold', 'italic', 'underline'],
    //         [{ list: 'ordered' }, { list: 'bullet' }]
    //       ]
    //     }
    //   });
    // }

    render() {
        return html`
        <div id="container">
            <rag-toolbar @drop-elem=${(event)=>{this.elementDroped(event.detail.component)}}></rag-toolbar>
            <div id="blank-canvas-main" @dragover=${this._onDragOver} @dragenter=${this._onDragEnter} @drop=${(e) => this._onDrop(e)}>
            </div>
        </div>
        `;
      }
    }