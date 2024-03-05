const array = [{
    nombre: "Juan",
    apellido: "Perez",
    edad: 25
},{
    nombre: "Juan",
    apellido: "Gomez",
    edad: 30
}]

const tipos = []
array.forEach((value)=>{
    const typeProduct = Object.keys(value);
    typeProduct.forEach(element => {
        if(!tipos.includes(element)){
            tipos.push(element)
        }
    });
})
console.log(tipos)
console.log('-----------------------------')
const cantidadToal = []
array.forEach((value)=>{
    const valueProduct = Object.values(value);
    valueProduct.forEach(element => {
        cantidadToal.push(element)
    });
})
console.log(cantidadToal)