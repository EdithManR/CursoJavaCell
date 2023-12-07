import { html, css, LitElement } from 'lit';


export class PropertiesComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--properties-component-text-color, #000);
    }
    button{
      background-color: darkblue;
      color:white;
      font-size: 18px;
      line-height:130%;
    }
  `;

  static properties = {
    prop1: { type: String, reflect:true },
    prop2: { type: Number, reflect:true },
    prop3: { type: Boolean, reflect:true },
    prop4: { type: Array, reflect:true },
    prop5: { type: Object, reflect:true },
  };

  constructor() {
    super();
    this.prop1 = "";
    this.prop2 = 0;
    this.prop3 = false;
    this.prop4 = [ ];
    this.prop5 = { };
  }

  changeAttributes(){
    let randy = Math.floor(Math.random()*10);
    let myBool = this.getAttribute('prop3');
  
    this.setAttribute('prop1', randy.toString());
    this.setAttribute('prop2', randy.toString());
    this.setAttribute('prop3', myBool? '': null);
    this.setAttribute('prop4', JSON.stringify([...this.prop4, randy]));
    this.setAttribute('prop5', JSON.stringify(Object.assign( {},this.prop5,{[randy]: randy} )));
  
    this.requestUpdate();
  }

  changeProperties(){
    let randy = Math.floor(Math.random()*10);
    let myBool = this.prop3;
  
    this.prop1 = randy.toString();
    this.prop2 = randy;
    this.prop3 = !myBool;
    this.prop4 = [...this.prop4, randy];
    this.prop5 = Object.assign({}, this.prop5, {[randy]:randy});
  }

  attributeChangedCallback(name, oldVal, newVal){
    console.log('attribute change: ', name, newVal);
    super.attributeChangedCallback(oldVal, name, newVal);
  }

  updated(changedProperties){
    changedProperties.forEach((oldVal, propName) =>{
      console.log(`${propName} changed oldValue:  ${oldVal}`);
    });
  }

  render() {
    return html`
    <p>Prop1: ${this.prop1}    </p>
    <p>Prop2: ${this.prop2}    </p>
    <p>Prop3: ${this.prop3}    </p>

    <p>  Prop4 : ${this.prop4.map((item, index) =>
    html`<span>[${index}]: ${item} &nbsp;</span>`) }  </p>
    <p> Prop5:
    ${Object.keys(this.prop5).map((item) =>
      html`<span>${item}: ${this.prop5[item]}&nbsp;</span>`)}
    </p>
    <button @click="${this.changeProperties}"> change properties </button>
    <button @click="${this.changeAttributes}"> change attributes </button>
    `;
  }
}

customElements.define('properties-component', PropertiesComponent);

