import { LitElement, html } from "lit-element";
import { outlet } from "lit-element-router";

//@outlet
export class MainWrapperElement extends outlet(LitElement) {
  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define("main-wrapper", MainWrapperElement);