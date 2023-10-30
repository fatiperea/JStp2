let edad=parseInt(prompt("Ingrese edad: "));

if (isNaN(edad))
{
    document.write("No se ha ingresado una Edad valida: ", edad);
}
else if(edad<18)
{
    document.write("Edad invalida para conducir: ", edad);
    
}else if(edad<18 && edad<150)
{
    document.write("Edad valida para conducir: ", edad);
}