import { LitElement, html  } from 'lit';

export class ObservedAttribute extends LitElement{
  static get properties() {
    return {
    myProp: { attribute: true },
    theProp: { attribute: false }, 
    otherProp: { attribute: 'other-prop'},
    };
  };
  constructor(){
  super();
    this.myProp = "myProp";
    this.theProp = "theProp";
    this.otherProp = "otherProp";
  }
  changeAttributes(){
    let randomString = Math.floor(Math.random()*100).toString();

    this.setAttribute('myProp', 'myProp' + randomString);
    this.setAttribute('theProp', 'theProp' + randomString);
    this.setAttribute('otherProp', 'other-prop' + randomString);
    this.requestUpdate();
  }

  attributeChangedCallback(name, oldValue, newValue){
    console.log('atributo cambiado: ', name, newValue);
    super.attributeChangedCallback( name, oldValue, newValue );
  }

  updated(changeProp){
    changeProp.forEach( (oldValue,propName) => {
      console.log(`${propName} cambio al anterior valor ${oldValue}`);
    });
  }

  render(){
    return html`
    <p> myProp : ${this.myProp} </p>
    <p> theProp : ${this.theProp} </p>
    <p> otherProp : ${this.otherProp}</p>
    <button @click="${this.changeAttributes}"> Cambiar atributos </button>
    `;
  }  
}

customElements.define('observed-attribute', ObservedAttribute);