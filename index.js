import { LitElement, html, css } from 'lit-element';
import '@lion/input/lion-input.js';
import { router } from 'lit-element-router';
import { LionButton } from '@lion/button';
import { singletonManager } from 'singleton-manager';

import HeaderElement from "./src/components/app/header-element";
import HomeContentsElement from "./src/components/home/home-contents-element";
import YtDialogueApi from "./src/data/api/ytube-api";
import "./src/components/app/nav-link-element";
import "./src/components/app/main-wrapper-element";
import { OBJECT_KEYS } from "./src/data/config";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class AppRoot extends router(LitElement) {

  static get styles() { 
    return css`
      .container {
        padding:14px;
      }
    `;
  }
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
      data: { type: Object }
    };
  }

  static get routes() {
    return [
      {
        name: "home",
        pattern: "",
        data: { title: "Home" }
      },
      {
        name: "subscriptions",
        pattern: "subscriptions"
      },
      {
        name: "movies",
        pattern: "movies"
      },
      {
        name: "learning",
        pattern: "learning"
      },
      {
        name: "not-found",
        pattern: "*"
      }
    ];
  }

  constructor() {
    super();
    this.route = "";
    this.params = {};
    this.query = {};
    this.data = {};

    this.init();
  }

  init() {
    singletonManager.set(OBJECT_KEYS.Youtube_Data_Api, new YtDialogueApi());
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
    console.log(route, params, query, data);
  }

  render() {
    return html`
      <header-element></header-element>
      <div class="container">
        <main-wrapper active-route=${this.route}>
          <h1 route="home">
            <home-contents-element></home-contents-element>
          </h1>
          <h1 route="subscriptions">subscriptions</h1>
          <h1 route="movies">movies</h1>
          <h1 route="learning">learning</h1>
        </main-wrapper>
    </div>
    `;
  }
}

window.customElements.define('app-root', AppRoot);