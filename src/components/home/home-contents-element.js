import { LitElement, html, css } from "lit-element";
import { singletonManager } from "singleton-manager";

import VideoGridElement from "./video-grid-element";
import { OBJECT_KEYS } from "../../data/config";


export default class HomeContentsElement extends LitElement {

    #snippetData;
    #ytApi;

    constructor() {
        super();
        this.#ytApi = singletonManager.get(OBJECT_KEYS.Youtube_Data_Api);
    }

    static styles = css`
        :host {
            display: block;
        }
    `;

    async connectedCallback() {
        this.#snippetData = await this.#ytApi.loadContents();
        super.connectedCallback();
    }

    async firstUpdated() {
        // this.#snippetData = await this.#ytApi.loadContents();
        // console.log('snippetdata', this.#snippetData);
    }

    render() {
        console.log('render...', this.#snippetData);
        return html`<video-grid-element snippet='${JSON.stringify(this.#snippetData)}' heading='Recommended'></video-grid-element>`;
    }
}
customElements.define('home-contents-element', HomeContentsElement);