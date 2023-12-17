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
        <slot name="title"></slot>
      </h2>
      <div>
      <p>
      <!-- si se usa mas de un slot se pueden diferenciar colocandole un atributo name que hace mach con el atributo slot de las etiquetas span en el html -->
        <slot name="parrafo"> </slot>
      </p>
      </div>

     </section>
     ${this.getStyle()}
    `;
    return template;
    }
    getStyle(){
      return `
      <style>
        h2{
          color:red;
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