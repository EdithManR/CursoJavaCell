import { LitElement, html , css} from 'lit-element';

export class LitelementTemplates extends LitElement{
  static get styles(){
    return css `
    :host{
      display:block;
      padding:25px;
      color:var(--litelement-templates-text-color, #369933);
    }
    `;
  }
  static get properties (){
    return{
      title: {type: String},
      counter: { type: Number },
    };
  }

  constructor(){
    super();
    this.title = 'Hola a todos';
    this.counter = 5 ;
  }
  __increment(){
    this.counter += 1;
  }
  __decrement(){
    this.counter -= 1;
  }
  render() {
    return html `
      <!--<p> template content </p>-->
      <h2> ${this.title} Hay ${this.counter} ! </h2>
      <button @click=${this.__increment}>Incrementar </button>
      <button @click=${this.__decrement}>Disminuir </button>
      `;
  }
}

customElements.define('litelement-templates', LitelementTemplates);