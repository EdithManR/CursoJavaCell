import { LitElement,css, html } from 'lit';
export class WishListComponent extends LitElement {

  static get styles(){
    return css `
    .main-container {
      margin: 50px auto;
      width: 500px;
      border-radius: 10px;
      background-color: #EAFCFF;
      justify-content: center;
      max-height: 600px;
      overflow: scroll;
    }
    .title {
      text-align: center;
      color: #68B9C7;
    }
    .input-text{
      width: 300px;
    }
    .task-container {
      justify-content: start;
      display: flex;
      align-items: center;

    }
    .item{
    margin-left: 20px;
    cursor: pointer;
    width: 25px;
    height: 25px;
    text-align: start;
    }
      
      .btn-delete{
        width: 200px;
        height: 35px;
        font-family: 'Courier New', Courier, monospace;
        background-color: #E6F7FF;
        border-radius: 10px;
        cursor: pointer;

      }
      .btn-delete:hover{
        background-color: #14549C;
        color: white;
      }
      .btn-delete:active{
        box-shadow: 0 2px #666;
        transform: translateY(4px);
      }
      .btn-container{
        padding:20px;
        text-align: right;
      }

      .label{
        transition: background-color 1s ease;
        font-size: 20px;
        width: 100%;
      }
      .item, .label{
        vertical-align: middle;
      }
    `;
  }

  static get properties(){
    return {
      miDato: {type: String},
      listaTareas : { type: Array}
    };
  }

  constructor(){
    super();
    this.miDato = ' ';
    this.listaTareas= ['Estudiar Coreano', 'Estudiar web components', 'Estudiar lit', 'Estudiar web components'];
    this.timers = [];
  }

  render() {
    var listaTareasArr = [];
    this.listaTareas.forEach((tareas, index)=>{
      listaTareasArr.push(html`
      <input type="checkbox" class="item" id='cb_${this.miDato}' @change=${(event) => this.setTimer(event,index)}><label class="label" id="label">${tareas}</label><br>`);
        try {
          if(index === this.listaTareas.length -1){
            this.timers[index] = {
              timeout1: setTimeout(()=>{
                console.log('1');
                this.colors(index, '#9AD576');
              },2000),
              timeout2: setTimeout(()=>{
                this.colors(index, '#F6FF99');
              },5000),
              timeout3: setTimeout(()=>{
                this.colors(index, '#F97171');
              },8000)
            };
          }
        } catch (error) {
          alert('Opps ha ocurrido un error!!!')
        }
      
    });


    return html`
    <div class="main-container">
      <h1 class="title">Mi lista</h1>
      
      <wishlist-input-component class="input-text" id="inputText" value=${this.miDato} @keydown="${this.inputKeyDown}"></wishlist-input-component>
      
      <div id="taskContainer">
        ${listaTareasArr}
      </div>
        <div class="btn-container">

      <button class="btn-delete" @click=${this.removeCheckBox}>Archive done</button></div>

        </div>
      
    `;
  }


  inputKeyDown(e){
    if(e.key === 'Enter'){
      this.miDato = e.target.value;
      this.listaTareas.push(this.miDato);
      this.resetTexto(e);
    }
  }

  resetTexto(e){
    this.miDato = '';
    e.target.value = '';
  }
  setTimer(event, index) {
    
    const labels = this.shadowRoot.querySelectorAll('.item + label');
    const checkbox = event.target;

    if (!checkbox.checked) {
      labels[index].style.textDecoration = 'none';
    } else {
        labels[index].style.color = 'black';
        labels[index].style.textDecoration = 'line-through';
        labels[index].style.background = 'none';
        clearTimeout(this.timers[index].timeout1);
        clearTimeout(this.timers[index].timeout2);
        clearTimeout(this.timers[index].timeout3);
      
    }
  }
  colors(index, color) {
    try {
      const label = this.shadowRoot.querySelectorAll('.item + label');
    label[index].style.background = color;
    } catch (error) {
    }
    
}
  removeCheckBox(){
    
    let checkBox = this.shadowRoot.getElementById('taskContainer');
    while(checkBox.firstChild){
      checkBox.removeChild(checkBox.firstChild);
    }
    
    this.listaTareas = [];
  }

}



