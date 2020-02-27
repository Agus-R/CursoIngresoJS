function mostrar()
{
    var letra;
    var numero;
    var cantNumerosPares = 0;
    var cantNumerosImpares = 0;
    var acumCeros = 0;
    var acumPositivos = 0;
    var acumNegativos = 0;
    var mayor;
    var menor;
    var letraMenor;
    var letraMayor;
    var flag = 0;
    var contador = 0;
    var seguir;

    do
    {
        letra = prompt ("Ingrese una letra: ");
        while ( !( (letra >= "A" && letra <= "Z") || (letra >= "a" && letra <="z")))
        {
            letra = prompt ("Dato invalido. Ingrese una letra: ");
        } 
        numero = parseInt (prompt("Ingrese un numero entre -100 y 100: "));
        while (numero < -100 || numero > 100 || isNaN(numero))
        {
            numero = parseInt (prompt("Ingrese un numero entre -100 y 100: "));
        }

        if (numero % 2 == 0)
        {
            cantNumerosPares++;
        } else
        {
            cantNumerosImpares++;
        }
        if (numero > 0)
        {
            acumPositivos++;
        }else if (numero < 0)
        {
            acumNegativos++;
        }else 
        {
            acumCeros++;
        }
        if ( numero > mayor || flag == 0)
        {
            mayor = numero;

        }
        if ( numero < menor || flag == 0)
        {
            menor = numero;

            flag = 1;
        }





        seguir = prompt("Desea continuar?");
    } while (seguir == "s");





}

