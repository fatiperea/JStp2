const fila = parseInt(prompt("Ingrese cantidad de filas: "));
const columna = parseInt(prompt("Ingrese cantidad de columnas: "));

if (isNaN(fila) && isNaN(columna)) document.write("Ingrese valor numerico");
else {
    let totalCeldas = fila * columna;  
  document.write(`<table><tbody>`);
  for (let f = 0; f < fila; f++) {
    document.write(` <tr>`);
    for (let c = 0; c < columna; c++) {
      document.write(`<td>${totalCeldas}</td>`);
      totalCeldas--;
    }
    document.write(`</tr>`);
  }
  document.write(`    
</tbody>
</table>`);
}
