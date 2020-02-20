function mostrar()
{
	var numero;
	var acumNegativos = 0;
	var acumPositivos = 0;
	var contadorNegativos = 0;
	var contadorPositivos = 0;
	var contadorCeros = 0;
	var cantPares;
	var promPos = 0;
	var promNeg = 0;
	var diferencia;


	var respuesta


	do
	{
		numero = parseInt(prompt("Ingrese un numero"));
		while ( isNaN(numero))
		{
			numero= parseInt(prompt("Eso no es un numero. Intente otra vez"));
		}
		
		if (numero > 0) 
		{
			acumPositivos = acumPositivos + numero;
			contadorPositivos++;	
		}
		else if (numero < 0)
		{
			acumNegativos = acumNegativos + numero;
			contadorNegativos++;	
		}
		else 
		{
			contadorCeros++;
		}
		if (numero % 2 == 0)
		{
			cantPares++;
		}

		respuesta = prompt ("Quiere ingresar otro numero? ");
		
	} while (respuesta == "s");
	
	
	promPos = acumPositivos / contadorPositivos;
	promNeg = acumNegativos / contadorNegativos;
	diferencia =  contadorPositivos - contadorNegativos;

	document.write("Suma de los negativos : " + acumNegativos + "</br>");
	document.write("Suma de los positivos : " + acumPositivos + "</br>");
	document.write("Cantidad de negativos : " + contadorNegativos + "</br>");
	document.write("Cantidad de positivos : " + contadorPositivos + "</br>");
	document.write("Cantidad de ceros : " + contadorCeros + "</br>");
	document.write("Cantidad de numeros pares : " + cantPares + "</br>");
	document.write("Promedio de los negativos : " + promNeg + "</br>");
	document.write("Promedio de los positivos : " + promPos + "</br>");
	document.write("La diferencia entre positivos y negativos es : " + diferencia + "</br>");
	
}//FIN DE LA FUNCIÓN