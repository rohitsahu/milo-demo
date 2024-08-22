import { LitElement, html, nothing, unsafeHTML } from "../../deps/lit-all.min.js";
import { getComponent, ragcomponent } from "../html-components/componentStringMap.js";
import { style } from "./blank-canvas.css.js";
import { style as style1 } from "../../styles/styles.css.js"
import  { style as style2 } from "../../blocks/hero-marquee/hero-marquee.css.js";
import { style as style3 } from "../../blocks/aside/aside.css.js";
import { style as mediaStyle} from "../../blocks/media/media.css.js";
import { styles as sectionMetadatastyle} from "../../blocks/section-metadata/section-metadata.css.js"
import { style as videoStyle } from "../../blocks/video/video.css.js";
import { ContextMenu } from "../context-menu/context-menu.js";

export class BlankCanvas extends LitElement{

    static tag = "blank-canvas";
   
    static styles = [style, style1, style2, style3, mediaStyle, sectionMetadatastyle, videoStyle];

    constructor() {
      super();
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
      this.makeLinksEditable(elem);
      this.makeMediaSourceEditable(elem);
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

          const btn = document.createElement('button');
          btn.setAttribute('id', 'delete-component');
          btn.addEventListener('click', this.removeComponent);
          btn.innerHTML = `
                  <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                  <defs>
                    <style>
                      .fill {
                        fill: #464646;
                      }
                    </style>
                  </defs>
                  <title>S RemoveCircle 18 N</title>
                  <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path class="fill" d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm5,8.5a.5.5,0,0,1-.5.5h-9A.5.5,0,0,1,4,9.5v-1A.5.5,0,0,1,4.5,8h9a.5.5,0,0,1,.5.5Z" />
                </svg> 
          `
          element1.appendChild(btn);
        });
        this.elements = [];
      } else {
        console.log('No elements provided');
      }
    }

    removeComponent(e) {
      e.currentTarget.parentElement.remove();
    }

    elementDroped(comp) {
        if(comp === undefined) return;
        const element = document.createElement('div');
        element.setAttribute('draggable', 'true');
        element.setAttribute('class', 'canvas-element');
        element.addEventListener('dragstart', this._onDragStart);
        element.addEventListener('drop', this._onDrop);
        
        const component = getComponent(comp);
        element.innerHTML = component.trim();
        let canvasElement = this.shadowRoot.getElementById('blank-canvas-main');
        canvasElement.append(element);

        const btn = document.createElement('button');
        btn.setAttribute('id', 'delete-component');
        btn.addEventListener('click', this.removeComponent);
        btn.innerHTML = `
                  <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18">
                  <defs>
                    <style>
                      .fill {
                        fill: #464646;
                      }
                    </style>
                  </defs>
                  <title>S RemoveCircle 18 N</title>
                  <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path class="fill" d="M9,1a8,8,0,1,0,8,8A8,8,0,0,0,9,1Zm5,8.5a.5.5,0,0,1-.5.5h-9A.5.5,0,0,1,4,9.5v-1A.5.5,0,0,1,4.5,8h9a.5.5,0,0,1,.5.5Z" />
                </svg> 
          `
        element.appendChild(btn);

        this.makeParagraphsEditable(element);
        this.makeLinksEditable(element);
        this.makeMediaSourceEditable(element);
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
      e.dataTransfer.setData('text/plain', index);

      this._offsetX = e.clientX;
      this._offsetY = e.clientY;
      this.pointerMap.set(e.target, {
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
      
      if (e.dataTransfer.types.includes('text/toolbar-item')) {
        const elementTag = e.dataTransfer.getData('text/toolbar-item');
        this.elementDroped(elementTag)
        this._onDragStart(e, 0);
      }
      let canvasElement = this.shadowRoot.getElementById('blank-canvas-main');
      if (e.currentTarget === canvasElement) {
        const saved = this.pointerMap.get(this._draggedElement);
        const current = { ...saved.currentPos };
        saved.currentPos = { x: e.clientX, y: e.clientY };
        const delta = {
            x: saved.currentPos.x - current.x,
            y: saved.currentPos.y - current.y,
        }
        this.moveElement(delta);
      } else {
        const targetRect = e.currentTarget.getBoundingClientRect();
        const relativeX = e.clientX - targetRect.left;
        const relativeY = e.clientY - targetRect.top;
        const halfWidth = targetRect.width / 2;
        const halfHeight = targetRect.height / 2;

        let dropLocation = this.getDropLocation(relativeX, relativeY, halfWidth, halfHeight);
        console.log("dropLocation", dropLocation);
       
        this.updateElementOrder(this._draggedElement, e.currentTarget, dropLocation);
        
        this.requestUpdate();
      }
    }

      updateElementOrder(srcEle, destEle, dropLocation) {
        const parent = destEle.parentNode;
        switch (dropLocation) {
          case 'top':
          case 'top-left':
          case 'top-right':
            parent.insertBefore(srcEle, destEle);
            break;
          case 'bottom':
          case 'bottom-left':
          case 'bottom-right': {
            parent.insertBefore(srcEle, destEle.nextSibling);
            break;
          }
          case 'left':
            parent.insertBefore(srcEle, destEle);
            break;
          case 'right':{
              parent.insertBefore(srcEle, destEle.nextSibling);
              break;
            }
        }
      }

      moveElement(delta) {
        // const getNumber = (key, fallback) => {
        //   const saved = this._draggedElement.style.getPropertyValue(key);
        //   if (saved.length > 0) {
        //     return parseFloat(saved.replace("px", ""));
        //   }
        //   return fallback;
        // };
        // const dx = getNumber("--dx", 0) + delta.x;
        // const dy = getNumber("--dy", 0) + delta.y;
        // this._draggedElement.style.transform = `translate(${dx}px, ${dy}px)`;
        // this._draggedElement.style.setProperty("--dx", `${dx}px`);
        // this._draggedElement.style.setProperty("--dy", `${dy}px`);
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

    makeMediaSourceEditable(element) {
      const editableSource =  Array.from(element.querySelectorAll('video'));
      editableSource.forEach((link) => {
        link.addEventListener('click', (event) => {
          //event.preventDefault();
          //link.contentEditable = true;
          link.focus();
          this.enableContextualMenu(link, "media")
        });
        link.addEventListener('blur', () => {
          this.disableEditMode(link);
        });
      });
    }

    makeLinksEditable(element) {
        const editableLinks =  Array.from(element.querySelectorAll('a'));
        editableLinks.forEach((link) => {
          link.addEventListener('click', (event) => {
            event.preventDefault();
            link.contentEditable = true;
            link.focus();
            this.enableContextualMenu(link, "anchor")
          });
          link.addEventListener('blur', () => {
            this.disableEditMode(link);
          });
        });
    }

    enableEditMode(element) {
      element.contentEditable = true;
      element.focus();
      
      const toolbar = element.querySelector("#context-menu-div");
      if (toolbar) {
        toolbar.remove();
      }
      this.enableContextualMenu(element)
    }
    
    disableEditMode(element) {     
      element.contentEditable = false;
      const toolbar = element.querySelector("#context-menu-div");
      if (toolbar) {
        toolbar.remove();
      }
    }

    enableContextualMenu(element, elementType) {
      const toolbar = document.createElement('div');
      toolbar.id = "context-menu-div";

      const contextMenu = new ContextMenu();
      contextMenu.elementType = elementType; // Set elementType here

      toolbar.appendChild(contextMenu);
      if(elementType==="media")
        element.parentElement.appendChild(toolbar);
      else
        element.appendChild(toolbar);
    }
    
    renderToolbar() {
      const rootNode = this.getRootNode();
      const actionbar = rootNode.querySelector('rag-actionbar');
      if (actionbar && actionbar.shadowRoot) {
        const pickerButton = actionbar.shadowRoot.querySelector('sp-badge');
        if (pickerButton) {
            const buttonText = pickerButton.textContent.trim();
            if (buttonText === 'Open') {
                return html``;
            } else {
                return html`<rag-toolbar @drop-elem=${(event)=>{this.elementDroped(event.detail.component)}}></rag-toolbar>`;
            }
        } 
      }
      return html`<rag-toolbar @drop-elem=${(event)=>{this.elementDroped(event.detail.component)}}></rag-toolbar>`;
    }

    render() {
        return html`
        <div id="container">
            ${this.renderToolbar()}
            <div id="blank-canvas-main" @dragover=${this._onDragOver} @dragenter=${this._onDragEnter} @drop=${(e) => this._onDrop(e)}>
            </div>
        </div>
        `;
      }
    }
