import { LitElement, html, css } from 'lit-element';
import '@lion/input/lion-input.js';
import { router } from 'lit-element-router';
import { LionButton } from '@lion/button';

import HeaderElement from "./src/components/app/header-element";
import "./src/components/app/nav-link-element";
import "./src/components/app/main-wrapper-element";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class AppRoot extends router(LitElement) {
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
        name: "info",
        pattern: "info"
      },
      {
        name: "user",
        pattern: "user/:id"
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
      <main-wrapper active-route=${this.route}>
        <h1 route="home">
          <!-- <lion-button @click="${ev => console.log('clicked/spaced/entered', ev)}">
            Click Me!
          </lion-button> -->
        </h1>
        <h1 route="info">Info ${this.query.data}</h1>
        <h1 route="user">User ${this.params.id}</h1>
        <h1 route="not-found">Not Found *</h1>
      </main-wrapper>
    `;
  }
}

window.customElements.define('app-root', AppRoot);