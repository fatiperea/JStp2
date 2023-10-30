let num;
let suma=0;
do
{
    num=parseInt(prompt("Ingrese numero"));
    if(isNaN(num))
    {    alert("No ingreso un numero");}
    else
    {
        suma=suma+num;
    }

}while(confirm("continuar?"));

document.write("La suma de los numeros ingresados es: ",suma);