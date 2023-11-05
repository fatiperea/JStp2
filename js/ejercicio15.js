let i=0;
let contador=0;

const texto = prompt("Ingrese texto: ");

while (i < texto.length) {
  switch (texto.charAt(i)) {
    case "a":

    case "e":

    case "i":

    case "o":

    case "u":
      contador++;  
      
      break;
  }i++;
}document.write("Cantidad de vocales: ", contador);