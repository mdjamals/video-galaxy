import { LitElement, html, css, TemplateResult } from 'lit-element';
import {repeat} from 'lit-html/directives/repeat.js';

/**
 * Element to render video thubnail grid
 */
export default class VideoGridElement extends LitElement {

    /**
     * Constructor
     */
    constructor() {
        super();
    }

    /**
     * Returns element properties
     */
    static get properties() { 
        return { 
            snippet: { type: Object },
            heading: { type: String }
        };
    }

    /**
     * Returns styles specifically related to this component
     */
    static get styles() { 
        return css`
            :host {
                display: block;
            }

            header {
                margin-bottom: 10px;
                font-size: 1.4em;
                font-weight: 600;
            }

            a {
                text-decoration: none;
                color: #2b2b2b;
            }

            .thumb-row {
                display: flex;
                flex-wrap: wrap;
            }

            .thumb {
                margin-right: 18px;
                margin-bottom: 18px;
                display: flex;
                flex-direction: column;
                max-width: 320px;
                justify-content: space-between;
                -webkit-box-shadow: 10px 10px 33px -12px rgba(0,0,0,0.75);
                -moz-box-shadow: 10px 10px 33px -12px rgba(0,0,0,0.75);
                box-shadow: 10px 10px 33px -12px rgba(0,0,0,0.75);
            }

            .thumb img {
                max-width: 320px;
                max-height: 180px;
            }

            .thumb .title {
                margin-right: 5px;
                font-weight: 600;
                padding: 0 10px;
            }

            .thumb .channelTitle {
                font-size: 0.8em;
                padding: 10px;
            }

            .no-search {
                display: flex;
                flex-direction: column;
                margin: auto;
            }

            .error {
                color: #db4141;
            }
    `}

    /**
     * Build component UI
     */
    render() {
        let templateResult = html`<div class="no-search">
                        <h3 class="error">Something went wrong!</h3>
                        <small>Cause of error could be api key expired or internet connectivity!</small>
                    </div>`;
        

        if(!!this.snippet) {
            let { items } = this.snippet.result;
            let dynamicUI = html`
                <div class="no-search">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXQpJnnPzhDYwOTr9S8quxVfMhbjcWiD9Haw&usqp=CAU">
                    <h3>No result found</h3>
                    <span>Try different keywords</span>
                </div>`;

            if(items.length > 0) {
                dynamicUI = html` ${repeat(items, (item) => item.id.videoId, (item, index) => html`<a class="thumb" target="_blank" href="https://www.youtube.com/watch?v=${item.id.videoId}">
                            <section>
                                <img alt="${item.snippet.title}" src="${item.snippet.thumbnails.medium.url}">
                                <div class="title">${item.snippet.title}</div>
                            </section>
                            <div class="channelTitle">${item.snippet.channelTitle}</div>
                    </a>
                `)}`;
            }


            templateResult = html`
            <section>
                <header>
                ${this.heading}
                </header>
                <section class="thumb-row">
                    ${ dynamicUI }
                </section>
            </section>`;
        }

        return templateResult;
    }
}
customElements.define('video-grid-element', VideoGridElement);