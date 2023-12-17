class miBoton extends HTMLElement{
  constructor(){
    super();
   
    this.addEventListener('click', function(e){
      alert('hola soy un boton ' );
    });
  }
}
customElements.define('mi-boton', miBoton);


class MiBoton2 extends HTMLElement{
    constructor(){
      super();
      
    this.addEventListener('click', function(e){
      alert('hola soy un boton2');});
    }
}



customElements.define('mi-boton-2', MiBoton2);

class MiBotonExtendido extends HTMLElement{
  constructor(){
    super();
    this.addEventListener('click', (e)=>{
      console.log('evento click' + this.innerHTML);
    }); 
  }
  static get ceName(){
    return 'mi-boton-extendido';
  }
  get is(){
    return this.getAttribute('is');
  }
  set is(value){
    this.setAttribute('is', value || this.ceName);
  }

}
customElements.define('mi-boton-extendido', MiBotonExtendido, { extends:'button' });