import VideoGridElement from '../src/components/app/video-grid-element';
import { mockVideoRes } from './mock-data';
import {expect, fixture, html, unsafeStatic} from '@open-wc/testing';

const assert = chai.assert;

suite('video grid element test', () => {
    test('video grid should be able to define', () => {
        const el = document.createElement(`video-grid-element`);
        assert.instanceOf(el, VideoGridElement);
    });

    test('video grid should render video thumbnails', async () => {
        const el = await fixture(html`<video-grid-element snippet='${JSON.stringify(mockVideoRes)}' heading='Movies'></video-grid-element>`);
        await el.updateComplete;
        const thumbCount = el.shadowRoot.querySelectorAll('.thumb').length;
        assert(thumbCount === 20);
    });

    test('video grid should render heading', async () => {
        const el = await fixture(html`<video-grid-element snippet='${JSON.stringify(mockVideoRes)}' heading='Movies'></video-grid-element>`);
        await el.updateComplete;
        const heading = el.shadowRoot.querySelector('header').innerText;
        assert(heading === 'Movies');
    });

    test('video grid should able to error message in case of any failure', async () => {
        const el = await fixture(html`<video-grid-element heading='Movies'></video-grid-element>`);
        await el.updateComplete;
        assert.shadowDom.equal(
            el,
            `<div class="no-search">
            <h3 class="error">Something went wrong!</h3>
            <small>Cause of error could be api key expired or internet connectivity!</small>
        </div>`
        );
    });
});