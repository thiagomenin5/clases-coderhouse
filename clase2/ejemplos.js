//exponencial
const valor1 = 2;
console.log(valor1 ** 3);
console.log('-----------------------------');
//includes
const nombres = ['Juan', 'Maria', 'Pedro'];
console.log(nombres.includes('Juan'));
console.log('-----------------------------');
//Object.entries(), Object.values(), Object.keys()
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30
};
console.log(Object.entries(persona));
console.log(Object.values(persona));
console.log(Object.keys(persona));
console.log('-----------------------------');
//spread operator: se usa para copiar un objeto o array sin modificar el original y para unir objetos o arrays en uno solo. se usa ... para indicar que se va a copiar o unir, por ejemplo: ...persona
const direccion = {
    ciudad: 'Bogota',
    pais: 'Colombia'
};

const {ciudad, pais} = direccion;
console.log(ciudad, pais);
const direccionCompleta = {...persona, ...direccion};
console.log(direccionCompleta);
console.log('-----------------------------');
//rest operator: se usa para recibir un numero indefinido de parametros en una funcion, por ejemplo: function sumar(...numeros)
const {nombre, apellido, ...resto} = persona;
console.log(nombre, apellido, resto);
console.log('-----------------------------');
//nullish coalescing operator: se usa para asignar un valor por defecto a una variable si esta es null o undefined, por ejemplo: let nombre = nombreUsuario ?? 'Usuario no definido';
let nombreUsuario = 'Ricardo';
let nombre1 = nombreUsuario ?? 'Usuario no definido';
console.log(nombre1);
let nombreusuario2;
let nombre2 = nombreusuario2 ?? 'Usuario no definido';
console.log(nombre2);
let llueve;
let llueve1 = llueve || 'no llueve';
console.log(llueve1);