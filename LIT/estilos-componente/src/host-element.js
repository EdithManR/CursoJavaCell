import { LitElement, html, css } from 'lit-element';


export class HostElement extends LitElement {


  static get styles() {
    return css`
    /*Selects the host*/
    :host {
      display: inline-block;
      background-color:LightSalmon;
      
    }
    :host([hidden]){
      display:inline-block;
    }
    /* Selects the host element if it has class "blue" */
    :host(.blue){
      background-color:LightSalmon;
      color:blue;
    }
    p{
      font-family: fantasy;
    }`;
  }

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
        <p>Lorem ipsum dolor sit, amet consectetur .......</p>
    `;
  }
}

customElements.define('host-element', HostElement);