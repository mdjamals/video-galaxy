import { LitElement, html, css, TemplateResult } from 'lit-element';
import { singletonManager } from 'singleton-manager';

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
            }

            .thumb img {
                max-width: 320px;
                max-height: 180px;
            }

            .thumb .title {
                margin-right: 5px;
                font-weight: 600;
            }

            .thumb .channelTitle {
                font-size: 0.8em;
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
                        items.map((item) => 
                            html`<div class="thumb">
                                    <section>
                                        <img alt="${item.snippet.title}" src="${item.snippet.thumbnails.medium.url}">
                                        <div class="title">${item.snippet.title}</div>
                                    </section>
                                    <div class="channelTitle">${item.snippet.channelTitle}</div>
                            </div>
                        `)
                    }
                </section>
            </section>`;
        }
        return templateResult;
    }
}
customElements.define('video-grid-element', VideoGridElement);