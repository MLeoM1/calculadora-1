let nombreIngresado = prompt("Ingrese su nombre:");
while(nombreIngresado == ""){
    nombreIngresado = prompt("Ingrese un nombre:");
}
console.log(nombreIngresado.toUpperCase());
alert("¡Bienvenido " + nombreIngresado + " a probar nuestra calculadora!");

let x = prompt("(1)Operaciones A: Suma - Resta - multiplicacion - division.\n(2)Operaciones B: promedio - porcentaje.\n(3)Area: Circulo - Cuadrado - Rectangulo - Triangulo.\n(4)Perimetro: Circulo - Cuadrado - Rectangulo - Triangulo.\n(0)salir");

while(x != 0){
    if(x == 1){
        let a = parseInt(prompt("Operaciones A:\nElija una operacion:\nSuma(1) - Resta(2) - multiplicacion(3) - division(4) - salir(5)"));
        while(a != 5){
            if (a == 1){
                suma ();
            }
            if (a == 2){
                resta ();
            }
            if (a == 3){
                multiplicacion ();
            }
            if (a == 4){
                division ();
            }
            if (a == 5){
                alert("Gracias por usar nuestra calculadora");
            }
        }
    }
    if(x == 2){
        let b = parseInt(prompt("Operaciones B:\nElija una operacion:\npromedio(1) - porcentaje(2) - salir(3)"));
        while(b != 3){
            if (b == 1){
                promedio ();
            }
            if (b == 2){
                porcentaje ();
            }
            if (b == 3){
                alert("Gracias por usar nuestra calculadora");
            }
            let b = parseInt(prompt("Operaciones B:\nElija una operacion:\npromedio(1) - porcentaje(2) - salir(3)"));
        }
    }
    if(x == 3){
        let c = parseInt(prompt("Area:\nElija una operacion:\nCirculo(1) - Cuadrado(2) - Rectangulo(3) - Triangulo(4) - salir(5)"));
        while(c != 5){
            if (c == 1){
                areaCirculo ();
            }
            if (c == 2){
                areaCuadrado ();
            }
            if (c == 3){
                areaRectangulo ();
            }
            if (c == 4){
                areaTriangulo ();
            }
            if (c == 5){
                alert("Gracias por usar nuestra calculadora");
            }
        }
    }
    if(x == 4){
        let d = parseInt(prompt("Perimetro:\nElija una operacion:\nCirculo(1) - Cuadrado(2) - Rectangulo(3) - Triangulo(4) - salir(5)"));
        while(d != 5){
            if (d == 1){
                perimetroCirculo ();
            }
            if (d == 2){
                perimetroCuadrado ();
            }
            if (d == 3){
                perimetroRectangulo ();
            }
            if (d == 4){
                perimetroTriangulo ();
            }
            if (d == 5){
                alert("Gracias por usar nuestra calculadora");
            }

        }
    }
    if (x == 0){
        alert("Gracias por usar nuestra calculadora");
    }
    else{
        x = parseInt(prompt("(1)Operaciones A: Suma - Resta - multiplicacion - division.\n(2)Operaciones B: promedio - porcentaje.\n(3)Area: Circulo - Cuadrado - Rectangulo - Triangulo.\n(4)Perimetro: Circulo - Cuadrado - Rectangulo - Triangulo.\n(5)salir"));
    }
}

// Objetos
const calculosA = {
    suma: 1,
    resta: 2,
    multiplicacion: 3,
    division: 4
}
const calculosB = {
    promedio: 1,
    porcentaje: 2
} 
const area = {
    areaCirculo: 1,
    areaCuadrado: 2,
    areaRectangulo: 3,
    areaTriangulo: 4
}
const perimetro = {
    perimetroCirculo: 1,
    perimetroCuadrado: 2,
    perimetroRectangulo:3,
    perimetroTriangulo: 4
}

// Array
const operacionesTotales = [calculosA, calculosB, area, perimetro]
console.log(operacionesTotales.length);
operacionesTotales.forEach( (oTotal) => {
    console.log(oTotal)
})


