import { LitElement, html, css } from 'lit-element';
import { NavLinkElement } from "./nav-link-element";
import globalCss from '../../css/style-module';
import { LionInput } from "@lion/input";
import { LionButton } from '@lion/button';
import { navigator } from "lit-element-router";
import { singletonManager } from 'singleton-manager';
import { OBJECT_KEYS } from "../../data/config";
import 'fa-icons';

import AppLogoElement from './app-logo-element';

export default class HeaderElement extends navigator(LitElement) {
    
    /**
     * Returns styles specifically related to this component
     */
    static get styles() {
        return [
            globalCss,
            css`
            :host {
                display: block;
                position: sticky;
                top: 0;
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

            .sidenav ul {
                list-style: none;
                min-width: 250px;
            }

            .sidenav ul li{
                padding: 10px;
            }

            .sidenav .icon {
                vertical-align: middle;
                margin-right: 6px;
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
                flex-wrap: wrap;
            }

            .menu {
                font-size:30px;
                cursor:pointer;
                color: #fff;
            }

            .logo {
                margin-left: 10px;
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

            .lion-input-search {
                width: 50%;
                margin-left: 20px;
            }

            .lion-search-btn {
                margin-left: 10px;
                cursor: pointer;
            }

            @media screen and (max-height: 450px) {
                .sidenav {padding-top: 15px;}
                .sidenav a {font-size: 18px;}
            }

            @media only screen and (min-width: 320px) and (max-width: 450px) {
                .lion-input-search {
                    margin-left: 0px;
                    width: 100%;
                    margin-top: 10px;
                }

                .navbar-brand .title {
                    font: 1.2em Impact;
                    text-decoration: none;
                    color: var(--orange-bg-color);
                    margin-left: 1px;
                    width: 60px;
                }

                .logo {
                    margin-left: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .input-group__container > .input-group__input ::slotted(.form-control) {
                    flex: 1 1 auto;
                    margin: 0px;
                    font-size: 100%;
                    width: 159px;
                } 
            }
        `];
    }

    /**
     * Open side navigation bar
     * @param {*} e Event object
     */
    openDrawer(e) {
        this.shadowRoot.getElementById('drawer').style.width = "250px";
        e.preventDefault();
    }

    /**
     * Open side navigation bar
     * @param {*} e Event Object
     */
    closeDrawer(e) {
        this.shadowRoot.getElementById('drawer').style.width = "0";
    }

    /**
     * Component lifecycle method
     */
    firstUpdated() {
        const urlParams = new URLSearchParams(location.search);
        const query = urlParams.get('q');

        this.shadowRoot.getElementById('searchInput').value = query;
    }

    /**
     * 
     * @param {*} e Event Object
     */
    searchClick(e) {
        this.navigate('search?q=' + this.shadowRoot.getElementById('searchInput').value);
        singletonManager.get(OBJECT_KEYS.Basic_Event_Emitter).emit('start-search');
    }

    /**
     * Build component UI
     */
    render() {
        return html`
            <div id="drawer" class="sidenav"  @click="${this.closeDrawer}">
                <a href="javascript:void(0)" class="closebtn">&times;</a>

                <ul>
                    <li>
                        <nav-link href="/">
                          <fa-icon class="fas fa-home icon" color="#ffffff" size="2em"></fa-icon>Home
                        </nav-link>
                    </li>
                    <!--<li>
                        <nav-link href="/subscriptions">
                            <fa-icon class="far fa-bell icon" color="#ffffff" size="2em"></fa-icon>Favorites
                        </nav-link>
                    </li>-->
                    <li>
                        <nav-link href="/movies">
                        <fa-icon class="fas fa-film icon" color="#ffffff" size="2em"></fa-icon>Movies
                        </nav-link>
                    </li>
                    <li>
                        <nav-link href="/learning">
                        <fa-icon class="fas fa-graduation-cap icon" color="#ffffff" size="2em"></fa-icon>Learning
                        </nav-link>
                    </li>
                </ul>
            </div>
            
            <nav class="navbar">
                <span class="menu" @click="${this.openDrawer}">&#9776;</span>
                <a class="navbar-brand" href="#">
                    <app-logo-element class="logo"></app-logo-element>
                    <span class="title">Video Galaxy</span>
                </a>
                <lion-input id="searchInput" class="lion-input-search">
                    <div slot="suffix" class="lion-search-btn">
                        <lion-button @click=${this.searchClick}><fa-icon class="fas fa-search icon" color="#ffffff" size="2em"></fa-icon></lion-button>
                    </div>
                </lion-input>
            </nav>
        `;
    }
}
customElements.define('header-element', HeaderElement);