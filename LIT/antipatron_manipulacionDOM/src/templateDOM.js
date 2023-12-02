import { LitElement, html , css} from 'lit-element';

export class templateDOM extends LitElement{

  /**este manejo del DOM es muy complejo */
  /*
  constructor(){
    super();
    this.addEventListener('stuff-loaded', (e) => {
      this.shadowRoot.getElementById('message').innerHTML=e.detail;
    });
    this.loadStuff();
  }

  render(){
    return html`
    <p id="message"> Loading </p>
    `;*/
    static get properties(){
      return{
        message: { type: String }
      }
    }
    constructor(){
      super();
      this.message ='Loading';
      this.addEventListener('stuff-loaded', (e)=>{
        this.loadStuff();
      });
    }
    render(){
      return html`
      <p>${this.message} </p>
      `;
    }
  }


customElements.define('litelement-template-dom', templateDOM);