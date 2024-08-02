// import { LitElement, html, nothing, unsafeHTML } from "../../deps/lit-all.min.js";
// import { getComponent, ragcomponent } from "../html-components/componentStringMap.js";
// import { style } from "./blank-canvas.css.js";
// import { style as style1 } from "../../styles/styles.css.js"
// import  { style as style2 } from "../../blocks/hero-marquee/hero-marquee.css.js";
// import { style as style3 } from "../../blocks/aside/aside.css.js";
// export class BlankCanvas extends LitElement{

//     static tag = "blank-canvas";
   
//     static styles = [style, style1, style2, style3];

//     static properties = {
//         dynamicListOfElements : {type : Array}
//     }

//     constructor() {
//         super();
//         this.dynamicListOfElements = [];
//     }

//     renderComponentFromString(comp) {
//         if(comp === undefined) return nothing;
//         return html`
//             ${
//                 unsafeHTML(comp.replace(/\\"/g, '"'))
//             }
//         `;

//     }

//     renderDynamicElements() {
//         //this.elementDroped(ragcomponent.heromarquee);
//         return html`
//             ${this.dynamicListOfElements.map((code)=>this.renderComponentFromString(code))}
//         `;
//     }

//     elementDroped(comp) {
//         if(comp === undefined) return;
//         const component = getComponent(comp);
//         this.dynamicListOfElements = [...this.dynamicListOfElements,component];
//     }

//     render() {
//         //this.elementDroped(ragcomponent.heromarquee);
//         return html`
//         <div id="container">
//             <rag-toolbar @drop-elem=${(event)=>{this.elementDroped(event.detail.component)}}></rag-toolbar>
//             <div id="blank-canvas-main">
//             ${this.renderDynamicElements()}
//             </div>
//         </div>
//         `;
//     }
// }


// import { LitElement, html, nothing, unsafeHTML } from "../../deps/lit-all.min.js";
// import { getComponent, ragcomponent } from "../html-components/componentStringMap.js";
// import { style } from "./blank-canvas.css.js";
// import { style as style1 } from "../../styles/styles.css.js"
// import  { style as style2 } from "../../blocks/hero-marquee/hero-marquee.css.js";
// import { style as style3 } from "../../blocks/aside/aside.css.js";

// export class BlankCanvas extends LitElement{

//     static tag = "blank-canvas";
   
//     static styles = [style, style1, style2, style3];

//     static properties = {
//         dynamicListOfElements : {type : Array},
//         // _elements : {type : Array},
//         _draggedElementIndex : {type: Number}
//     }

//     constructor() {
//         super();
//         this.dynamicListOfElements = [];
//         // this._elements = [];
//         this._draggedElementIndex = -1;
//         this._onDragOver = this._onDragOver.bind(this);
//         this._onDrop = this._onDrop.bind(this);
//     }

//     reorderElements(draggedIndex, targetIndex) {
//         const [removed] = this.elements.splice(draggedIndex, 1);
//         this.elements.splice(targetIndex, 0, removed);
//       }

//     renderComponentFromString(comp) {
//         if(comp === undefined) return nothing;
//         return html`
//             ${
//                 unsafeHTML(comp.replace(/\\"/g, '"'))
//             }
//         `;

//     }

//     renderDynamicElements() {
//         //this.elementDroped(ragcomponent.heromarquee);
//         return html`
//             ${this.dynamicListOfElements.map((code)=>this.renderComponentFromString(code))}
//         `;
//     }

//     // renderDynamicElements() {
//     //     return html`
//     //       ${this.dynamicListOfElements.map((code, index) => html`
//     //         <div draggable="true" 
//     //              @dragstart=${(e) => this._onDragStart(e, index)}
//     //              @dragover=${this._onDragOver}
//     //              @drop=${this._onDrop}
                 
//     //              key=${index}>
//     //           ${this.renderComponentFromString(code)}
//     //         </div>
//     //       `)}
//     //     `;
//     //   }

