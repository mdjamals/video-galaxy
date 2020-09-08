import AppLogoElement from '../src/components/app/app-logo-element.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;
suite('Logo test', () => {
  test('Logo should be able to define', () => {
    const el = document.createElement('app-logo-element');
    assert.instanceOf(el, AppLogoElement);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<app-logo-element></app-logo-element>`);
    assert.shadowDom.equal(
        el,
        `<div class="triangle">
            <div class="empty"></div>
        </div>`
    );
    });
});