// Funciones
function suma (){
    let numero = parseInt(prompt("Ingresar la cantidad de sumas a realizar"));
    let suma = 0;
    for (let i = 1; i <= numero; i++){
        valor = parseInt(prompt("+"));
        suma = suma + valor;
    }
    alert("La suma total es: " + suma);
    x = parseInt(prompt("(1)Operaciones A: Suma - Resta - multiplicacion - division.\n(2)Operaciones B: promedio - porcentaje.\n(3)Area: Circulo - Cuadrado - Rectangulo - Triangulo.\n(4)Perimetro: Circulo - Cuadrado - Rectangulo - Triangulo.\n(5)salir"));

}
function resta (){
    let valorA = parseInt(prompt("Ingresar el primer valor a restar"));
    let valorB = parseInt(prompt("Ingresar el segundo valor a restar"));
    resta = valorA - valorB;
    alert("La resta total es: " + resta);
    x = parseInt(prompt("(1)Operaciones A: Suma - Resta - multiplicacion - division.\n(2)Operaciones B: promedio - porcentaje.\n(3)Area: Circulo - Cuadrado - Rectangulo - Triangulo.\n(4)Perimetro: Circulo - Cuadrado - Rectangulo - Triangulo.\n(5)salir"));

}
function multiplicacion (){
    let numero = parseInt(prompt("Ingresar la cantidad de multiplicaciones a realizar"));
    let multiplicacion = 1;
    for (let i = 1; i <= numero; i++){
        valor = parseInt(prompt("*"));
        multiplicacion = multiplicacion * valor;
    }
    alert("La multiplicacion total es: " + multiplicacion);
    x = parseInt(prompt("(1)Operaciones A: Suma - Resta - multiplicacion - division.\n(2)Operaciones B: promedio - porcentaje.\n(3)Area: Circulo - Cuadrado - Rectangulo - Triangulo.\n(4)Perimetro: Circulo - Cuadrado - Rectangulo - Triangulo.\n(5)salir"));

}
function division (){
    let valorA = parseInt(prompt("Ingresar el primer valor a dividir"));
    let valorB = parseInt(prompt("Ingresar el segundo valor a dividir"));
    division = valorA / valorB;
    alert("La division total es: " + division);
    x = parseInt(prompt("(1)Operaciones A: Suma - Resta - multiplicacion - division.\n(2)Operaciones B: promedio - porcentaje.\n(3)Area: Circulo - Cuadrado - Rectangulo - Triangulo.\n(4)Perimetro: Circulo - Cuadrado - Rectangulo - Triangulo.\n(5)salir"));
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
    x = parseInt(prompt("(1)Operaciones A: Suma - Resta - multiplicacion - division.\n(2)Operaciones B: promedio - porcentaje.\n(3)Area: Circulo - Cuadrado - Rectangulo - Triangulo.\n(4)Perimetro: Circulo - Cuadrado - Rectangulo - Triangulo.\n(5)salir"));

}
function porcentaje (){
    let valorA = parseInt(prompt("Ingresar el porcentaje deseado"));
    let valorB = parseInt(prompt("Ingresar el valor a sacar porcentaje"));
        porcentaje = (valorA * valorB) / 100;
    alert("El " + valorA + "% de " + valorB + " es igual a: " + porcentaje);
    x = parseInt(prompt("(1)Operaciones A: Suma - Resta - multiplicacion - division.\n(2)Operaciones B: promedio - porcentaje.\n(3)Area: Circulo - Cuadrado - Rectangulo - Triangulo.\n(4)Perimetro: Circulo - Cuadrado - Rectangulo - Triangulo.\n(5)salir"));

}

