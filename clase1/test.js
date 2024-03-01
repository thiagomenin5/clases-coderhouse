const contador = require('./clases.js');

let contador1 = new contador('Juan');
let contador2 = new contador('Maria');

contador1.contar();
contador1.contar();
contador2.contar();
contador2.contar();

console.log(contador1.getResponsable(), contador1.getCuentaIndividual(), contador1.getContadorGlobal());