import { LitElement, html, css } from 'lit-element';
import { NavLinkElement } from "./nav-link-element";

export default class HeaderElement extends LitElement {

    static styles = css`
    :host {
        display: block;
    }
    `;

    render() {
        return html`
        <nav-link href="/">Home</nav-link>
        <nav-link href="/info">Info</nav-link>
        <nav-link href="/info?data=12345">Info?data=12345</nav-link>
        <nav-link href="/user/14">user/14</nav-link>`;
    }
}
customElements.define('header-element', HeaderElement);