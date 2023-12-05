import { LitElement, html , css} from 'lit-element';
import '../e-concat.js';

export class ContactList extends LitElement{
  static get styles(){
    return css `
   
    li{
      list-style:none;
    }
    `;
  }
  static get properties (){
    return{
      contactos:{
        type: Array
      }
    };
  }

  constructor(){
    super();
    this.contactos =[
      {
        nombre: 'Lucho Godinez',
        email: 'user1_some_email@gmail.com'
      },
      {
        nombre: 'Hugo Sanchez',
        email: 'user2_some_email@gmail.com'
      },
      {
        nombre: 'Jhon Doe',
        email: 'user3_some_email@gmail.com'
      }
    ];
  }


  render() {
    return html `

    <div>
      ${this.contactos.map(contact =>
        html`<li><e-concat nombre="${contact.nombre}" email="${contact.email}"></e-concat></li>`
      )}
    </div>
      `;
  }
}

customElements.define('contact-list', ContactList);