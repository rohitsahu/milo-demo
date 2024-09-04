import { LitElement, html } from "../../deps/lit-all.min.js";
import { createTag } from "../../utils/utils.js";
import { style } from "./rag-actionbar.css.js";
import { updateDocument } from "./../../../libs/blocks/merch-card/network_util/doc_api_caller.js";

export class Actionbar extends LitElement {
    static tag = 'rag-actionbar';

    static styles = style;

    constructor() {
      super();
      this.toolbarState = true;
    }

    changeTheme() {
        const url =  window.location.href.substring(0,window.location.href.lastIndexOf("?"));
        //TODO added 1 as a hack
        window.location.href = url+"1?selectTheme=true";
    }

    createDocumentFromString(html) {
        const { document } = new JSDOM(html, { runScripts: undefined }).window;
        return document;
      }

    get getToolbarIcon() {
      return this.toolbarState ? html`<svg id="close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>` : html`<svg id="open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
    }

    toggleToolbar() {
      this.toolbarState = !this.toolbarState;
      this.requestUpdate();
      const rootNode = this.getRootNode();
      const canvas = rootNode.querySelector('blank-canvas');
      const toolbar = canvas.shadowRoot.querySelector('rag-toolbar');

      if (toolbar) {
        toolbar.style.display = this.toolbarState ? 'block' : 'none';
      }
    }

      async saveCanvas() {
        
        let htmlcomp = document.documentElement.cloneNode(true);

        let body = htmlcomp.querySelector("body");

        let actionbar = htmlcomp.querySelector("rag-actionbar");
        actionbar.remove();

        let main = body.querySelector("main");
        let section = main.querySelector(".section");

        if(section === undefined || section === null) {
          section = createTag("div");
          section.class = "section";
          main.appendChild(section);
        }

        let blankcanvasDom = document.querySelector("blank-canvas").shadowRoot;
        blankcanvasDom.querySelectorAll("#delete-component").forEach(element => {
          element.remove();
        })
        blankcanvasDom.querySelectorAll(".canvas-element").forEach(element => {
            section.appendChild(element.children[0].cloneNode(true));
        });

        let blankcanvas = main.querySelector("blank-canvas");
        blankcanvas.remove();

        console.log(htmlcomp.outerHTML);

        try {
            const out = await WebImporter.html2docx(window.location.href, htmlcomp.outerHTML, null, {   // Also pass the list of unedited md blocks
              createDocumentFromString: this.createDocumentFromString,
            });
            console.log(out.md);
            //console.log(out);
            // const blob = new Blob([out.docx], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
            //  // Create a URL representing the Blob
            // const url = URL.createObjectURL(blob);

            // // Create a download link and click it
            // const link = document.createElement('a');
            // link.href = url;
            // link.download = 'plan.docx';
            // document.body.appendChild(link);
            // link.click();
            // document.body.removeChild(link);
            // console.log('Downloaded url is,', url);
            const url = window.location.href;
            const end = url.lastIndexOf("?");
            const start = url.lastIndexOf("/");
            let name, namewithext;
            if(end === -1) {
              name = url.substring(start+1);
            } else {
              name = url.substring(start+1, end );
            }
            namewithext = name+".docx";
            await updateDocument(out.docx, namewithext );

            //command to preview the file;
            this.preview("drafts/"+name);

          } catch (error) {
            console.error(error);
          }

    }


    async preview(path) {
      let baseURl = "https://admin.hlx.page/preview/rohitsahu/milo-demo/main/"
      try {
        const response  = await fetch(baseURl + path,
          {
            method:"POST",
            cache: 'no-store',
            credentials: 'include',
          });

          if(response.ok){
            console.log("preview success");
            await fetch(window.location.href,  { cache: 'reload', mode: 'no-cors' });
          } else {
            console.log("Failed to preview");
          }

         

      } catch(error) {
        console.log("Error in preview : "+error);
      }
    
    }

    render() {
        return html`
        <sp-theme theme="spectrum" color="light" scale="medium">
        <div id="actionbar-container">
          <div id="toolbar-button">
            <sp-badge style="display: flex;" @click=${this.toggleToolbar}>${this.getToolbarIcon}</sp-badge>
            <x-icon-add></x-icon-add>
          </div>
          <div id="right-buttons">
            <sp-button variant="secondary" @click=${this.changeTheme}>Cancel</sp-button>
            <sp-button @click=${this.saveCanvas}>Save</sp-button>
          </div>
        </div>
        </sp-theme>
        `;
    }

}