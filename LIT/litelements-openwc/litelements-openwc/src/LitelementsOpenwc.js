import { html, css, LitElement } from 'lit';

export class LitelementsOpenwc extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--litelements-openwc-text-color, #000);
    }
  `;

  static properties = {
    header: { type: String },
    counter: { type: Number },
  };

  constructor() {
    super();
    this.header = 'Hey there';
    this.counter = 9;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.header} Num. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
