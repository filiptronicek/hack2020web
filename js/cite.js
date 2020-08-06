import cites from "./cites.js";

export default function getRand() {
    const randNum = Math.floor(Math.random() * cites.length);
    return [cites[randNum].cite, cites[randNum].name];
}