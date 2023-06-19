// Arrays
//1
const arrayVacio = [];
//2
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//3
const arrayNumerosPares = [0, 2, 4, 6, 8];
//4
const arrayBidimensional =[[0, 1, 2], ['a', 'b', 'c']]

// Funciones
//5
let suma = (a, b) => {
    return a + b;
}
//6
let potenciacion = (a, b) => {
    return a ** b;
}
//7
let separarPalabras = sentence => {
    return sentence.split(' ');
}

console.log(separarPalabras('hola mundo'))
//8
let repetirString = (sentence, num) => {
    return sentence.repeat(num)
}
//9
let esPrimo = num1 => {
    if (num1 <= 1) {
        console.log(num1 + " no es primo");
        return false;
    }

    for (let i = 2; i < num1; i++) {
        if (num1 % i === 0) {
            console.log("no es primo");
            return false;
        }
    }

    console.log("es primo");
    return true;

}

// Mezclando arrays y funciones
//10
function ordenarArray(num2) {
    return num2.sort(function(a, b) {
    return a - b;
});
}
//11
function obtenerPares(num3) {
    return num3.filter(function(element) {
        return element % 2 === 0;
    })
}
//12
const pintarArray = arrayInOut => {
    return '[' + arrayInOut.join(', ') + ']'
}// Me salió pero no lo entiendo del todo.
//13
const arrayMapi = (arr, pintarArray) => {
    let newArrayMapi = arr.map(element => pintarArray(element));
    return newArrayMapi
}
//14
const eliminarDuplicados = arrayDup => {
    let newArrSinDuplicados = arrayDup.filter((item, index) => {
        return arrayDup.indexOf(item) === index;
    });

    return newArrSinDuplicados;
}

// Arrays
//15
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
//16
const holaMundo = ['Hola', 'Mundo'];
//17
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];
//18
const arrayDeArrays =  [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

// Funciones
//19
function multiplicacion(a, b) {
    return a * b;
}
//20
function division(a, b) {
    return a / b;
}
//21
function esPar(num) {
    return num % 2 === 0;
}
//22
const resta = (a, b) => {
    return a - b;
}
const arrayFunciones = [suma, resta, multiplicacion]
 
