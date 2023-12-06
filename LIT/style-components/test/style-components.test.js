import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/herencia-elemento.js';

describe('StyleComponents', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<herencia-elemento> </herencia-elemento>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('Herencia de estilos');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
