const contentBox = document.getElementById("content");

class Home extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            An inovative way to <mark>act</mark>
        `;
    }
}
class About extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            About site lmao
        `;
    }
}
customElements.define("site-home", Home);
customElements.define("site-about", About);