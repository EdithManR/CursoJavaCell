import { LitElement, html, css } from 'lit-element';

export class InputSample extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color:var(--input-sample-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      miDato: { type: String }
    };
  }

  constructor() {
    super();
    this.miDato = 'Valor de inicializaicion';
  }

  render() {
    return html`
        <p>Soy My LitElement</p>
      <my-text-input value= ${this.miDato}
        @change= "${this.inputCambiado}"></my-text-input>

        <p>El texto escrito es: ${this.miDato}</p>
        <button @click= ${this.resetTexto}>Borrar texto</button>
    `;
  }

  inputCambiado(e) {
    this.miDato = e.detail;
    console.log(this.miDato);
  }

  resetTexto(){
    this.miDato = '';
  }
}

customElements.define('input-sample', InputSample);
