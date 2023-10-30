let nota=parseInt(prompt("Ingrese nota de 0 a 10: "));

if (isNaN(nota))
{
    alert("No se ha ingresado una Nota valida: "+ nota);
}else if((nota >= 0)  && (nota <= 2))
{
    alert("Su calificación es 'Muy deficiente': "+ nota);
}else if((nota >= 3)  && (nota <= 4))
{
    alert("Su calificación es 'Insuficiente': "+ nota);
}else if((nota >= 5)  && (nota <= 6))
{
    alert("Su calificación es 'Suficiente': "+ nota);
}else if(nota === 7)
{
    alert("Su calificación es 'Bien': "+ nota);
}else if((nota >= 8)  && (nota <= 9))
{
    alert("Su calificación es 'Notable': "+ nota);
}else if(nota === 10)
{
    alert("Su calificación es 'Sobresaliente': "+ nota);
}

