console.log(console);
console.error("Esto es un error");
console.warn("Esto es un warn");
console.info("Esto es un mensaje informativo");
console.log("Un registro de lo que ha pasado en nuestra aplicacion");
let nombre = "jon";
console.table(Object.entries(console).sort());
const numeros = [1, 2, 3, 4, 5, 6],
  vocales = ["a", "b", "c", "d", "e", "f"];
console.table(numeros);
console.table(vocales);

const perro = {
  nombre: "boni",
  raza: "boxer",
  color: "cafe",
};
console.table(perro);
console.clear;
console.time("Cuanto tiempo tarda mi codigo");
const arreglo = Array(10000000);
for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i;
}
console.timeEnd("Cuanto tiempo tarda mi codigo");
