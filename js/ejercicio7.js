let num = parseInt(prompt("Ingrese un numero hasta 50: "));

if (isNaN(num)) document.write("No ingreso numero");
else if (num > 0 && num <= 50) {
  for (let i = num; i >= 1; i--) {
    let cadena = i.toString();
    document.write(cadena.repeat(i) + "<br>");
  }
} else document.write("Debe ingresar numero hasta 50");
