import { LitElement, html, css } from 'lit';

class ShadowTreeStyle extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    * {
      color: darkblue;
    }
    p {
      font-family: Verdana;
    }
    .myclass {
      margin: 50px;
    }
    #main {
      padding: 30px;
    }
    h1 {
      font-size: 4.2em;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <p>lorem ipsum dolor sit, amet constructor ........</p>
      <p class="myclass">parrafor 1</p>
      <p id="main">Parrafo 2</p>
      <h1>T I T U L O</h1>
    `;
  }
}

customElements.define('shadow-tree-style', ShadowTreeStyle);
