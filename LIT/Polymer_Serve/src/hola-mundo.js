import { LitElement, html, css } from 'lit';

export class HolaMundo extends LitElement {
    
    static get styles() {
      return css`
        :host {
          display: block;
        },
        p{
          font-size:40px;
        }
      `;
    }

    static get properties() {
        return {
            gael: { type: String },
        };
    }

    render() {
        return html`<p>Bienvenidos estamos corriendo <br>el servidor de polymer serve</p>`;
    }
}
customElements.define('hola-mundo', HolaMundo);