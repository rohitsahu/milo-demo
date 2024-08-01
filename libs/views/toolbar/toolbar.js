import { LitElement, html } from "../../deps/lit-all.min.js";
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
                        <toolbar-item text="Default" tag="hero-marquee"></toolbar-item>
                        <toolbar-item text="Center"></toolbar-item>
                        <toolbar-item text="With Video"></toolbar-item>
                </div>
                </div>
                <div class="row">
                <p>Marquee</p>
                <div class="toolbar-grid">
                        <toolbar-item text="Light"></toolbar-item>
                        <toolbar-item text="Light XXL button"></toolbar-item>
                        <toolbar-item text="Small"></toolbar-item>
                        <toolbar-item text="Small Light"></toolbar-item>
                        <toolbar-item text="Large"></toolbar-item>
                        <toolbar-item text="Large Standard"></toolbar-item>
                        <toolbar-item text="Large Compactt"></toolbar-item>
                        <toolbar-item text="Quiet"></toolbar-item>
                        <toolbar-item text="Split Large"></toolbar-item>
                </div>
                </div>

                  <div class="row">
                <p>Aside</p>
                <div class="toolbar-grid">
                        <toolbar-item text="Small" tag=></toolbar-item>
                        <toolbar-item text="Medium"></toolbar-item>
                        <toolbar-item text="Large" tag="aside"></toolbar-item>
                </div>
                </div>

                <div class="row">
                <p>Columns</p>
                    <div class="toolbar-grid">
                        <toolbar-item text="Default"></toolbar-item>
                        <toolbar-item text="Contained Middle"></toolbar-item>
                        <toolbar-item text="Contained"></toolbar-item>
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