import { LitElement, html, css } from 'lit-element';
import { singletonManager } from 'singleton-manager';

import { OBJECT_KEYS } from "../../data/config";

export default class MoviesContentsElement extends LitElement {

    #moviesData;
    #ytApi;

    constructor() {
        super();
        this.#ytApi = singletonManager.get(OBJECT_KEYS.Youtube_Data_Api);
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    } 

    async connectedCallback() {
        this.#moviesData = await this.#ytApi.loadContents({
            "part": [
              "snippet"
            ],
            "maxResults": 20,
            "q": "marvel's movies",
            "safeSearch": "strict"
        });
        super.connectedCallback();
    }

    render() {
        console.log('render movies...', this.#moviesData);
        return html`<video-grid-element snippet='${JSON.stringify(this.#moviesData)}' heading='Movies'></video-grid-element>`;
    }
}
customElements.define('movies-contents-element', MoviesContentsElement);