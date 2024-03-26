// to be implemented within all maets website pages as the header of the website

import { LitElement, css, html, } from "lit";

export class MaetsHeader extends LitElement {

    static get tag() {
        return 'maets-header';
    }

    constructor() {
        super();
        this.loggedIn = false;
        this.username = 'login';
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
           <div>
                <img src="../img/maets-logo.png" alt="Maets Logo">
                <nav>
                    <a href="">Store</a>
                    <a href="">Community</a>
                    <a href="">About</a>
                    <a href="">Support</a>
                </nav>
            </div>
            <div>
                <button id='install'>Install Steam</button>
                <button @click='${this.loginButton}' id='login-username'>${this.username}</button>
            </div>
        `;
    }

    loginButton() {
        if (this.loggedIn === true) {
            // drops down a menu for account settings + sign out
        } else {
            // should navigate to sign in page
        }
    }

    static get properties() {
        return {
            loggedIn: { type: Boolean },
            username: { type: String }
        }
    }
}

globalThis.customElements.define(MaetsHeader.tag, MaetsHeader);