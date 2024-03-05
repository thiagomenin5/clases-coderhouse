class Estudiante {
    //el # es para hacer privado el atributo y los metodos
    #nombre;
  constructor(nombre, edad, curso) {
    this.#nombre = nombre;
    this.edad = edad;
    this.curso = curso;
  }
  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
  }
}