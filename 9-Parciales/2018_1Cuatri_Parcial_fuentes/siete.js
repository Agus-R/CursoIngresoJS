function mostrar()
{
    var nota;
    var sexo;
    var promedioNotas;
    var acumNotas = 0;
    var notaBaja;
    var sexoBajo;
    var flag = 0
    var contadorVaronesMas6 = 0;

    for (var i = 0; i < 5 ; i++ )
    {
    nota = parseInt(prompt("Ingrese la nota"));
    while (isNaN(nota) || nota <= 0 || nota >= 10)
    {
        nota = parseInt(prompt("Error. Ingrese la nota valida"));
    }
    sexo = prompt("Ingrese el sexo");
    while (sexo !="m" && sexo != "f")
    {
        sexo = prompt("Error. Ingrese sexo valido");
    }
    acumNotas = acumNotas + nota;
    if (nota < notaBaja || flag == 0)
    {
        notaBaja = nota;
        sexoBajo = sexo;
        flag = 1;
    }
    if (sexo == "m" && nota >= 6)
    {
        contadorVaronesMas6++;
    }
    }
    promedioNotas = acumNotas / 5;
    alert ("Promedio de las notas: " + promedioNotas +
    "\n Nota mas baja: " + notaBaja + 
    "\n Sexo de la persona con baja nota " + sexoBajo +
    "\n Varones con nota mas 6: " + contadorVaronesMas6);
}
