import { LitElement, html, css } from 'lit-element';
import { NavLinkElement } from "./nav-link-element";

export default class HeaderElement extends LitElement {

    static styles = css`
    :host {
        display: block;
    }

    .sidenav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #111;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
    }

    .sidenav a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }

    .sidenav a:hover {
        color: #f1f1f1;
    }

    .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }

    .menu {
        font-size:30px;
        cursor:pointer;
    }

    @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
        .sidenav a {font-size: 18px;}
    }
    `;

    openDrawer(e) {
        this.shadowRoot.getElementById('drawer').style.width = "250px";
        e.preventDefault();
    }

    closeDrawer(e) {
        this.shadowRoot.getElementById('drawer').style.width = "0";
        e.preventDefault();
    }

    render() {
        return html`
        <div id="drawer" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" @click="${this.closeDrawer}">&times;</a>
            <nav-link href="/">Home</nav-link>
            <nav-link href="/info">Info</nav-link>
            <nav-link href="/info?data=12345">Info?data=12345</nav-link>
            <nav-link href="/user/14">user/14</nav-link>
        </div>
        
        <span class="menu" @click="${this.openDrawer}">&#9776; open</span>
        `;
    }
}
customElements.define('header-element', HeaderElement);