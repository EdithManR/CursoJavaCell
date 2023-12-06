import { LitElement, html, css } from 'lit';
import { SuperElemento } from "./style-components";

export class HerenciaElemento extends SuperElemento {
    static styles() {
        return [
            super.styles,
            css `button {color: red;}`
        ];
    }

    render() {
        return html``;
    }
}
customElements.define('herencia-elemento', HerenciaElemento);
