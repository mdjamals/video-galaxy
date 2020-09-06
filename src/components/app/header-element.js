import { LitElement, html, css } from 'lit-element';
import { NavLinkElement } from "./nav-link-element";
import globalCss from '../../css/style-module';
import { LionInput } from "@lion/input";
import AppLogoElement from './app-logo-element';

export default class HeaderElement extends LitElement {

    static get styles() {
        return [
            globalCss,
            css`
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
                background-color: var(--orange-bg-color);
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
                color: #fff;
            }

            nav {
                padding: 6px;
                background-color: #474747;
                display: flex;
                align-items: center;
            }

            .menu {
                font-size:30px;
                cursor:pointer;
                color: #fff;
            }

            .logo {
                margin-left: 10px;
            }
            .navbar {
                position: sticky;
                top: 0;
            }
            .navbar-brand {
                display: flex;
                width: max-content;
                text-decoration: none;
            }

            .navbar-brand .title {
                font: 1.4em Impact;
                text-decoration: none;
                color: var(--orange-bg-color);
                margin-left: 8px;
            }

            @media screen and (max-height: 450px) {
                .sidenav {padding-top: 15px;}
                .sidenav a {font-size: 18px;}
            }
        `];
    }

    openDrawer(e) {
        this.shadowRoot.getElementById('drawer').style.width = "250px";
        e.preventDefault();
    }

    closeDrawer(e) {
        this.shadowRoot.getElementById('drawer').style.width = "0";
    }

    render() {
        return html`
            <div id="drawer" class="sidenav"  @click="${this.closeDrawer}">
                <a href="javascript:void(0)" class="closebtn">&times;</a>

                <ul>
                    <li><nav-link href="/">Home</nav-link></li>
                    <li><nav-link href="/subscriptions">Subscriptions</nav-link></li>
                    <li><nav-link href="/movies" >Movies</nav-link></li>
                    <li><nav-link href="/learning">Learning</nav-link></li>
                </ul>
            </div>
            
            <nav class="navbar">
                <span class="menu" @click="${this.openDrawer}">&#9776;</span>
                <a class="navbar-brand" href="#">
                    <app-logo-element class="logo"></app-logo-element>
                    <span class="title">Video Galaxy</span>
                </a>
                <lion-input>
                    <div slot="suffix"><i class="fa fa-search"></i></div>
                </lion-input>
            </nav>
            
        `;
    }
}
customElements.define('header-element', HeaderElement);