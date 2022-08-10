const animal = {
  nombre: "Snoopy",
  sonar() {
    console.log("hago sondios pq estoy vivo");
  },
};

const animal2 = {
  nombre: "lolaBunny",
  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  },
};
console.log(animal);
console.log(animal2);
// function Animnal(nombre, genero) {
//   this.nombre = nombre;
//   this.genero = genero;
//   this.sonar = function () {
//     console.log("Hago sonidos porque estoy vivo");
//   };
//   this.saludar = function () {
//     console.log(`hola me llamo ${this.nombre}`);
//   };
// }
// const snoopy = new Animnal("Snoopy", "macho"),
//   lolaBunny = new Animnal("lola", "mujer");
// console.log(snoopy);
// console.log(lolaBunny);
// snoopy.sonar();
// snoopy.saludar();
// lolaBunny.sonar();
// lolaBunny.saludar();

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
const snoopy = new Animnal("Snoopy", "macho"),
  lolaBunny = new Animnal("lola", "mujer");
console.log(snoopy);
console.log(lolaBunny);
snoopy.sonar();
snoopy.saludar();
lolaBunny.sonar();
lolaBunny.saludar();
