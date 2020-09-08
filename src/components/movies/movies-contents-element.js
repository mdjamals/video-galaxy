import { LitElement, html, css } from 'lit-element';
import { singletonManager } from 'singleton-manager';

import { OBJECT_KEYS, DEFAULT_CONTENTS_PARAMS } from "../../data/config";

/**
 * Component to load movies video gallery
 */
export default class MoviesContentsElement extends LitElement {
    
    constructor() {
        super();
        this.ytApi = singletonManager.get(OBJECT_KEYS.Youtube_Data_Api);
    }

    /**
     * Returns styles specifically related to this component
     */
    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    } 

    /**
     * Component lifecycle method
     */
    async connectedCallback() {
        try {
        this.moviesData = await this.ytApi.loadContents(DEFAULT_CONTENTS_PARAMS.movies);
        }
        catch {
            this.requestUpdate();
        }
        super.connectedCallback();
    }

    /**
     * Build component UI
     */
    render() {
        return html`<video-grid-element snippet='${JSON.stringify(this.moviesData)}' heading='Movies'></video-grid-element>`;
    }
}
customElements.define('movies-contents-element', MoviesContentsElement);