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
                        <toolbar-item text="Heading" tag=${ragcomponent.text} variant=${6}></toolbar-item>
                        <toolbar-item text="Subtext" tag=${ragcomponent.text} variant=${7}></toolbar-item>
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
                        <toolbar-item text="Default" tag=${ragcomponent.heromarquee} variant=${0}></toolbar-item>
                        <toolbar-item text="Center" tag=${ragcomponent.heromarquee} variant=${1}></toolbar-item>
                        <toolbar-item text="With Video" tag=${ragcomponent.heromarquee} variant=${2}></toolbar-item>
                </div>
                </div>
               <div class="row">
                <p>Aside</p>
                <div class="toolbar-grid">
                        <toolbar-item text="Small" tag=${ragcomponent.aside} variant=${0}></toolbar-item>
                        <toolbar-item text="Medium" tag=${ragcomponent.aside} variant=${1}></toolbar-item>
                        <toolbar-item text="Large" tag=${ragcomponent.aside} variant=${2}></toolbar-item>
                </div>
                </div>
                <div class="row">
                <p>Media</p>
                <div class="toolbar-grid">
                        <toolbar-item text="Small" tag=${ragcomponent.media} variant=${0}></toolbar-item>
                        <toolbar-item text="Medium" tag=${ragcomponent.media} variant=${1}></toolbar-item>
                        <toolbar-item text="Large" tag=${ragcomponent.media} variant=${2}></toolbar-item>
                </div>
                </div>
                <div class="row">
                <p>Layout Patterns</p>
                    <div class="toolbar-grid">
                        <toolbar-item text="Media block 2up" tag=${ragcomponent.layout} variant=${17}></toolbar-item>
                        <toolbar-item text="Media block 3up" tag=${ragcomponent.layout} variant=${18}></toolbar-item>
                        <toolbar-item text="Media block 4up" tag=${ragcomponent.layout} variant=${19}></toolbar-item>
                    </div>
                </div>
                 <div class="row">
                <p>Merch Card</p>
                    <div class="toolbar-grid">
                        <toolbar-item text="Default" tag=${ragcomponent.merchCard} variant=${0}></toolbar-item>
                        <toolbar-item text="Contained Middle" tag=${ragcomponent.merchCard} variant=${1}></toolbar-item>
                        <toolbar-item text="Contained" tag=${ragcomponent.merchCard} variant=${2}></toolbar-item>
                        <toolbar-item text="Small Light" tag=${ragcomponent.merchCard} variant=${3}></toolbar-item>
                        <toolbar-item text="Large" tag=${ragcomponent.merchCard} variant=${4}></toolbar-item>
                        <toolbar-item text="Large Standard" tag=${ragcomponent.merchCard} variant=${5}></toolbar-item>
                        <toolbar-item text="Large Compactt" tag=${ragcomponent.merchCard} variant=${6}></toolbar-item>
                        <toolbar-item text="Quiet" tag=${ragcomponent.merchCard} variant=${7}></toolbar-item>
                        <toolbar-item text="Split Large" tag=${ragcomponent.merchCard} variant=${8}></toolbar-item>
                    </div>
                </div>
            </div>
        `
    }
}