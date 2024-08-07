import { selectTheme } from "./libs/views/select-theme/select-theme.js"
import { Homepage} from "./libs/views/homepage/homepage.js"
import { BlankCanvas } from "./libs/views/blank-canvas/blank-canvas.js";
import { Toolbar } from "./libs/views/toolbar/toolbar.js";
import { ToolbarItem } from "./libs/views/toolbar-item/toolbar-item.js";
import { ComponentPreview } from "./libs/views/component-preview/component-preview.js";
const defineElement = () => {

if(!customElements.get("select-theme")) {
    customElements.define("select-theme",selectTheme);
}


if(!customElements.get("rag-homepage")) {
    customElements.define("rag-homepage",Homepage);
}

if(!customElements.get(BlankCanvas.tag)) {
    customElements.define(BlankCanvas.tag,BlankCanvas);
}

if(!customElements.get(Toolbar.tag)) {
    customElements.define(Toolbar.tag,Toolbar);
}

if(!customElements.get(ToolbarItem.tag)) {
    customElements.define(ToolbarItem.tag,ToolbarItem);
}

if(!customElements.get(ComponentPreview.tag)) {
    customElements.define(ComponentPreview.tag,ComponentPreview);
}

}

defineElement();

