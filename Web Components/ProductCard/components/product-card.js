class ProductCard extends HTMLElement{
  constructor(){
    super();
    console.log("Hola mundo");
  }
}

customElements.define('product-card', ProductCard);