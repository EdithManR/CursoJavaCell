import { html, css, LitElement } from 'lit';

export class EConcat extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--e-concat-text-color, #000);
    }
  `;

  static properties = {
    
    nombre: {type: String},
    email: {type: String},
    verMas: {type: Boolean},
  };

  constructor() {
    super();
    this.verMas = false;
  }



  render() {
    return html`
      

      <style>
        div{
            border: 1px solid #b5a8e4;
            padding: 10px;
            border-radius: 5px;
            display: inline-block;
            min-width: 350px;
            background-color:#eef4f8;
            box-shadow: 7px 7px 5px #b2b0b0;
          
        }
        h1 {
          font-size: 1.2em;
          font-weight: normal;
          color: #0a002e;

        }


      </style>

      <div>
        <h1>${this.nombre}</h1>
        <p><a href="#" @click="${this.toggle}" >Ver mas..</a></p>
        <br>

        ${this.verMas?
        html`Email: ${this.email}`:
        ''
      }
      </div>

      
    `;
  }

  toggle(e){
    e.preventDefault();
    this.verMas = !this.verMas;
    
  }
}
