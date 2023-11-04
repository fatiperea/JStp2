let num=parseInt(prompt("Ingrese un numero hasta 50: "));

for (let i = num; i >= 1; i--) {
    let cadena = i.toString();
    document.write(cadena.repeat(i) + "<br>");
  }
  