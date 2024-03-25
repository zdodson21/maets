import { LitElement, html, css } from "lit";

export class MaetsHeader extends LitElement {

    static get tag() {
        return 'maets-header';
    }

    constructor() {
        this.loggedIn = false;
        this.username = '<DEFAULT USERNAME>'
    }

    static get styles() {
        return css `

        `
    }

    render() {

    }

    loggedOutView() {

    }

    loggedInView() {

    }

    consistentView() {
        return html `
            <img src="../img/maets-logo.png" alt="Maets Logo">
            <a href="">Store</a>
            <a href="">Community</a>
            <a href="">About</a>
            <a href="">Support</a>
        `
    }

    static get properties() {
        return {
            loggedIn: { type: Boolean },
            username: { type: String },
        };
    }

}

globalThis.customElements.define(MaetsHeader.tag, MaetsHeader);