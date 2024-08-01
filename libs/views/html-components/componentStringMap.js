import { aside, hero_marquee } from "./hero-marquee.js";

export const ragcomponent = {
    heromarquee : "hero-marquee",
    aside : "aside"
}

let getComponentMap = () =>  {
    const componentToStringMap = new Map();
    componentToStringMap.set(ragcomponent.heromarquee,hero_marquee());
    componentToStringMap.set(ragcomponent.aside,aside());
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