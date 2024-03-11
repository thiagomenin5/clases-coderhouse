/* import Calculadora from "./calculadora.js";

const c1 = new Calculadora();
c1.sumar(2,3);
c1.restar(5,3);
 */

//dinamic import: se usa para importar modulos de forma asincrona, por ejemplo: import('./calculadora.js').then(modulo => {const c1 = new modulo.default(); c1.sumar(2,3); c1.restar(5,3);});
// const modo = 'calculo';
// const ejemploImport = async () => {
//     if (modo === 'calculo') {
//     const {default: Calculadora} = await import('./calculadora.js');
//     const c1 = new Calculadora();
//         c1.sumar(2,3);
//         c1.restar(5,3);
//         }
//     }
// ejemploImport();

import ProductManager from './desafio1.js';

 const producto = new ProductManager();
 producto.addProduct({title:'producto1',description:'descripcion1',price:100,thumbnail:'thumbnail1',code:1,stock:10});
    console.log(producto.getProducts());