// Formulas Area:
function areaCirculo (){
    let radio = parseInt(prompt("Ingresar el radio"));
        areaCi = Math.PI * (radio * radio);
    alert("El area del circulo es: " + areaCi);
    x = parseInt(prompt("(1)Operaciones A: Suma - Resta - multiplicacion - division.\n(2)Operaciones B: promedio - porcentaje.\n(3)Area: Circulo - Cuadrado - Rectangulo - Triangulo.\n(4)Perimetro: Circulo - Cuadrado - Rectangulo - Triangulo.\n(5)salir"));

}
function areaCuadrado (){
    let lado = parseInt(prompt("Ingresar el lado del cuadrado"));
        areaCu = lado * lado;
    alert("El area del cuadrado es: " + areaCu);
    x = parseInt(prompt("(1)Operaciones A: Suma - Resta - multiplicacion - division.\n(2)Operaciones B: promedio - porcentaje.\n(3)Area: Circulo - Cuadrado - Rectangulo - Triangulo.\n(4)Perimetro: Circulo - Cuadrado - Rectangulo - Triangulo.\n(5)salir"));

}
function areaRectangulo (){
    let base = parseInt(prompt("Ingresar la base del rectangulo"));
    let altura = parseInt(prompt("Ingresar la altura del rectangulo"));
        areaR = base * altura;
    alert("El area del rectangulo es: " + areaR);
    x = parseInt(prompt("(1)Operaciones A: Suma - Resta - multiplicacion - division.\n(2)Operaciones B: promedio - porcentaje.\n(3)Area: Circulo - Cuadrado - Rectangulo - Triangulo.\n(4)Perimetro: Circulo - Cuadrado - Rectangulo - Triangulo.\n(5)salir"));

}
function areaTriangulo (){
    let base = parseInt(prompt("Ingresar la base del triangulo"));
    let altura = parseInt(prompt("Ingresar la altura del triangulo"));
        areaT = (base * altura) / 2;
    alert("El area del triangulo es: " + areaT);
    x = parseInt(prompt("(1)Operaciones A: Suma - Resta - multiplicacion - division.\n(2)Operaciones B: promedio - porcentaje.\n(3)Area: Circulo - Cuadrado - Rectangulo - Triangulo.\n(4)Perimetro: Circulo - Cuadrado - Rectangulo - Triangulo.\n(5)salir"));

}

// Formulas Perimetro:
function perimetroCirculo (){
    let radio = parseInt(prompt("Ingresar el radio"));
        perimetroCi = 2 * Math.PI  * radio;
    alert("El perimetro del circulo es: " + perimetroCi);
    x = parseInt(prompt("(1)Operaciones A: Suma - Resta - multiplicacion - division.\n(2)Operaciones B: promedio - porcentaje.\n(3)Area: Circulo - Cuadrado - Rectangulo - Triangulo.\n(4)Perimetro: Circulo - Cuadrado - Rectangulo - Triangulo.\n(5)salir"));

}
function perimetroCuadrado (){
    let lado = parseInt(prompt("Ingresar el lado del cuadrado"));
        perimetroCu = 4 * lado;
    alert("El perimetro del cuadrado es: " + perimetroCu);
    x = parseInt(prompt("(1)Operaciones A: Suma - Resta - multiplicacion - division.\n(2)Operaciones B: promedio - porcentaje.\n(3)Area: Circulo - Cuadrado - Rectangulo - Triangulo.\n(4)Perimetro: Circulo - Cuadrado - Rectangulo - Triangulo.\n(5)salir"));

}
function perimetroRectangulo (){
    let lado1 = parseInt(prompt("Ingresar la base del rectangulo"));
    let lado2 = parseInt(prompt("Ingresar la altura del rectangulo"));
        perimetroR = (2 * lado1) +(2 * lado2);
    alert("El perimetro del rectangulo es: " + perimetroR);
    x = parseInt(prompt("(1)Operaciones A: Suma - Resta - multiplicacion - division.\n(2)Operaciones B: promedio - porcentaje.\n(3)Area: Circulo - Cuadrado - Rectangulo - Triangulo.\n(4)Perimetro: Circulo - Cuadrado - Rectangulo - Triangulo.\n(5)salir"));

}
function perimetroTriangulo (){
    let lado1 = parseInt(prompt("Ingresar el lado a del triangulo"));
    let lado2 = parseInt(prompt("Ingresar el lado b del triangulo"));
    let lado3 = parseInt(prompt("Ingresar el lado c del triangulo"));
        perimetroT = lado1 + lado2 + lado3;
    alert("El perimetro del triangulo es: " + perimetroT);
    x = parseInt(prompt("(1)Operaciones A: Suma - Resta - multiplicacion - division.\n(2)Operaciones B: promedio - porcentaje.\n(3)Area: Circulo - Cuadrado - Rectangulo - Triangulo.\n(4)Perimetro: Circulo - Cuadrado - Rectangulo - Triangulo.\n(5)salir"));

}
