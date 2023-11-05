const texto = prompt("Ingrese texto: ");

let i=0;
document.write("Texto invertido: ");
for(i=texto.length;i>=0;i--)
{
    document.write(texto.charAt(i));
}