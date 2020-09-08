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
        const heading = el.shadowRoot.querySelectorAll('.heading').innerText;
        assert(heading === 'Movies');
    });
});