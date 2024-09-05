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
                        <div class="toolbar-row">
                            <toolbar-item text="Default">
                                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="8" y="12" width="24" height="2" fill="black"></rect>
                                    <rect x="8" y="18" width="16" height="2" fill="black"></rect>
                                    <rect x="8" y="24" width="12" height="2" fill="black"></rect>
                                </svg>
                            </toolbar-item>
                            <toolbar-item text="Centre" tag=${ragcomponent.text}>
                                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="10" y="12" width="20" height="2" fill="black"></rect>
                                    <rect x="12" y="18" width="16" height="2" fill="black"></rect>
                                    <rect x="14" y="24" width="12" height="2" fill="black"></rect>
                                </svg>
                            </toolbar-item>
                            <toolbar-item text="Large">
                                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="8" y="10" width="24" height="3" fill="black"></rect>
                                    <rect x="8" y="17" width="18" height="3" fill="black"></rect>
                                    <rect x="8" y="24" width="14" height="3" fill="black"></rect>
                                </svg>
                            </toolbar-item>
                            <toolbar-item text="Promo">
                                <svg slot="icon" <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18" style="
                                    transform: scale(1.5);
                                    transform: translateY(10px) scale(2);
                                ">
                                    <defs>
                                        <style>
                                        .fill {
                                            fill: #464646;
                                        }
                                        </style>
                                    </defs>
                                    <title>S Promote 18 N</title>
                                    <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path class="fill" d="M3,3A3,3,0,0,0,3,9H6V3Z" />
                                    <path class="fill" d="M6.5395,17H5.0855a.75.75,0,0,1-.7275-.568L3,10H6l1.267,6.068A.75.75,0,0,1,6.5395,17Z" />
                                    <path class="fill" d="M16.25,11.9785A12.43587,12.43587,0,0,0,8.7125,9H7V3H8.7125A12.66912,12.66912,0,0,0,16.25.0215.634.634,0,0,1,17,.713V11.287a.634.634,0,0,1-.75.6915Z" />
                                </svg>
                            </toolbar-item>
                            <toolbar-item text="AI Callout">
                                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                    <!-- Three Stars Inspired by Provided SVG -->
                                    <path d="M7 6l0.9 2.2L10 9l-2.1 0.8L7 12l-0.9-2.2L4 9l2.1-0.8L7 6z" fill="black"></path>
                                    <path d="M14 6l0.9 2.2L17 9l-2.1 0.8L14 12l-0.9-2.2L11 9l2.1-0.8L14 6z" fill="black"></path>
                                    <path d="M10 13l0.9 2.2L13 16l-2.1 0.8L10 19l-0.9-2.2L7 16l2.1-0.8L10 13z" fill="black"></path>
                                </svg>
                            </toolbar-item>
                            <toolbar-item text="Price">
                                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                    <text x="12" y="25" font-size="20px" fill="black">$</text>
                                    <text x="22" y="25" font-size="20px" fill="black">$</text>
                                </svg>
                            </toolbar-item>
                            <toolbar-item text="Link">
                                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 18 18" style="transform: scale(0.7);">
                                    <defs>
                                        <style>
                                            .fill {
                                                fill: #464646;
                                            }
                                        </style>
                                    </defs>
                                    <title>S LinkOutLight 40 N</title>
                                    <rect width="18" height="18" fill="none" />
                                    <path class="fill" d="M16,8.75V15H2V2H9.25a.25.25,0,0,0,.25-.25v-.5A.25.25,0,0,0,9.25,1H1.5a.5.5,0,0,0-.5.5v14a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V8.75a.25.25,0,0,0-.25-.25h-.5A.25.25,0,0,0,16,8.75Z" />
                                    <path class="fill" d="M11.77,1.4265l1.6945,1.695-4.773,4.773a.25.25,0,0,0,0,.3535L9.75,9.3085a.25.25,0,0,0,.3535,0l4.773-4.773L16.571,6.23A.25.25,0,0,0,17,6.0535V1H11.9465a.25.25,0,0,0-.1765.4265Z" />
                                </svg>
                            </toolbar-item>
                            <toolbar-item text="Link Farm">
                                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="8" y="10" width="10" height="1" fill="black"></rect>
                                    <rect x="8" y="17" width="10" height="1" fill="black"></rect>
                                    <rect x="8" y="24" width="10" height="1" fill="black"></rect>
                                    <rect x="8" y="31" width="10" height="1" fill="black"></rect>
                                    <rect x="22" y="10" width="10" height="1" fill="black"></rect>
                                    <rect x="22" y="17" width="10" height="1" fill="black"></rect>
                                    <rect x="22" y="24" width="10" height="1" fill="black"></rect>
                                    <rect x="22" y="31" width="10" height="1" fill="black"></rect>
                                </svg>
                            </toolbar-item>
                        </div>
                    </div>
                </div>
                <div class="row">
                <p>Hero Marquee</p>
                <div class="toolbar-grid">
                    <toolbar-item text="Default" tag=${ragcomponent.heromarquee}>
                        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <!-- Horizontal lines on the left -->
                            <line x1="0" y1="14" x2="15" y2="14" stroke="#464646" stroke-width="1"></line>
                            <line x1="0" y1="18" x2="12" y2="18" stroke="#464646" stroke-width="1"></line>
                            <line x1="0" y1="22" x2="9" y2="22" stroke="#464646" stroke-width="1"></line>

                            <!-- Hero image on the right -->
                            <svg xmlns="http://www.w3.org/2000/svg" x="20" y="11" width="18" height="18" viewBox="0 0 18 18">
                                <defs>
                                    <style>
                                        .fill {
                                            fill: #464646;
                                        }
                                    </style>
                                </defs>
                                <title>S CoverImage 18 N</title>
                                <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
                                <circle class="fill" cx="11.9" cy="6.3" r="1.25" />
                                <path class="fill" d="M17.4375,2H.5625A.534.534,0,0,0,0,2.5v11a.534.534,0,0,0,.5625.5h1.2a6.624,6.624,0,0,1,1.62-.544A5.78256,5.78256,0,0,1,2.317,10.2215c0-.023.005-.043.005-.0655C1.576,11.1,1,12,1,12V3H17v8a7.58206,7.58206,0,0,0-3.091-1c-1.2315,0-2.3235,1.3925-3.5095,1.85a5.84548,5.84548,0,0,1-.775,1.621,6.82355,6.82355,0,0,1,1.567.529h6.246A.534.534,0,0,0,18,13.5V2.5A.534.534,0,0,0,17.4375,2Z" />
                                <path class="fill" d="M12,17.019a1.56,1.56,0,0,0-.524-1.1765,5.05451,5.05451,0,0,0-2.869-1.117.572.572,0,0,1-.495-.574v-.829a.557.557,0,0,1,.138-.3605,4.37353,4.37353,0,0,0,1.0035-2.7405C9.2535,8.155,8.1575,7,6.5,7S3.7165,8.2,3.7165,10.2215a4.42648,4.42648,0,0,0,1.05,2.7425.553.553,0,0,1,.1365.3585V14.15a.569.569,0,0,1-.4965.574A4.84652,4.84652,0,0,0,1.502,15.84,1.5625,1.5625,0,0,0,1,17v1H12Z" />
                            </svg>

                            <!-- Button on the bottom left -->
                            <rect x="0" y="26" width="10" height="4" fill="#464646" rx="2" ry="2"></rect>
                        </svg>
                    </toolbar-item>
                    <toolbar-item text="Center">
                        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <!-- Horizontal lines on the left -->
                            <line x1="0" y1="14" x2="15" y2="14" stroke="#464646" stroke-width="1"></line>
                            <line x1="2" y1="18" x2="13" y2="18" stroke="#464646" stroke-width="1"></line>
                            <line x1="4" y1="22" x2="11" y2="22" stroke="#464646" stroke-width="1"></line>

                            <!-- Hero image on the right -->
                            <svg xmlns="http://www.w3.org/2000/svg" x="20" y="11" width="18" height="18" viewBox="0 0 18 18">
                                <defs>
                                    <style>
                                        .fill {
                                            fill: #464646;
                                        }
                                    </style>
                                </defs>
                                <title>S CoverImage 18 N</title>
                                <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18"></rect>
                                <circle class="fill" cx="11.9" cy="6.3" r="1.25"></circle>
                                <path class="fill" d="M17.4375,2H.5625A.534.534,0,0,0,0,2.5v11a.534.534,0,0,0,.5625.5h1.2a6.624,6.624,0,0,1,1.62-.544A5.78256,5.78256,0,0,1,2.317,10.2215c0-.023.005-.043.005-.0655C1.576,11.1,1,12,1,12V3H17v8a7.58206,7.58206,0,0,0-3.091-1c-1.2315,0-2.3235,1.3925-3.5095,1.85a5.84548,5.84548,0,0,1-.775,1.621,6.82355,6.82355,0,0,1,1.567.529h6.246A.534.534,0,0,0,18,13.5V2.5A.534.534,0,0,0,17.4375,2Z"></path>
                                <path class="fill" d="M12,17.019a1.56,1.56,0,0,0-.524-1.1765,5.05451,5.05451,0,0,0-2.869-1.117.572.572,0,0,1-.495-.574v-.829a.557.557,0,0,1,.138-.3605,4.37353,4.37353,0,0,0,1.0035-2.7405C9.2535,8.155,8.1575,7,6.5,7S3.7165,8.2,3.7165,10.2215a4.42648,4.42648,0,0,0,1.05,2.7425.553.553,0,0,1,.1365.3585V14.15a.569.569,0,0,1-.4965.574A4.84652,4.84652,0,0,0,1.502,15.84,1.5625,1.5625,0,0,0,1,17v1H12Z"></path>
                            </svg>

                            <!-- Button on the bottom left -->
                            <rect x="3" y="26" width="10" height="4" fill="#464646" rx="2" ry="2"></rect>
                        </svg>
                    </toolbar-item>
                    <toolbar-item text="With Video">
                        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <!-- Horizontal lines on the left -->
                            <line x1="0" y1="14" x2="15" y2="14" stroke="#464646" stroke-width="1"></line>
                            <line x1="0" y1="18" x2="12" y2="18" stroke="#464646" stroke-width="1"></line>
                            <line x1="0" y1="22" x2="9" y2="22" stroke="#464646" stroke-width="1"></line>

                            <!-- Video icon on the right -->
                            <svg x="20" y="5" width="18" height="30" viewBox="0 0 24 24">
                                <rect width="24" height="24" rx="3" fill="#464646"/>
                                <polygon points="9,7 15,12 9,17" fill="#ffffff"/>
                            </svg>

                            <!-- Button on the bottom left -->
                            <rect x="0" y="26" width="10" height="4" fill="#464646" rx="2" ry="2"></rect>
                        </svg>
                    </toolbar-item>
                </div>
                </div>
               <div class="row">
                <p>Aside</p>
                <div class="toolbar-grid">
                    <toolbar-item text="Small">
                        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 40">
                            <!-- Original SVG image -->
                            <rect width="24" height="24" fill="none"></rect>
                            <path d="M35,8H5a1,1,0,0,0-1,1V31a1,1,0,0,0,1,1H35a1,1,0,0,0,1-1V9A1,1,0,0,0,35,8ZM34,28.6875,27.728,22.05a2,2,0,0,0-2.828,0L21,25.85l-8.728-8.728a2,2,0,0,0-2.828,0L4,22.0595V10H34Z" fill="#464646"></path>
                            <circle cx="26.7" cy="13.3" r="2.7" fill="#464646"></circle>

                            <!-- Horizontal lines representing text -->
                            <line x1="5" y1="35" x2="35" y2="35" stroke="#464646" stroke-width="0.6"></line>
                            <line x1="5" y1="37" x2="35" y2="37" stroke="#464646" stroke-width="0.6"></line>
                            <line x1="5" y1="39" x2="35" y2="39" stroke="#464646" stroke-width="0.6"></line>
                        </svg>
                    </toolbar-item>
                    <toolbar-item text="Medium" tag=${ragcomponent.aside_m}>
                        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 40 40">
                            <!-- Original SVG image -->
                            <rect width="32" height="32" fill="none"></rect>
                            <path d="M35,8H5a1,1,0,0,0-1,1V31a1,1,0,0,0,1,1H35a1,1,0,0,0,1-1V9A1,1,0,0,0,35,8ZM34,28.6875,27.728,22.05a2,2,0,0,0-2.828,0L21,25.85l-8.728-8.728a2,2,0,0,0-2.828,0L4,22.0595V10H34Z" fill="#464646"></path>
                            <circle cx="26.7" cy="13.3" r="2.7" fill="#464646"></circle>

                            <!-- Horizontal lines representing text -->
                            <line x1="5" y1="35" x2="35" y2="35" stroke="#464646" stroke-width="0.8"></line>
                            <line x1="5" y1="37" x2="35" y2="37" stroke="#464646" stroke-width="0.8"></line>
                            <line x1="5" y1="39" x2="35" y2="39" stroke="#464646" stroke-width="0.8"></line>
                        </svg>
                    </toolbar-item>
                    <toolbar-item text="Large" tag=${ragcomponent.aside_l}>
                        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <!-- Original SVG image -->
                            <rect width="40" height="40" fill="none"></rect>
                            <path d="M35,8H5a1,1,0,0,0-1,1V31a1,1,0,0,0,1,1H35a1,1,0,0,0,1-1V9A1,1,0,0,0,35,8ZM34,28.6875,27.728,22.05a2,2,0,0,0-2.828,0L21,25.85l-8.728-8.728a2,2,0,0,0-2.828,0L4,22.0595V10H34Z" fill="#464646"></path>
                            <circle cx="26.7" cy="13.3" r="2.7" fill="#464646"></circle>

                            <!-- Horizontal lines representing text -->
                            <line x1="5" y1="35" x2="35" y2="35" stroke="#464646" stroke-width="1"></line>
                            <line x1="5" y1="37" x2="35" y2="37" stroke="#464646" stroke-width="1"></line>
                            <line x1="5" y1="39" x2="35" y2="39" stroke="#464646" stroke-width="1"></line>
                        </svg>
                    </toolbar-item>
                </div>
                </div>
                <div class="row">
                <p>Media</p>
                <div class="toolbar-grid">
                        <toolbar-item text="Video" tag=${ragcomponent.media}>
                            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18" style="
                                    transform: scale(2);
                                    transform: translateY(10px) scale(2);
                                ">
                                <defs>
                                    <style>
                                    .fill {
                                        fill: #464646;
                                    }
                                    </style>
                                </defs>
                                <title>S VideoOutline 18 N</title>
                                <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><path class="fill" d="M15.5,2H2.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5V2.5A.5.5,0,0,0,15.5,2ZM5,14.75a.25.25,0,0,1-.25.25H3.25A.25.25,0,0,1,3,14.75v-1.5A.25.25,0,0,1,3.25,13h1.5a.25.25,0,0,1,.25.25Zm0-3.353a.25.25,0,0,1-.25.25H3.25a.25.25,0,0,1-.25-.25v-1.5a.25.25,0,0,1,.25-.25h1.5a.25.25,0,0,1,.25.25ZM5,8.103a.25.25,0,0,1-.25.25H3.25A.25.25,0,0,1,3,8.103v-1.5a.25.25,0,0,1,.25-.25h1.5a.25.25,0,0,1,.25.25ZM5,4.75A.25.25,0,0,1,4.75,5H3.25A.25.25,0,0,1,3,4.75V3.25A.25.25,0,0,1,3.25,3h1.5A.25.25,0,0,1,5,3.25ZM12,15H6V10h6Zm0-7H6V3h6Zm3,6.75a.25.25,0,0,1-.25.25h-1.5a.25.25,0,0,1-.25-.25v-1.5a.25.25,0,0,1,.25-.25h1.5a.25.25,0,0,1,.25.25Zm0-3.353a.25.25,0,0,1-.25.25h-1.5a.25.25,0,0,1-.25-.25v-1.5a.25.25,0,0,1,.25-.25h1.5a.25.25,0,0,1,.25.25Zm0-3.294a.25.25,0,0,1-.25.25h-1.5a.25.25,0,0,1-.25-.25v-1.5a.25.25,0,0,1,.25-.25h1.5a.25.25,0,0,1,.25.25ZM15,4.75a.25.25,0,0,1-.25.25h-1.5A.25.25,0,0,1,13,4.75V3.25A.25.25,0,0,1,13.25,3h1.5a.25.25,0,0,1,.25.25Z" />
                            </svg>
                        </toolbar-item>
                        <toolbar-item text="Image">
                            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                <rect width="40" height="40" fill="none"></rect>
                                <path d="M35,8H5a1,1,0,0,0-1,1V31a1,1,0,0,0,1,1H35a1,1,0,0,0,1-1V9A1,1,0,0,0,35,8ZM34,28.6875,27.728,22.05a2,2,0,0,0-2.828,0L21,25.85l-8.728-8.728a2,2,0,0,0-2.828,0L4,22.0595V10H34Z" fill="#464646"></path>
                                <circle cx="26.7" cy="13.3" r="2.7" fill="#464646"></circle>
                            </svg>
                        </toolbar-item>
                        <toolbar-item text="Audio">
                            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 18 18" width="40">
                                <defs>
                                    <style>
                                    .fill {
                                        fill: #464646;
                                    }
                                    </style>
                                </defs>
                                <title>S Audio 40 N</title>
                                <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" />
                                <path class="fill" d="M15,1.7085a.5.5,0,0,0-.634-.4825l-8,2.2235A.5.5,0,0,0,6,3.9315v8.275a3.314,3.314,0,0,0-3.072.0285c-1.5565.7575-2.3435,2.35-1.7575,3.55s2.323,1.568,3.8795.81A3.217,3.217,0,0,0,7,13.9285V6.412l7-2v5.7945a3.314,3.314,0,0,0-3.072.0285c-1.5565.7575-2.3435,2.35-1.7575,3.55s2.323,1.566,3.8795.808A3.2135,3.2135,0,0,0,15,11.9165Z" />
                            </svg>
                        </toolbar-item>
                </div>
                </div>
                <div class="row">
                <p>Layout Patterns</p>
                    <div class="toolbar-grid">
                        <toolbar-item text="Media block 2up">
                            <svg svg="" slot="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <!-- First media box -->
                                <rect x="10" y="12" width="8" height="16" rx="1"></rect>
                                
                                <!-- Second media box -->
                                <rect x="24" y="12" width="8" height="16" rx="1"></rect>
                            </svg>
                        </toolbar-item>
                        <toolbar-item text="Media block 3up" tag=${ragcomponent.layout_3up}>
                            <svg svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <!-- First media box -->
                                <rect x="5" y="12" width="8" height="16" rx="1"></rect>
                                
                                <!-- Second media box -->
                                <rect x="16" y="12" width="8" height="16" rx="1"></rect>
                                
                                <!-- Third media box -->
                                <rect x="27" y="12" width="8" height="16" rx="1"></rect>
                            </svg>
                        </toolbar-item>
                    </div>
                </div>
                 <div class="row">
                <p>Merch Card</p>
                    <div class="toolbar-grid">
                        <toolbar-item text="Default">
                            <svg slot="icon" <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 18 18" width="18" style="
                                    transform: translateY(12px) scale(2);">
                                <defs>
                                    <style>
                                    .fill {
                                        fill: #464646;
                                    }
                                    </style>
                                </defs>
                                <title>S Article 18 N</title>
                                <rect id="Canvas" fill="#ff13dc" opacity="0" width="18" height="18" /><rect class="fill" height="1" width="5" x="10" y="5" />
                                <rect class="fill" height="1" width="5" x="10" y="9" />
                                <rect class="fill" height="1" width="6" x="3" y="11" />
                                <rect class="fill" height="1" width="5" x="10" y="7" />
                                <rect class="fill" height="1" width="5" x="10" y="11" />
                                <rect class="fill" height="5" width="6" x="3" y="5" />
                                <path class="fill" d="M16.5,2H1.5a.5.5,0,0,0-.5.5v12a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V2.5A.5.5,0,0,0,16.5,2ZM2,14V3H16V14Z" />
                            </svg>
                        </toolbar-item>
                        <toolbar-item text="Segment">
                            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                <defs>
                                    <style>
                                    .fill {
                                        fill: #464646;
                                    }
                                    </style>
                                </defs>
                                <title>Segment Card</title>
                                <rect id="Canvas" fill="#ff13dc" opacity="0" width="40" height="40" />
                                <rect class="fill" height="10" width="30" x="5" y="8" />
                                <rect class="fill" height="10" width="30" x="5" y="20" />
                                <rect class="fill" height="10" width="30" x="5" y="32" />
                                <path class="fill" d="M33.5,4H6.5a.5.5,0,0,0-.5.5v24a.5.5,0,0,0,.5.5h27a.5.5,0,0,0,.5-.5V4.5A.5.5,0,0,0,33.5,4ZM7,27V6H33V27Z" />
                            </svg>
                        </toolbar-item>
                        <toolbar-item text="Plans">
                            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                <defs>
                                    <style>
                                    .fill {
                                        fill: #464646;
                                    }
                                    </style>
                                </defs>
                                <title>Plans Card</title>
                                <rect id="Canvas" fill="#ff13dc" opacity="0" width="40" height="40" />
                                <rect class="fill" height="3" width="28" x="6" y="6" />
                                <rect class="fill" height="3" width="28" x="6" y="12" />
                                <rect class="fill" height="3" width="28" x="6" y="18" />
                                <rect class="fill" height="3" width="28" x="6" y="24" />
                                <path class="fill" d="M33.5,4H6.5a.5.5,0,0,0-.5.5v24a.5.5,0,0,0,.5.5h27a.5.5,0,0,0,.5-.5V4.5A.5.5,0,0,0,33.5,4ZM7,27V6H33V27Z" />
                            </svg>
                        </toolbar-item>
                        <toolbar-item text="Product">
                            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                <defs>
                                    <style>
                                    .fill {
                                        fill: #464646;
                                    }
                                    </style>
                                </defs>
                                <title>Product Card</title>
                                <rect id="Canvas" fill="#ff13dc" opacity="0" width="40" height="40" />
                                <rect class="fill" height="12" width="28" x="6" y="8" />
                                <rect class="fill" height="3" width="20" x="6" y="24" />
                                <rect class="fill" height="3" width="20" x="6" y="28" />
                                <path class="fill" d="M33.5,4H6.5a.5.5,0,0,0-.5.5v24a.5.5,0,0,0,.5.5h27a.5.5,0,0,0,.5-.5V4.5A.5.5,0,0,0,33.5,4ZM7,27V6H33V27Z" />
                            </svg>
                        </toolbar-item>
                        <toolbar-item text="Catalog">
                            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                <!-- Placeholder for Catalog Icon -->
                                <rect x="5" y="5" width="30" height="30" fill="#464646" rx="5" ry="5"></rect>
                                <line x1="10" y1="10" x2="30" y2="10" stroke="#ffffff" stroke-width="3"></line>
                                <line x1="10" y1="15" x2="30" y2="15" stroke="#ffffff" stroke-width="3"></line>
                                <line x1="10" y1="20" x2="30" y2="20" stroke="#ffffff" stroke-width="3"></line>
                                <line x1="10" y1="25" x2="30" y2="25" stroke="#ffffff" stroke-width="3"></line>
                                <line x1="10" y1="30" x2="30" y2="30" stroke="#ffffff" stroke-width="3"></line>
                            </svg></toolbar-item>
                        <toolbar-item text="Mini Compare">
                            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                <!-- Placeholder for Min-compare Icon -->
                                <rect x="5" y="5" width="30" height="30" fill="#464646" rx="5" ry="5"></rect>
                                <line x1="10" y1="15" x2="30" y2="15" stroke="#ffffff" stroke-width="3"></line>
                                <line x1="10" y1="25" x2="30" y2="25" stroke="#ffffff" stroke-width="3"></line>
                                <line x1="10" y1="20" x2="20" y2="20" stroke="#ffffff" stroke-width="3"></line>
                            </svg>
                        </toolbar-item>
                    </div>
                </div>
            </div>
        `
    }
}