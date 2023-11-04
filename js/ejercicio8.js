let num = parseInt(prompt("Ingrese un numero hasta 50: "));

if (isNaN(num)) document.write("No ingreso numero");
else if (num > 0 && num <= 50) {
  for (let i = 0; i <= num; i++) {
    let aux;
    for (aux = 1; aux <= i; aux++) {
      document.write(aux);
    }
    document.write("<br>");
  }
} else document.write("Debe ingresar numero hasta 50");
