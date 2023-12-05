import { html, css, LitElement } from 'lit-element';

export class ListElementent extends LitElement {
  static properties (){
    return{
      items:{ type:Array }
    };
  }


  render() {
    return html`
      <ul>
        ${this.items.map(item => html`<li> ${item}</li>`)}
      </ul>
    `;
  }
}
