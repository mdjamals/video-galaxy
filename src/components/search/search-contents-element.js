import { LitElement, html, css } from 'lit-element';
import { singletonManager } from 'singleton-manager';
import { OBJECT_KEYS, DEFAULT_CONTENTS_PARAMS } from "../../data/config";


export default class SearchContentsElement extends LitElement {

    constructor() {
        super();
        this.eventEmitter = singletonManager.get(OBJECT_KEYS.Basic_Event_Emitter);
        this.eventEmitter.subscribe('start-search', this.search);
        this.ytApi = singletonManager.get(OBJECT_KEYS.Youtube_Data_Api);
    }

    static get styles() {
        return css`
            :host {
                display: block;
            }
        `;
    }

    async requestData() {
        const urlParams = new URLSearchParams(location.search);
        const query = urlParams.get('q');

        this.data = await this.ytApi.loadContents({
            "part": [
              "snippet"
            ],
            "maxResults": 20,
            "q": query,
            "safeSearch": "strict"
        });
    }

    async search() {
        await this.requestData();
        this.requestUpdate();
    }

    async connectedCallback() {
        await this.requestData();
        super.connectedCallback();
    }

    updated(changedProperties) { 
        console.log('updated ')
    }

    render() {
        return html`<video-grid-element snippet='${JSON.stringify(this.data)}' heading='Search'></video-grid-element>`;
    }
}
customElements.define('search-contents-element', SearchContentsElement);