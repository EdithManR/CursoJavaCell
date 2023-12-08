import { html, css, LitElement } from 'lit';

export class LitelementLifeCycle extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--litelement-life-cycle-text-color, #000);
    }
  `;
    static get properties(){
      return{
        title: {type: String},
        icon: {type: String}
      }
        
    };
    


  constructor() {
    super();
    this.title = 'Mi titulo';
    this.icon = undefined;
  }



  render() {
    console.log('render');
    return html`
      <h1>Título: ${this.title} </h1>
      <h3> Icon: ${this.icon}</h3>
    `;
  }

_enqueueUpdate(){
  console.log('_enqueueUpdate called');
  const result =super._enqueueUpdate();
  console.log('_enqueueUpdate returns' + result);
  return result;
}
}
customElements.define('litelement-life-cycle', LitelementLifeCycle);