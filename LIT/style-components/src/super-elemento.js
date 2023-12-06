import { html, css, LitElement } from 'lit-element';


export class SuperElemento extends LitElement {
  static get styles(){
    return css `
      button{
        width:300px;
        font-style: italic;
      }
    `;
  }
  render() {
    return html`
      <h1>Herencia de estilos</h1>
        <button>Click</button>
    `;
  }
}

customElements.define('super-elemento', SuperElemento);