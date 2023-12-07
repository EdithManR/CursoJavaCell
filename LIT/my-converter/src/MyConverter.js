
import { html, css, LitElement } from 'lit';

export class MyConverter extends LitElement {
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

  static get properties () {
    return{
      myProp: {
        reflect: true,
        converter: {
          toAttribute(value){
          console.log('myProp\'s toAttribute.');
          console.log('Processing:', value, typeof(value));
          let retVal = String(value);
          console.log('Returning:', retVal, typeof(retVal));
          return retVal;
          },
          fromAttribute(value){
            console.log('myProp\'s fromAttribute.');
            console.log('Processing: ', value, typeof(value));
            let retVal = Number(value);
            console.log('Returning: ', retVal, typeof(retVal));
            return retVal;
          }
        }
      },

      theProp: {
        reflect: true,
        converter(value){
          console.log('theProp\'s converter.');
          console.log('Processing:', value, typeof(value));

          let retVal = Number(value);
          console.log('Returning:', retVal, typeof(retVal));
          return retVal;
        }},
    }
  };

  changeAttributes(){
    let randomString = Math.floor(Math.random()*100).toString();
    this.setAttribute('myprop', 'myprop ' + randomString);
    this.setAttribute('theprop', 'theprop ' + randomString);
    this.requestUpdate();
  }
  changeProperties(){
    let randomString = Math.floor(Math.random()*100).toString();
    this.myProp = 'myProp ' + randomString;
    this.theProp ='theProp ' + randomString;
  }
  constructor() {
    super();
    this.myProp = 'myProp';
    this.theProp = 'theProp';
  }

  attributeChangedCallback(name, oldval, newval){
    //console.log('attribute change: ', name, newval);
    super.attributeChangedCallback(name, oldval, newval);
  }


  render() {
    return html`
    <p>myProp: ${this.myProp}  tipo: ${typeof(this.myProp)}  </p>
    <p>theProp: ${this.theProp} tipo: ${typeof(this.theProp)}   </p>
    
    <button @click="${this.changeProperties}"> change properties </button>
    <button @click="${this.changeAttributes}"> change attributes </button>
    `;
  }
}

customElements.define('my-converter', MyConverter);
