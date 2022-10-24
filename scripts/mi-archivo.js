let nombreIngresado = prompt("Ingrese su nombre");
while(nombreIngresado == ""){
    nombreIngresado = prompt("Ingrese un nombre");
}
alert("¡Bienvenido " + nombreIngresado + " a probar nuestra calculadora!");
let x = parseInt(prompt("Elija una operacion:\nSuma(1) - Resta(2) - multiplicacion(3) - division(4)\npromedio(5) - porcentaje(6) - salir(7)"));
while(x != 7){
    if (x == 1){
        suma ();
    }
    if (x == 2){
        resta ();
    }
    if (x == 3){
        multiplicacion ();
    }
    if ( x == 4){
        division ();
    }
    if (x == 5){
        promedio ();
    }
    if (x == 6){
        porcentaje ();
    }
    if (x == 7){
        alert("Gracias por usar nuestra calculadora");
    }
    else{
        x = parseInt(prompt("Elija una operacion:\nSuma(1) - Resta(2) - multiplicacion(3) - division(4)\npromedio(5) - porcentaje(6) - salir(7)"));
    }
}
function suma (){
    let numero = parseInt(prompt("Ingresar la cantidad de sumas a realizar"));
    let suma = 0;
    for (let i = 1; i <= numero; i++){
        valor = parseInt(prompt("+"));
        suma = suma + valor;
    }
    alert("La suma total es: " + suma);
    x = parseInt(prompt("Elija una operacion:\nSuma(1) - Resta(2) - multiplicacion(3) - division(4)\npromedio(5) - porcentaje(6) - salir(7)"));
}


// Funciones
function resta (){
    let valorA = parseInt(prompt("Ingresar el primer valor a restar"));
    let valorB = parseInt(prompt("Ingresar el segundo valor a restar"));
    resta = valorA - valorB;
    alert("La resta total es: " + resta);
    x = parseInt(prompt("Elija una operacion:\nSuma(1) - Resta(2) - multiplicacion(3) - division(4)\npromedio(5) - porcentaje(6) - salir(7)"));
}
function multiplicacion (){
    let numero = parseInt(prompt("Ingresar la cantidad de multiplicaciones a realizar"));
    let multiplicacion = 1;
    for (let i = 1; i <= numero; i++){
        valor = parseInt(prompt("*"));
        multiplicacion = multiplicacion * valor;
    }
    alert("La multiplicacion total es: " + multiplicacion);
    x = parseInt(prompt("Elija una operacion:\nSuma(1) - Resta(2) - multiplicacion(3) - division(4)\npromedio(5) - porcentaje(6) - salir(7)"));
}
function division (){
    let valorA = parseInt(prompt("Ingresar el primer valor a dividir"));
    let valorB = parseInt(prompt("Ingresar el segundo valor a dividir"));
    division = valorA / valorB;
    alert("La division total es: " + division);
    x = parseInt(prompt("Elija una operacion:\nSuma(1) - Resta(2) - multiplicacion(3) - division(4)\npromedio(5) - porcentaje(6) - salir(7)"));
}
function promedio (){
    let numero = parseInt(prompt("Ingresar la cantidad de sumas a realizar"));
    let suma = 0;
    for (let i = 1; i <= numero; i++){
        valor = parseInt(prompt("+"));
        suma = suma + valor;
    }
    promedio = suma / numero;
    alert("El promedio total es: " + promedio);
    x = parseInt(prompt("Elija una operacion:\nSuma(1) - Resta(2) - multiplicacion(3) - division(4)\npromedio(5) - porcentaje(6) - salir(7)"));
}
function porcentaje (){
    let valorA = parseInt(prompt("Ingresar el porcentaje deseado"));
    let valorB = parseInt(prompt("Ingresar el valor a sacar porcentaje"));
        porcentaje = (valorA * valorB) / 100;
    alert("El " + valorA + "% de " + valorB + " es igual a: " + porcentaje);
    x = parseInt(prompt("Elija una operacion:\nSuma(1) - Resta(2) - multiplicacion(3) - division(4)\npromedio(5) - porcentaje(6) - salir(7)"));
}