import { html, css, LitElement } from 'lit';

export class CustomHasChanged extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--custom-has-changed-text-color, #000);
    }
  `;

  static get properties(){
    return{
      myProp:{
        type: Number,
        hasChanged(newVal, oldVal){
          if(newVal > oldVal){
            console.log(`${newVal} > ${oldVal}. hasChanged: true.`);
            return true;
          }
          else{
            console.log(`${newVal} >= ${oldVal}. hasChanged: false.`);
            return false;
          }
        }
      }};

  }

  constructor() {
    super();
    this.myProp = 1;
  }


  render() {
    return html`
    <p> Mi Prop: ${this.myProp}</p>
    <button @click="${this.getNewVal}">Obtener nuevo valor</button>
    `;
  }
updated(){
  console.log('updated');
}
getNewVal(){
  let newVal = Math.floor(Math.random()*10);
  this.myProp = newVal;
}

}
customElements.define('custom-has-changed', CustomHasChanged);