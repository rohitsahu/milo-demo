import { LitElement, html } from "../../deps/lit-all.min.js";
import { ragcomponent } from "../html-components/componentStringMap.js";
import { style } from "./toolbar.css.js";


export class Toolbar extends LitElement {

    static tag = "rag-toolbar";

    static styles = style;

    render() {
        return html`
            <div id="toolbar-container">
                <div class="row">
                    <p>Text</p>
                    <div class="toolbar-grid">
                        <toolbar-item text="Heading"></toolbar-item>
                        <toolbar-item text="Subtext"></toolbar-item>
                        <toolbar-item text="Promotext"></toolbar-item>
                        <toolbar-item text="Price"></toolbar-item>
                         <toolbar-item text="Strike through Price"></toolbar-item>
                        <toolbar-item text="Link"></toolbar-item>
                        <toolbar-item text="AI Callout"></toolbar-item>
                    </div>
                </div>

                <div class="row">
                <p>Hero Marquee</p>
                <div class="toolbar-grid">
                        <toolbar-item text="Default" tag=${ragcomponent.heromarquee}></toolbar-item>
                        <toolbar-item text="Center"></toolbar-item>
                        <toolbar-item text="With Video"></toolbar-item>
                </div>
                </div>
               <div class="row">
                <p>Aside</p>
                <div class="toolbar-grid">
                        <toolbar-item text="Small"></toolbar-item>
                        <toolbar-item text="Medium" tag=${ragcomponent.aside_m}></toolbar-item>
                        <toolbar-item text="Large" tag=${ragcomponent.aside_l}></toolbar-item>
                </div>
                </div>
                <div class="row">
                <p>Media</p>
                <div class="toolbar-grid">
                        <toolbar-item text="Small" tag=${ragcomponent.media}></toolbar-item>
                        <toolbar-item text="Medium"></toolbar-item>
                        <toolbar-item text="Large"></toolbar-item>
                </div>
                </div>
                <div class="row">
                <p>Layout Patterns</p>
                    <div class="toolbar-grid">
                        <toolbar-item text="Media block 2up"></toolbar-item>
                        <toolbar-item text="Media block 3up" tag=${ragcomponent.layout_3up}></toolbar-item>
                    </div>
                </div>
                 <div class="row">
                <p>Merch Card</p>
                    <div class="toolbar-grid">
                        <toolbar-item text="Default"></toolbar-item>
                        <toolbar-item text="Contained Middle"></toolbar-item>
                        <toolbar-item text="Contained"></toolbar-item>
                        <toolbar-item text="Small Light"></toolbar-item>
                        <toolbar-item text="Large"></toolbar-item>
                        <toolbar-item text="Large Standard"></toolbar-item>
                        <toolbar-item text="Large Compactt"></toolbar-item>
                        <toolbar-item text="Quiet"></toolbar-item>
                        <toolbar-item text="Split Large"></toolbar-item>
                    </div>
                </div>
            </div>
        `
    }
}