import { LitElement, html, css } from 'lit-element';
import { singletonManager } from 'singleton-manager';

import { OBJECT_KEYS, DEFAULT_CONTENTS_PARAMS } from "../../data/config";

export default class MoviesContentsElement extends LitElement {
    
    constructor() {
        super();
        this.ytApi = singletonManager.get(OBJECT_KEYS.Youtube_Data_Api);
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    } 

    async connectedCallback() {
        this.moviesData = await this.ytApi.loadContents(DEFAULT_CONTENTS_PARAMS.movies);
        super.connectedCallback();
    }

    render() {
        console.log('render movies...', this.moviesData);
        return html`<video-grid-element snippet='${JSON.stringify(this.moviesData)}' heading='Movies'></video-grid-element>`;
    }
}
customElements.define('movies-contents-element', MoviesContentsElement);