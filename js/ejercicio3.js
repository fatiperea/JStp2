let cadena;
let aux=" ";

do{
    cadena=prompt("Ingrese cadenas de texto: ");
    aux=aux+"-"+cadena;
}while(confirm("continuar ingresando?"));

document.write("Cadenas ingresadas: ", aux);