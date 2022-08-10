let contador = 0;
while (contador < 10) {
  console.log(contador);
  contador++;
}
do {
  console.log("do while: " + contador);
  contador++;
} while (contador < 20);
const david = {
  Nombre: "David",
  Apellido: "Bravo",
  Edad: 35,
};
for (const propiedad in david) {
  console.log(`Key: ${propiedad}, Value:${david[propiedad]}`);
}
let cadena = "hola mundo";
for (const iterator of cadena) {
  console.log(iterator);
}
