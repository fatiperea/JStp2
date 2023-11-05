const texto = prompt("Ingrese texto: ");

let i = 0;
let vocalEncontrada = true;

do {
  if (
    texto.charAt(i) === "a" ||
    texto.charAt(i) === "e" ||
    texto.charAt(i) === "i" ||
    texto.charAt(i) === "o" ||
    texto.charAt(i) === "u"
  ) {
    vocalEncontrada = false;
    document.write(
      "La primera vocal " + texto.charAt(i) + " esta en la posición: ",
      i
    );
  } else {
    vocalEncontrada = true;
  }
  i++;
} while (vocalEncontrada && i<texto.length);
if (vocalEncontrada === true) {
  document.write("No ingreso texto con vocales");
}
