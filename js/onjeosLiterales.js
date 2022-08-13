let nombre = "Kenina",
  edad = 7;
const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("Guau Guau");
  },
};
console.log(perro);
perro.ladrar();
const dog = {
  nombre,
  edad,
  raza: "Callejero",
  ladrar() {
    console.log("Guau Guau Guau");
  },
};
console.log(dog);
dog.ladrar();
