import { html, css, LitElement } from 'lit';

import { classMap } from '../node_modules/lit-html/directives/class-map';
import { styleMap } from '../node_modules/lit-html/directives/style-map';

export class DynamicStyle extends LitElement {
  static get properties() {
    return {
      classes: { type:Object },
      styles: { type:Object}
    };
  }

  static get styles (){
    return css `
    .mydiv { background-color:blue; }
    .someclass { border: 1px solid red; }
    `;
  }

  constructor() {
    super();

    this.classes = { mydiv: true, someclass: true };
    this.styles = { color:'green', fontFamily: 'Roboto' };
  }

 

  render() {
    return html`
      <div class=${classMap(this.classes)} style= ${styleMap(this.styles)}>
      
       Some Content
      </div>
    `;
  }
}
