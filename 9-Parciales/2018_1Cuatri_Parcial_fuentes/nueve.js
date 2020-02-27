function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var tempPar;
    var marcaPesado;
    var contProductosMenosCero = 0;
    var promedioPeso;
    var pesoMaximo;
    var pesoMinimo;
    var contador;
    var seguir;
    var flag = 0;
    
    do
    {
        marca = prompt ("Ingrese la marca: ");
        peso = parseInt (prompt("Ingrese peso (1-100)"));
        while (peso < 1 || peso > 100 || isNaN(peso)) 
        {
            peso = parseInt (prompt("ERROR. Ingrese peso (1-100)"));
        }
        temperatura = parseInt (prompt("Ingrese una temperatura entre -30 y 30"));
        while (temperatura < -30 || temperatura > 30 || isNaN(temperatura))
        {
            temperatura = parseInt (prompt("ERROR. Ingrese una temperatura entre -30 y 30"));
        }


    







        seguir = prompt ("Quiere continuar? ");
    } while (seguir == "s");

}
