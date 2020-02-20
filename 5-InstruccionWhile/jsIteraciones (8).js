function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var num;
	
	var respuesta; 
	do
	{
		num = parseInt(prompt("Ingrese un numero"));
		while ( isNaN(num))
		{
			num= parseInt(prompt("Eso no es un numero. Intente otra vez"));
		}
		if (num >= 0)
		{
			positivo = positivo + num
		}
		else
		{
			negativo = negativo * num
			contador++;
		}
		respuesta = prompt ("Quiere ingresar otro numero? ");
		
	} while (respuesta == "s")
	
	if (contador == 0)
	{
		negativo = 0;
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN