import cite from "./cite.js";

class Home extends HTMLElement {
    connectedCallback() {
        const currCite = cite();
        this.innerHTML = `
            <blockquote> "${currCite[0]}" </blockquote>
            <mark>${currCite[1]}</mark>
        `;
    }
}
class About extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            Jedno z nejčastějších témat poslední doby je ochrana životního prostředí a s tím spojené sbírání a třídění odpadů. 
            Aplikace GreenPoint je snahou o motivaci třídit opad pomocí hry, kdy hráč za každý vyhozený kus odpadu získává odměnu ve formě zelených lístků. 
            Díky lístkům se dají poté dokupovat různá vylepšení aplikace (jiný vzhled, … atd.). 
            Lístky zároveň slouží jako jakési měření úrovně, kdy hráč s určitým počtem lístků se může účastnit soutěží o hodnotné ceny od našich sponzorů. 
            V rámci aplikace je také možné hráči organizovat společné akce na sbírání odpadků. 
            Za každou takovou akci se samozřejmě připočítávají lístky, a to v závislosti na počtu zúčastněných.
        `;
    }
}

class Contact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        Filip Troníček <br />
        filip.tronicek@studentstc.cz <br />
        
        <br />

        Josef Kahoun <br />
        josef.kahoun@studentstc.cz <br />
        
        <br />

        Kateřina Navrátilová <br />
        katerina.navratilova@studentstc.cz <br />
        
        <br />

        Eliška Pavlíčková <br />
        eliska.pavlickova@studentstc.cz <br />
        
        <br />

        Matyáš John <br />
        matyas.john@studentstc.cz
        `;
    }
}

customElements.define("site-home", Home);
customElements.define("site-about", About);
customElements.define("site-contact", Contact)