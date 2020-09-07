import { LitElement, html, css } from 'lit-element';
import { singletonManager } from 'singleton-manager';

import { OBJECT_KEYS, DEFAULT_CONTENTS_PARAMS } from "../../data/config";

export default class LearningElement extends LitElement {

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
         this.learningData = await this.ytApi.loadContents(DEFAULT_CONTENTS_PARAMS.learning);
         super.connectedCallback();
     }

    render() {
        return html`<video-grid-element snippet='${JSON.stringify(this.learningData)}' heading='Learning tutorials'></video-grid-element>`;
    }
}
customElements.define('learning-element', LearningElement);