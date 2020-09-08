import { LitElement, html, css } from "lit-element";
import { navigator } from "lit-element-router";

/**
 * Link to provide navigation to specific route
 */
//@navigator
export class NavLinkElement extends navigator(LitElement) {

  constructor() {
    super();
    this.href = "";
  }

  /**
   * Returns properties of element.
   */
  static get properties() {
    return {
      href: { type: String }
    };
  }

  /**
  * Returns styles specifically related to this component
  */
  static get styles() {
    return css`
      a {
        margin: 5px;
        text-decoration: none;
        color: #fff;
      }
    `;
  }
  
  /**
   * Build component UI
   */
  render() {
    return html`
      <a href="${this.href}" @click="${this.linkClick}">
        <slot></slot>
      </a>
    `;
  }

  /**
   * Event handler on link element
   * @param {*} event Click event handler
   */
  linkClick(event) {
    event.preventDefault();
    this.navigate(this.href);
  }
}

customElements.define("nav-link", NavLinkElement);