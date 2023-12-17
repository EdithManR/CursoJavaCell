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
      <h2> Hola Mundo !!</h2>
      <div> 
        <p> Soy más texto de ejemplo </p>
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