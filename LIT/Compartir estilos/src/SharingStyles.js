import { LitElement, html, css } from 'lit-element';
import { buttonStyles } from "./module-styles.js";

export class SharingStyles extends LitElement {
    static get styles (){
        return [
            buttonStyles, css`
            :host {
                display:block;
                border: 1px solid skyblue;
                padding:10px;
            }`];
    } 

    render() {
        return html`
        <button class="blue-button">click</button>
        <button class="blue-button" disabled> no click </button>
        `;
    }
}
window.customElements.define('sharing-styles', SharingStyles);
