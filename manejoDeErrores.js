try {
  let numero = "10y";
  if (isNaN(numero)) {
    throw new Error("El caracter intruducido noe es un numero");
  }
  console.log(numero * numero);
} catch (error) {
  console.log("Catch, captura cualquier error surgido o lanzado en el try");
} finally {
  console.log("Otras cosas en el finally");
}
