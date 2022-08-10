Destructuracion;
const numeros = [1, 2, 3];
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];
console.log(uno, dos, tres);

const [one, two, three] = numeros;
console.log(one, two, three);
let persona = {
  nombre: "David",
  apellido: "Bravo",
  edad: 24,
};

let { Nombre, Apellido, Edad } = persona;
console.log(Nombre, Apellido, Edad);
