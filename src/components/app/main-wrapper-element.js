import { LitElement, html } from "lit-element";
import { outlet } from "lit-element-router";

/**
 * Wrapper element for child route components
 */
//@outlet
export class MainWrapperElement extends outlet(LitElement) {

  /**
   * Build component UI
   */
  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define("main-wrapper", MainWrapperElement);