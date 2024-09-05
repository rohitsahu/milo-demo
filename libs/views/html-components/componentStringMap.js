import { aside_m, aside_l, hero_marquee, aside_in, aside_in_2, aside_in_3 } from "./hero-marquee.js";
import { media } from "./media.js";
import { layout_3up } from "./layout-3up.js";
import { text } from "./text.js";

export const ragcomponent = {
    heromarquee : "hero-marquee",
    aside_l : "aside_l",
    aside_m : "aside_m",
    media : "media",
    layout_3up : "layout-3up",
    text: "text",
    aside_in : "aside-indesign",
    aside_in_2 : "aside-in_2",
    aside_in_3 : "aside-in_3"
}

let getComponentMap = () =>  {
    const componentToStringMap = new Map();
    componentToStringMap.set(ragcomponent.heromarquee,hero_marquee());
    componentToStringMap.set(ragcomponent.aside_l,aside_l());
    componentToStringMap.set(ragcomponent.aside_m,aside_m());
    componentToStringMap.set(ragcomponent.media,media());
    componentToStringMap.set(ragcomponent.layout_3up,layout_3up());
    componentToStringMap.set(ragcomponent.text,text());
    componentToStringMap.set(ragcomponent.aside_in, aside_in());
    componentToStringMap.set(ragcomponent.aside_in_2, aside_in_2());
    componentToStringMap.set(ragcomponent.aside_in_3, aside_in_3())
    return componentToStringMap;
}

const componentMap = getComponentMap();

export const getComponent = (comp) => {
    if(comp) {
        console.log(comp);
        return componentMap.get(comp);
    } else {
        console.log("component undefined or null");
        return null;
    }
}