//HTML -Tagged Tempate String
//Render - Volcar el html generado con los templates strings
import {html, render} from "./node_modules/lit-html/lit-html.js";

//Render recibe dos parámetros
//templateResult : el resultado de obtener y generar un template.
//nodo dom : donde volcar el html generado.
const cadena = ">>>>>>Contenido dinámico<<<<<<";
const cadena2 =">>>Este es mi contenedor 4<<<<";
/*Versión 1
cons objectTemplateResult = html `<h2> cntenido estático (template) + ${cadena}</h2>`;
*/
// Versión 2 -> función dinámica ( parámetro )
const templateHolder = (paramString) => html `<h2> Contenido estático (template) + ${paramString}</h2>`;
const objectTemplateResult = templateHolder(cadena);

//render -> sustituye todo lo del body
// render(objetoTemplateResult, elementoEnDom);

render( templateHolder(cadena), document.getElementById('container1'));
render( templateHolder("otrooooooo tteexxxttooooooo."),document.getElementById('container2'));
render( templateHolder("un texto para el container3"),document.getElementById('container3'));
render( templateHolder(cadena2), document.getElementById('container4'));