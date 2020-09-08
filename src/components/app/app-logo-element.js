import { LitElement, html, css } from 'lit-element';

/**
 * Application logo component
 */
export default class AppLogoElement extends LitElement {

    /**
     * Returns styles specifically related to this component
     */
    static get styles() {
        return css`
            :host {
                display: inline-block;
            }
            .triangle {
                position: relative;
                width: 0px;
                border-bottom: 28px solid #FF6200;
                border-right: 17px solid transparent;
                border-left: 17px solid transparent;
                transform: rotate(90deg);
            }
            .triangle .empty {
                position: absolute;
                top: 6px;
                left: -10px;
                width: 0px;
                border-bottom: 18px solid white;
                border-right: 10px solid transparent;
                border-left: 10px solid transparent;
            }
        `;
    } 

    render() {
        return html`
        <div class="triangle">
            <div class="empty"></div>
        </div>`;
    }
}
customElements.define('app-logo-element', AppLogoElement);