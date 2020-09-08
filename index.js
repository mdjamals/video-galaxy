import { LitElement, html, css } from 'lit-element';
import '@lion/input/lion-input.js';
import { router } from 'lit-element-router';
import { LionButton } from '@lion/button';
import { singletonManager } from 'singleton-manager';

import HeaderElement from "./src/components/app/header-element";
import HomeContentsElement from "./src/components/home/home-contents-element";
import MoviesContentsElement from "./src/components/movies/movies-contents-element";
import SearchContentsElement from './src/components/search/search-contents-element';
import LearningElement from './src/components/learning/learning-element';
import YtDialogueApi from "./src/data/api/ytube-api";
import "./src/components/app/nav-link-element";
import "./src/components/app/main-wrapper-element";
import RouteDataResolver from './src/data/controllers/route-data-resolver';
import BasicEventEmitter from './src/data/controllers/basic-event-emitter';
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

      footer {
        width: 100%;
        position: fixed;
        bottom: 0;
        /* padding: 20px 30px; */
        display: flex;
        flex-direction: row;
        background-color: #ccc;
        opacity: 0.8;
        padding-right: 20px;
        justify-content: center;
        padding: 20px 0;
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
        name: "search",
        pattern: "search"
      },
      {
        name: "not-found",
        pattern: "*"
      }
    ];
  }

  constructor() {
    super();
    this.init();
  }

  init() {
    singletonManager.set(OBJECT_KEYS.Youtube_Data_Api, new YtDialogueApi());
    singletonManager.set(OBJECT_KEYS.Route_Data_Resolver, new RouteDataResolver());
    singletonManager.set(OBJECT_KEYS.Basic_Event_Emitter, new BasicEventEmitter());

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
  }

  render() {
    return html`
      <header-element></header-element>
      <div class="container">
        <main-wrapper active-route=${this.route}>
          ${
            this.route === "home" ? html`<home-contents-element route="home"></home-contents-element>` : html ``
          }
          
          <h1 route="subscriptions">subscriptions</h1>
          ${
            this.route === "movies" ? html`<movies-contents-element route="movies"></movies-contents-element>` : html ``
          }
          ${
            this.route === "learning" ? html`<learning-element route="learning"></learning-element>` : html ``
          }
          ${
            this.route === "search" ? html`<search-contents-element route="search"></search-contents-element>` : html ``
          }
        </main-wrapper>
    </div>
    <footer>Application designed and developed by Roshan N</footer>
    `;
  }
}

window.customElements.define('app-root', AppRoot);