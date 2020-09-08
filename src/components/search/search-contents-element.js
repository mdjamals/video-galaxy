import { LitElement, html, css } from 'lit-element';
import { singletonManager } from 'singleton-manager';
import { OBJECT_KEYS } from "../../data/config";

/**
 * Components to show search result.
 */
export default class SearchContentsElement extends LitElement {

    constructor() {
        super();
        this.eventEmitter = singletonManager.get(OBJECT_KEYS.Basic_Event_Emitter);
        this.eventEmitter.subscribe('start-search', this.search.bind(this));
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
     * Retrieve search result based on user input
     */
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
        }).catch(e => {
            
        });
    }

    /**
     * Search for video data and and update UI
     */
    async search() {
        await this.requestData().catch(e => {
            
        });
        this.requestUpdate();
    }

    /**
     * Component lifecycle event
     * This will load data based on querystring parameter on page refresh
     */
    async connectedCallback() {
        await this.requestData();
        super.connectedCallback();
    }

    /**
     * Build component UI
     */
    render() {
        return html`<video-grid-element snippet='${JSON.stringify(this.data)}' heading='Search'></video-grid-element>`;
    }
}
customElements.define('search-contents-element', SearchContentsElement);