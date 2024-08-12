import { LitElement, html } from "../../deps/lit-all.min.js";
import { style } from "./rag-actionbar.css.js";

export class Actionbar extends LitElement {
    static tag = 'rag-actionbar';

    static styles = style;

    constructor() {
      super();
      this.toolbarState = false;
    }

    changeTheme() {
        window.history.back();
    }

    createDocumentFromString(html) {
        const { document } = new JSDOM(html, { runScripts: undefined }).window;
        return document;
      }

    get getToolbarText() {
      return this.toolbarState ? "Close" : "Open";
    }

    toggleToolbar() {
      this.toolbarState = !this.toolbarState;
      this.requestUpdate();
    }

      async saveCanvas() {
        
        let htmlcomp = document.documentElement.cloneNode(true);

        let body = htmlcomp.querySelector("body");

        let actionbar = htmlcomp.querySelector("rag-actionbar");
        actionbar.remove();

        let main = body.querySelector("main");
        let section = main.querySelector(".section");

        let blankcanvasDom = document.querySelector("blank-canvas").shadowRoot;

        blankcanvasDom.querySelectorAll(".canvas-element").forEach(element => {
            section.appendChild(element.children[0].cloneNode(true));
        });

        let blankcanvas = main.querySelector("blank-canvas");
        blankcanvas.remove();

        console.log(htmlcomp.outerHTML);

        try {
            const out = await WebImporter.html2docx(window.location.href, htmlcomp.outerHTML, null, {
              createDocumentFromString: this.createDocumentFromString,
            });
            console.log(out.md);
            //updateDocument(out.docx);
          } catch (error) {
            console.error(error);
          }

    }


    render() {
        return html`
        <sp-theme theme="spectrum" color="light" scale="medium">
        <div id="actionbar-container">
          <div>
            <sp-button @click=${this.toggleToolbar}>${this.getToolbarText}</sp-button>
          </div>
          <div>
            <sp-button>Submit</sp-button>
            <sp-button @click=${this.saveCanvas}>Save</sp-button>
            <sp-button @click=${this.changeTheme}>Change theme</sp-button>
          </div>
        </div>
        </sp-theme>
        `;
    }

}