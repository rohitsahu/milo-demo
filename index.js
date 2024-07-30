import { selectTheme } from "./libs/views/select-theme/select-theme.js"
import { Homepage} from "./libs/views/homepage/homepage.js"
import { BlankCanvas } from "./libs/views/blank-canvas/blank-canvas.js";
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

}

defineElement();

