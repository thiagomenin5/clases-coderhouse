/* import Calculadora from "./calculadora.js";

const c1 = new Calculadora();
c1.sumar(2,3);
c1.restar(5,3);
 */

//dinamic import: se usa para importar modulos de forma asincrona, por ejemplo: import('./calculadora.js').then(modulo => {const c1 = new modulo.default(); c1.sumar(2,3); c1.restar(5,3);});
const modo = 'calculo';
const ejemploImport = async () => {
    if (modo === 'calculo') {
    const {default: Calculadora} = await import('./calculadora.js');
    const c1 = new Calculadora();
        c1.sumar(2,3);
        c1.restar(5,3);
        }
    }
ejemploImport();