//     async updated() {
//         let isUpdateComplete = await this.updateComplete;
//         const elem = this.shadowRoot.getElementById("blank-canvas-main");
//         elem.addEventListener("touchstart", function (e) {
//           e.preventDefault();
//         });
//         elem.addEventListener("pointerup", (e) => {
//           this.handleUp(e);
//         });
//         console.log(elem.childElementCount);
//         let elements = elem.children;
  
//         let i = 0;
//         for (const node of elements) {
//           const child = node;
//           child.classList.add("child");
//           child.style.setProperty("--layer", `${i}`);
//           child.setAttribute("draggable", "true");
//           child.addEventListener("dragstart", (e) => {
//             this._onDragStart(e, index)
//           });
//           child.addEventListener("dragover", (e) => {
//             this._onDragOver
  
//           });
//           child.addEventListener("drop", (e) => {
//             this._onDrop(e);
//           });
          
//           i++;
//     }
//   }
//       _onDragStart(e, index) {
//         e.dataTransfer.setData('text/plain', index);
//         this._draggedIndex = index;
//       }
    
//       _onDragOver(e) {
//         e.preventDefault();
//         const targetIndex = parseInt(e.target.closest('[draggable]').getAttribute('key'));
//         e.currentTarget.style.cursor = 'grabbing';
//         if (targetIndex !== this._draggedIndex) {
//           this._draggedIndex = targetIndex;
//         }
//       }
    
//       _onDrop(e) {
//         e.preventDefault();
//         const draggedIndex = parseInt(e.dataTransfer.getData('text/plain'));
//         if (draggedIndex !== undefined && draggedIndex !== this._draggedIndex) {
//           this.canvasStore.reorderElements(draggedIndex, this._draggedIndex);
//         }
//         this._draggedIndex = undefined;
//         e.currentTarget.style.cursor = 'default';
//       }
    

//     elementDroped(comp) {
//         if(comp === undefined) return;
//         const component = getComponent(comp);
//         //this.elements.push(componentString);
//         this.dynamicListOfElements = [...this.dynamicListOfElements,component];
//     }

