import { LitElement, css, html, } from "lit";

export class MaetsHeader extends LitElement {

    static get tag() {
        return 'maets-header';
    }

    constructor() {
        super();
        this.loggedIn = false;
        this.username = '<DEFAULT USERNAME>';
    }

    static get styles() {
        return css`
            :host {
                background-color: blue;
            } 
        `;
    }

    render() {
        return html`
            <img src="../img/maets-logo.png" alt="Maets Logo">
            <a href="">Store</a>
            <a href="">Community</a>
            <a href="">About</a>
            <a href="">Support</a>
        `;
    }


    static get properties() {
        return {
            loggedIn: { type: Boolean },
            username: { type: String },
        };
    }
}

globalThis.customElements.define(MaetsHeader.tag, MaetsHeader);