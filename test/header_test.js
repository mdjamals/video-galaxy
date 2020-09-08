import HeaderElement from '../src/components/app/header-element';
import {expect, fixture, html, unsafeStatic} from '@open-wc/testing';

const assert = chai.assert;

suite('Header element test', () => {
    test('Header element should be able to define', () => {
        const el = document.createElement(`header-element`);
        assert.instanceOf(el, HeaderElement);
    });

    test('header should have app drawer', async () => {
        const el = await fixture(html`<header-element></header-element>`);
        const sideBar = el.shadowRoot.querySelector('#drawer');
        assert.instanceOf(sideBar, HTMLDivElement);
    });

    test('side navigation drawer open on menu click', async () => {
        const el = await fixture(html`<header-element></header-element>`);
        const menu = el.shadowRoot.querySelector('.menu');
        
        menu.click();
        await el.updateComplete;

        const sideBar = el.shadowRoot.querySelector('#drawer');
        assert.equal(sideBar.style.width, "250px");
    });

    test('side navigation drawer should close', async () => {
        const el = await fixture(html`<header-element></header-element>`);
        const menu = el.shadowRoot.querySelector('.menu');
        
        menu.click();
        await el.updateComplete;

        const closeBtn = el.shadowRoot.querySelector('.closebtn');
        closeBtn.click();
        await el.updateComplete;

        const sideBar = el.shadowRoot.querySelector('#drawer');
        assert.equal(sideBar.style.width, "0px");
    });
  
});