//     render() {
//         //this.elementDroped(ragcomponent.heromarquee);
//         return html`
//         <div id="container">
//             <rag-toolbar @drop-elem=${(event)=>{this.elementDroped(event.detail.component)}}></rag-toolbar>
//             <div id="blank-canvas-main">
//             ${this.renderDynamicElements()}
//             </div>
//         </div>
//         `;
//     }
// }


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
        pointerMap: {type: Map}
    }

    offset = { x: 0, y: 0 };
    
    // pointerMap: Map<number, PointerData> = new Map();

    constructor() {
        super();
        this.dynamicListOfElements = [];
        this.elements = [];
        this.pointerMap = new Map();
    }

    // handleDown(){
    //   console.log("handleDown");
    // }

    renderComponentFromString(comp) {
        if(comp === undefined) return nothing;
        //let elem = comp;
    
        return html`
            ${
                unsafeHTML(comp.replace(/\\"/g, '"'))
            }
        `;

        // elem.addEventListener("pointerdown", (e) => {
        //   this.handleDown(e, "element");
        // });
        // return elem;

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

    // async updated() {
    //   console.log("Adding event listeners");
    //   let isUpdateComplete = await this.updateComplete;
    //   const elem = this.shadowRoot.getElementById("blank-canvas-main");
    //   elem.addEventListener("touchstart", function (e) {
    //     e.preventDefault();
    //   });
    //   elem.addEventListener("pointerup", (e) => {
    //     this.handleUp(e);
    //   });
    //   console.log(elem.childElementCount);
    //   let elements = elem.children;

    //   let i = 0;
    //   for (const node of elements) {
    //     const child = node;
    //     child.classList.add("child");
    //     child.style.setProperty("--layer", `${i}`);
    //     child.setAttribute("draggable", "true");
    //     child.addEventListener("pointerdown", (e) => {
    //       this.handleDown(e, "element");
    //     });
    //     child.addEventListener("pointermove", (e) => {
    //       this.handleMove(e, "element", (delta) => {
    //         this.moveElement(child, delta);
    //       });
    //     });
    //     child.addEventListener("pointerup", (e) => {
    //       this.handleUp(e);
    //     });
        
    //     i++;
    //   }

      firstUpdated() {
        console.log("Adding event listeners");
        //let isUpdateComplete = await this.updateComplete;
        const elem = this.shadowRoot.getElementById("blank-canvas-main");
        elem.addEventListener("touchstart", function (e) {
          e.preventDefault();
        });
        elem.addEventListener("pointerup", (e) => {
          this.handleUp(e);
        });
        console.log(elem.childElementCount);
        let elements = elem.children;
  
        let i = 0;
        for (const node of elements) {
          const child = node;
          child.classList.add("child");
          child.style.setProperty("--layer", `${i}`);
          child.setAttribute("draggable", "true");
          child.addEventListener("pointerdown", (e) => {
            this.handleDown(e);
          });
          child.addEventListener("pointermove", (e) => {
            this.handleMove(e, (delta) => {
              this.moveElement(child, delta);
            });
          });
          child.addEventListener("pointerup", (e) => {
            this.handleUp(e);
          });
          
          i++;
      }

      // this.root.addEventListener("touchstart", function (e) {
      //   e.preventDefault();
      // });
      // this.root.addEventListener("pointerup", (e) => {
      //   this.handleUp(e);
      // });
      // this.requestUpdate();

  }

    // renderDynamicElements() {
    //     return html`
    //       ${this.dynamicListOfElements.map((code, index) => html`
    //         <div draggable="true" 
    //               @pointerdown=${(e) => {
    //                     this.handleDown(e)}}
    //               @pointermove=${(e) => 
    //                   { this.handleMove(e, (delta) => {
    //                     this.moveElement(this, delta)}
    //                   )}}
                    
    //               @dragover=${this._onDragOver}
    //               @drop=${this._onDrop}
                  
    //               key=${index}>
    //           ${this.renderComponentFromString(code)}
    //         </div>
    //       `)}
    //       <!-- ${this.requestUpdate()}; -->
    //     `;
    // }

    elementDroped(comp) {
        if(comp === undefined) return;
        const component = getComponent(comp);
        this.dynamicListOfElements = [...this.dynamicListOfElements,component];
    }

    handleDown(event) {
        event.preventDefault();
        (event.target).setPointerCapture(event.pointerId);
        this.pointerMap.set(event.pointerId, {
          id: event.pointerId,
          startPos: { x: event.clientX, y: event.clientY },
          currentPos: { x: event.clientX, y: event.clientY },
        });
        console.log("handleDown", this.pointerMap);
        // (event.target).addEventListener("pointermove", (e) => {
        //   this.handleMove(e, (delta) => {
        //     this.moveElement(event.target, delta);
        //   });
        // });
        // (event.target).addEventListener("pointerup", (e) => {
        //   this.handleUp(e);
        // });
      }

    handleMove(event, onMove) {
     
        event.preventDefault();
        console.log("handleMove-map", this.pointerMap);
        console.log("handleMove-pointerid", event.pointerId);
        const saved = this.pointerMap.get(event.pointerId);
        console.log("handleMove-saved",saved);
        const current = { ...saved.currentPos };
        saved.currentPos = { x: event.clientX, y: event.clientY };
        const delta = {
          x: saved.currentPos.x - current.x,
          y: saved.currentPos.y - current.y
        };
        onMove(delta);
      
    }

    handleUp(event) {
      console.log("handleUp")
      event.target.releasePointerCapture(event.pointerId);
    }

    moveElement(child, delta) {
      const getNumber = (key, fallback) => {
        const saved = child.style.getPropertyValue(key);
        if (saved.length > 0) {
          return parseFloat(saved.replace("px", ""));
        }
        return fallback;
      };
      const dx = getNumber("--dx", 0) + delta.x;
      const dy = getNumber("--dy", 0) + delta.y;
      child.style.transform = `translate(${dx}px, ${dy}px)`;
      child.style.setProperty("--dx", `${dx}px`);
      child.style.setProperty("--dy", `${dy}px`);
    }

    // getChildNodes(){
    //   const items = Array.from(this.childNodes);
    //   console.log(items);
    // }
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