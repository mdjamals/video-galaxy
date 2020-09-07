import { LitElement, html, css } from "lit-element";
import { singletonManager } from "singleton-manager";

import VideoGridElement from "../app/video-grid-element";
import { OBJECT_KEYS } from "../../data/config";


export default class HomeContentsElement extends LitElement {

    #recommendedData;
    #ytApi;

    constructor() {
        super();
        this.#ytApi = singletonManager.get(OBJECT_KEYS.Youtube_Data_Api);
    }

    static get properties() { 
        return { 
            data: { type: Object }
        };
    }

    static styles = css`
        :host {
            display: block;
        }
    `;

    // async firstUpdated() {
    //     this.#recommendedData = await this.#ytApi.loadContents({
    //         "part": [
    //             "snippet"
    //         ],
    //         "maxResults": 20,
    //         "safeSearch": "strict"
    //     });
    //     super.firstUpdated();
    // }
    async connectedCallback() {
        this.#recommendedData = await this.#ytApi.loadContents({
            "part": [
              "snippet"
            ],
            "maxResults": 20,
            "safeSearch": "strict"
        });
        super.connectedCallback();
    }

    render() {
        console.log('render home...', this.#recommendedData);
        return html`<video-grid-element snippet='${JSON.stringify(this.#recommendedData)}' heading='Pick for you'></video-grid-element>`;
    }
}
customElements.define('home-contents-element', HomeContentsElement);