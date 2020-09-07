import { LitElement, html, css, TemplateResult } from 'lit-element';
import { singletonManager } from 'singleton-manager';
import {repeat} from 'lit-html/directives/repeat.js';

export default class VideoGridElement extends LitElement {

    constructor() {
        super();
    }

    static get properties() { 
        return { 
            snippet: { type: Object },
            heading: { type: String }
        };
    }

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
    `};

    render() {
        console.log(`video snippets...`, this.snippet);
        let { items } = this.snippet.result;
        let templateResult = html`No contents to show!`;

        if(!!items) {
            templateResult = html`
            <section>
                <header>
                ${this.heading}
                </header>
                <section class="thumb-row">
                    ${
                        repeat(items, (item) => item.id.videoId, (item, index) => html`<a class="thumb" target="_blank" href="https://www.youtube.com/watch?v=${item.id.videoId}">
                                    <section>
                                        <img alt="${item.snippet.title}" src="${item.snippet.thumbnails.medium.url}">
                                        <div class="title">${item.snippet.title}</div>
                                    </section>
                                    <div class="channelTitle">${item.snippet.channelTitle}</div>
                    </a>
                        `)
                    }
                </section>
            </section>`;
        }
        return templateResult;
    }
}
customElements.define('video-grid-element', VideoGridElement);