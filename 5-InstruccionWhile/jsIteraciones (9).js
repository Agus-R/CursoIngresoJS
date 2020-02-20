function mostrar()
{

	var flag = 0;
	var respuesta;
	var minimo;
	var maximo;
	var num;

	do
	{
		num = parseInt(prompt("Ingrese un numero"));
		while ( isNaN(num))
		{
			num= parseInt(prompt("Eso no es un numero. Intente otra vez"));
		}
		if (flag == 0 || num > maximo)
		{
			maximo = num;
		}
		if (flag == 0 || num < minimo)
		{
			minimo < minimo;
			flag = 1;
		}
		
		respuesta = prompt ("Quiere ingresar otro numero? ");
		
	} while (respuesta == "s")

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;



}//FIN DE LA FUNCIÓN