import { LitElement, html } from "../../deps/lit-all.min.js";
import { createTag } from "../../utils/utils.js";
import { style } from "./rag-actionbar.css.js";

export class Actionbar extends LitElement {
    static tag = 'rag-actionbar';

    static styles = style;

    changeTheme() {
        window.history.back();
    }

    createDocumentFromString(html) {
        const { document } = new JSDOM(html, { runScripts: undefined }).window;
        return document;
      }

    async saveCanvas() {
        
        let htmlcomp = document.documentElement.cloneNode(true);

        let body = htmlcomp.querySelector("body");

        let actionbar = htmlcomp.querySelector("rag-actionbar");
        actionbar.remove();

        let main = body.querySelector("main");
        let section = main.querySelector(".section");

        if(section === undefined) {
          section = createTag("div");
          section.class = "section";
          main.appendChild(section);
        }

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
            const blob = new Blob([out.docx], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
             // Create a URL representing the Blob
            const url = URL.createObjectURL(blob);

            // Create a download link and click it
            const link = document.createElement('a');
            link.href = url;
            link.download = 'plan.docx';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            console.log('Downloaded url is,', url);
            //updateDocument(out.docx);
          } catch (error) {
            console.error(error);
          }

    }


    render() {
        return html`
        <sp-theme theme="spectrum" color="light" scale="medium">
        <div id="actionbar-container">
            <sp-button>Submit</sp-button>
            <sp-button @click=${this.saveCanvas}>Save</sp-button>
            <sp-button @click=${this.changeTheme}>Change theme</sp-button>
        </div>
        </sp-theme>
        `;
    }

}