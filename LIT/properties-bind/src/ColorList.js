import { html, css, LitElement } from 'lit-element';
import './ListElement';

export class ColorList extends LitElement {

  static properties (){
    return{
      colors:{ type:Array }
    };
  }

constructor(){
  super();
  this.colors = ['Rojo', 'Verde', 'Amarillo', 'Azul'];
}
  render() {
    return html`
      <list-element .items="${this.colors}"></list-element>
    `;
  }
}
