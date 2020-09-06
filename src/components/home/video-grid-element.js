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

            .thumb-row {
                display: flex;
                flex-wrap: wrap;
            }

            .thumb {
                margin-right: 10px;
            }
    `};

    render() {
        console.log(`video snippets...`, this.snippet);
        let { items } = this.snippet.result;
        let templateResult = html`No contents to show!`;

        if(!!items) {
            templateResult = html`
            <section>
                <header><h4>${this.heading}</h4></header>
                <section class="thumb-row">
                    ${
                        items.map((item) => 
                            html`<div class="thumb"><img src="${item.snippet.thumbnails.medium.url}"></div>
                        `)
                    }
                </section>
            </section>`;
        }
        return templateResult;
    }
}
customElements.define('video-grid-element', VideoGridElement);