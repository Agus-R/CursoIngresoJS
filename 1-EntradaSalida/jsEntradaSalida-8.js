/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
    var num1;
    var num2;
    var resultado;

    // Guardar en memoria los datos de las cajas de texto
    // previamente convierto a number el dato que viene como string

    num1 = parseInt(document.getElementById("numeroDividendo").value);
    num2 = parseInt(document.getElementById("numeroDivisor").value);

    //  ejecuto la operación 

    resultado = num1 % num2;

    // muestro el resultado 
    alert("El resultado de la división es " + resultado);
}
