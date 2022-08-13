function saludar(nombre) {
  nombre = nombre || "Desconocido";
  console.log(`Hola ${nombre}`);
}
saludar("Jon");
saludar();
console.log("cadena" || "Valor de la derecha");
console.log(19 || "Valor de la derecha");
console.log(true || "Valor de la derecha");
console.log([] || "Valor de la derecha");
console.log({} || "Valor de la derecha");
console.log(false || "Valor de la derecha");
console.log(null || "Valor de la derecha");
console.log(undefined || "Valor de la derecha");
console.log("" || "Valor de la derecha");
console.log(-2 || "Valor de la derecha");
console.log(0 || "Valor de la derecha");
//&&
console.log(false && "Valor de la derecha");
console.log(null && "Valor de la derecha");
console.log(undefined && "Valor de la derecha");
console.log("" && "Valor de la derecha");
console.log(-2 && "Valor de la derecha");
console.log(0 && "Valor de la derecha");
console.log("cadena" && "Valor de la derecha");
console.log(19 && "Valor de la derecha");
console.log(true && "Valor de la derecha");
console.log([] && "Valor de la derecha");
console.log({} && "Valor de la derecha");
