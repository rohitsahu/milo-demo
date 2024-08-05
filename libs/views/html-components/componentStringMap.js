import { aside_m, aside_l, hero_marquee } from "./hero-marquee.js";
import { media } from "./media.js";

export const ragcomponent = {
    heromarquee : "Hero Marquee",
    aside_l : "aside_l",
    aside_m : "aside_m",
    media : "Media",
    merchCard: "Merch Card"
}

let getComponentMap = () =>  {
    const componentToStringMap = new Map();
    componentToStringMap.set(ragcomponent.heromarquee,hero_marquee());
    componentToStringMap.set(ragcomponent.aside_l,aside_l());
    componentToStringMap.set(ragcomponent.aside_m,aside_m());
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