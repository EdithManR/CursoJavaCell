import { html, css, LitElement } from 'lit';

export class TemplateBind extends LitElement {
  
    static styles = css`
      :host {
        display: block;
        padding: 25px;
        color: var(--e-concat-text-color, #000);
      }
    `;
  
    static properties = {
      prop1 : { type : String},
      prop2 : { type : String},
      prop3 : { type : Boolean},
      prop4 : { type : String},
  
    };
  
    constructor() {
      super();
      this.prop1 = 'text binding'; 
      this.prop2 = 'my div';
      this.prop3 = true;
      this.prop4 = 'pie';
    }
  
    __increment() {
      this.counter += 1;
    }
  
    render() {
      return html`
  
          <div>${this.prop1}</div>
  
          <div id=${this.prop2}>attribute binding </div>
  
          <div>
            boelan attribute binding
            <input type="text" ?disabled="${this.prop3}">
          </div>

          <div>
            boelan attribute binding
            <button @click="${this.clickHandler}">click</button>
          </div>
  
      `;
    }
    clickHandler(e){
      console.log(e.target);
    }
}
