function Animnal(nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;
}
Animnal.prototype.sonar = function () {
  console.log("Hago sonidos porque estoy vivo");
};
Animnal.prototype.saludar = function () {
  console.log(`hola me llamo ${this.nombre}`);
};
//herencia prototipica
function Perro(nombre, genero, tamanio) {
  this.super = Animnal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}
//Perro esta eredando de Animal
Perro.prototype = new Animnal();
Perro.prototype.constructor = Perro;
//sobreescritura de metodos del prototipo padre ne el hijo
Perro.prototype.sonar = function () {
  console.log("Soy un perro y mi sonido es un ladrido");
};
Perro.prototype.ladrar = function () {
  console.log("Guau Guau");
};

const snoopy = new Perro("Snoopy", "macho", "mediano"),
  lolaBunny = new Animnal("lola", "mujer");
console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();
