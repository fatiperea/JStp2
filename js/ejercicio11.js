const nombre1 = prompt("Ingrese el primer nombre: ");
const edad1 = parseInt(prompt("Ingrese edad: "));

const nombre2 = prompt("Ingrese el segundo nombre: ");
const edad2 = parseInt(prompt("Ingrese edad: "));

const nombre3 = prompt("Ingrese el tercer nombre: ");
const edad3 = parseInt(prompt("Ingrese edad: "));

if (isNaN(edad1) || isNaN(edad2) || isNaN(edad3))
  document.write("No se ingreso edad valida");
else {
  switch (Math.max(edad1, edad2, edad3)) {
    case edad1:
      document.write(nombre1 + " es mayor");
      break;

    case edad2:
      document.write(nombre2 + " es mayor");
      break;

    case edad3:
      document.write(nombre3 + " es mayor");
      break;
  }
}
