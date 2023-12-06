import { css } from 'lit-element';
import { SuperElemento } from './super-elemento.js';

export class HerenciaElemento extends SuperElemento {
  static get styles() {
    return [
      super.styles,
      css`
        button {
          color: white;
          background-color: blue;
          font-size: 20px;
        }
      `,
    ];
  }
}
customElements.define('herencia-elemento', HerenciaElemento);
