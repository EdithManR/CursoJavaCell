const template = document.createElement("div");
template.innerHTML = `
<style>
  .texto{
    color: red;
  }
  p{
    color:blue;
  }
</style>
<p class="texto"> Hola Mundo 2!!</p>
<p> texto ejemplo para la clase </p>
`;


class myElement extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode:"open"});

  }
  getTemplate(){
    const template = document.createElement('template');
    template.innerHTML = `
     <section>
      <h2> 
      <!--con la etiqueta slot, carga el contenido dinámico que se ingresa desde el html y se queda en el lightDOM-->
        <slot></slot>
      </h2>

     </section>
     ${this.getStyle()}
    `;
    return template;
    }
    getStyle(){
      return `
      <style>
        :host{
          display:inline-block;
          width:100%;
          min-width: 350px;
          max-width: 450px;
          margin: 15px;
          background-color: #c6c6c6;
        }
        :host(.blue){
          background-color:blue;
          color:white;
        }
        /*permite seleccionar un elemento por atributo"*/
        :host([yellow]){
          background-color:yellow;
        }
        /*Se puede agregar un contexto*/
        :host-context(article.card){
          display:block;
          max-width: 100%;
        }
      </style>
      `;    }
    render(){
      this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
  connectedCallback(){
    this.render();
  }



}

customElements.define('my-element', myElement);