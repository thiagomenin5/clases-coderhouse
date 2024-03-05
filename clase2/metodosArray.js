//map:servira para recorrer un array y devolver un nuevo array con los elementos modificados 
const numeros =[3,5,7,9,11];
const numerosDuplicados = numeros.map((value)=>{
    return value + value;
})

//push:servira para agregar un elemento al final de un array
const numeros1 = [3,5,7,9,11];
numeros1.push(13);
console.log(numeros1);

//find:servira para buscar un elemento en un array
const numeros2 = [3,5,7,9,11];
const resultado = numeros2.find((value)=>{
    if(value === 7){
        return value;
    }
})
console.log(resultado);

//reducer:servira para reducir un array a un solo valor
const numeros3 = [3,5,7,9,11];
const resultado1 = numeros3.reduce((acumulador,valor)=>{
    return acumulador + valor;
},0);
console.log(resultado1);