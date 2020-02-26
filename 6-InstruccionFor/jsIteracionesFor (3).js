function mostrar()
{

var repeticiones = parseInt(prompt("ingrese el número de repeticiones"));
while (isNan(repeticiones) || repeticiones < 1)
{
    repeticiones =  parseInt(prompt("Dato no valido. Ingrese el número de repeticiones"));
}
for (var contador = 0; contador <= repeticiones; contador++)
{
    console.log("Hola UTN-FRA");
}


}//FIN DE LA FUNCIÓN