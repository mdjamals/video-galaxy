import { LitElement, html, css } from "lit-element";
import { singletonManager } from "singleton-manager";

import VideoGridElement from "../app/video-grid-element";
import { OBJECT_KEYS, DEFAULT_CONTENTS_PARAMS } from "../../data/config";

/**
 * Home element for landing page
 */
export default class HomeContentsElement extends LitElement {

    constructor() {
        super();
        this.ytApi = singletonManager.get(OBJECT_KEYS.Youtube_Data_Api);
    }

    /**
     * Return object
     */
    static get properties() { 
        return { 
            data: { type: Object }
        };
    }

    /**
     * Returns styles used for component
     */
    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    } 

    /**
     * Lifecycle callback method
     */
    async connectedCallback() {
        this.recommendedData = await this.ytApi.loadContents(DEFAULT_CONTENTS_PARAMS.home);
        super.connectedCallback();
    }

    render() {
        return html`<video-grid-element snippet='${JSON.stringify(this.recommendedData)}' heading='Pick for you'></video-grid-element>`;
    }
}
customElements.define('home-contents-element', HomeContentsElement);