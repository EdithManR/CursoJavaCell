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
        :host{
          --primary-color: tomato;
          --second-color: salmon;
          --heading-primary: 30px;
          --heading-secondary: 25px;
          display: inline-block;
          width:100%;
          min-width:450px;
          max-width: 600px;
        }
        section{
          background-color: var(--primary-color);
        }
        section div{
          background-color: var(--second-color);
        }
        h2{
          font-size: var(--heading-primary);
        }
        p{
          font-size:var(--heading-secondary);
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