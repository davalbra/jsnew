const saludar = (nombre) => console.log(`hola ${nombre}`);
saludar("irma");
// const sumar = function (a, b) {
//   return a + b;
// };
const sumar = (a, b) => a + b;

console.log(sumar(8, 9));
const numero = [1, 2, 3, 4, 5, 6];
numero.forEach((el, index) =>
  console.log(`El elemento ${el} esta en la posicion ${index}`)
);
function Perro() {
  console.log(this);
}
Perro();
const perro = {
  nombre: "Kenai",
  ladrar() {
    console.log(this);
  },
};

perro.ladrar();
