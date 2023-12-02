import { LitElement, html , css} from 'lit-element';

export class ArraysCondicionales extends LitElement{
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
      myString: { type: String },
      myArray: { type:Array },
      myBool: { type: Boolean }
    };
  }

  constructor(){
    super();
    this.title = 'Here there';
    this.counter = 5 ;

    this.myString = 'Hello World';
    this.myArray = [ 'an','array','of', 'test', 'data' ];
    this.myBool = true;
  }
  __increment(){
    this.counter += 1;
  }
  __changeStatus(){
    this.myBool ?
    this.myBool =false :
    this.myBool = true
  }

  render() {
    return html `
      
      <h2> ${this.title} Nr. ${this.counter} ! </h2>
      <button @click=${this.__increment}>Incrementar </button>
      <hr>
      <p> array loops and conditionals.</p>
      <p> ${this.myString}</p>
      <ul>
        ${this.myArray.map(i => html`<li> ${i}</li>`)}
      </ul>
      <button @click=${this.__changeStatus}>Cambiar status</button>
      ${this.myBool?
        html`<p> Render some HTML if myBool is true </p>`:
        html`<p style="color:red;">Render some other HTML if my Bool is false </p>`}
      `;
  }
}

customElements.define('arrays-condicionales', ArraysCondicionales);