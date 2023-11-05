const texto = prompt("Ingrese texto: ");
let i=0;

for(i=0;i<texto.length;i++)
{
    document.write(texto.charAt(i)+"-");
}