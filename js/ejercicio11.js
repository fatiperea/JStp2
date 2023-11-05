let nombre1= prompt("Ingrese el primer nombre: ");
let edad1= prompt("Ingrese su edad: ");

let nombre2= prompt("Ingrese el segundo nombre: ");
let edad2= prompt("Ingrese su edad: ");

let nombre3= prompt("Ingrese el tercer nombre: ");
let edad3= prompt("Ingrese su edad: ");

let mayor=Math.max(edad1,edad2,edad3);

if(edad1===mayor) document.write(nombre1+" es mayor");
else if (edad2===mayor) document.write(nombre2+" es mayor");
else if (edad3===mayor) document.write(nombre3+" es mayor");

//document.write(mayor);