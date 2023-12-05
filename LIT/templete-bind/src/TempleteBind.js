import { html, css, LitElement } from 'lit';

export class TempleteBind extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--templete-bind-text-color, #000);
    }
  `;

 static get properties(){
   return{
     prop1: {type: String},
     prop2: {type: String},
     prop3: {type: Boolean},
     prop4: {type:String}
   };
 }

  constructor() {
    super();
    this.header = 'Hey there';
    this.counter = 5;
    this.prop1='text binding';
    this.prop2 ='mydiv';
    this.prop3 = true;
    this.prop4 ='pie';
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <!-- <h2>${this.header} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button> -->
      <!--Text binding -->
      <div>${this.prop1}</div>

      <!--atributo binding -->
      <div id="${this.prop2}">atribute binding</div>

      <!-- boolean attribute binding -->
      <div>
      boolean attribute binding
      <input type="text" ?disabled="${this.prop3}"/>
      </div>
      
      <!-- property binding -->
      <div> 
      property binding
      <input type="text" .value="${this.prop4}"/>
      </div>

      <!--event handler binding -->
      <div> event handler binding
        <button @click="${this.clickHandler}"> click </button>
      </div>
    `;
  }
  clickHandler(e){
    console.log(e.target);
  }
}
