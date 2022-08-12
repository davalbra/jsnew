class Animal {
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  }
  saludar() {
    console.log(`hola me llamo ${this.nombre}`);
  }
}
class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }
  sonar() {
    console.log("Soy un perro y mi sonido es ladrido");
  }
  ladrar() {
    console.log("Guau Guau");
  }
  //metodos estaticos
  static queEeres() {
    console.log(
      "Los perros somos animales mamiferos que pertenecemos a la familia de los caninos"
    );
  }
  //getters and setters
  getRaza() {
    return this.raza;
  }
  setRaza(raza) {
    this.raza = raza;
  }
}
Perro.queEeres();

const mimi = new Animal("mimi", "Hembra"),
  scooby = new Perro("Scooby", "Macho", "Grande");
console.log(mimi);
mimi.saludar();
mimi.sonar();

console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();
scooby.setRaza("midium");
console.log(scooby.getRaza());
