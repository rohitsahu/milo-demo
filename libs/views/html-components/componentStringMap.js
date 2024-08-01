import { aside, hero_marquee } from "./hero-marquee.js";
import { media } from "./media.js";

export const ragcomponent = {
    heromarquee : "hero-marquee",
    aside : "aside",
    media : "media"
}

let getComponentMap = () =>  {
    const componentToStringMap = new Map();
    componentToStringMap.set(ragcomponent.heromarquee,hero_marquee());
    componentToStringMap.set(ragcomponent.aside,aside());
    componentToStringMap.set(ragcomponent.media,media());
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