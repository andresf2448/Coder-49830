/* 
estructura de una función

function nombreFuncion(){
  código a ejecutar por la función
}

nombreFuncion();
*/

// function saludar() {
//   console.log("Hola");
// }

// saludar();

// function saludar() {
//   let nombre = prompt("Ingrese el nombre");
//   alert(`Hola ${nombre}`);
// }

// saludar();

/* 
estructura de una función con parámetros

function nombreFuncion(parm1, parm2, ..., parmn){
  codigo a ejecutar por la funcion
}

nombreFuncion(valor1, valor2, ..., valorn);
*/

// function saludar(saludo, nombre) {
//   console.log(`${saludo} ${nombre}`);
// }

// saludar("Hola", "andres");
// saludar("Bienvenido", "milton");

// function sumar(num1, num2) {
//   console.log(num1 + num2);
// }

// let numero1 = Number(prompt("Ingrese el número 1"))
// let numero2 = Number(prompt("Ingrese el número 2"))
// sumar(numero1, numero2);
// sumar(20, 7);

// function sumar(num1, num2) {
//   console.log(num1 + num2);
// }

// let resultado = sumar(4, 5);
// console.log("resultado", resultado);

// function armar(partes) {
//   return `muneco armado con ${partes}`;
// }

// function pintar(munecoArmado) {
//   return `${munecoArmado} y pintado`;
// }

// function vestirGuardar(munecoPintado) {
//   console.log(`${munecoPintado} vestido y guardado`);
// }

// let munecoArmado = armar("madera");
// let munecoPintado = pintar(munecoArmado);
// vestirGuardar(munecoPintado);

// function sumar(num1, num2) {
//   console.log(num1 + num2);
// }

// let resultado = sumar(4, 5);
// console.log(resultado);

// function saludar(){
//   console.log("Hola");
//   return
//   console.log("chao");
// }

// saludar();

// function calculadora(num1, num2, operacion) {
//   switch (operacion) {
//     case "+":
//       return num1 + num2;
//       break;

//     case "-":
//       return num1 - num2;
//       break;

//     case "*":
//       return num1 * num2;
//       break;

//     case "/":
//       return num1 / num2;
//       break;

//     default:
//       return "Operación no reconocida";
//       break;
//   }
// }

// let numero1 = Number(prompt("Ingrese el numero 1"));
// let numero2 = Number(prompt("Ingrese el numero 2"));
// let operacion = prompt("Ingrese la operacion");

// let resultado = calculadora(numero1, numero2, operacion);

// alert(`${numero1} ${operacion} ${numero2} = ${resultado}`);

// let resultado;

// function sumar(numero1, numero2) {
//   resultado = numero1 + numero2;
// }

// sumar(4, 5);
// console.log(resultado);

// {
//   let nombre = "andres";
// }

// console.log(nombre);

// var nombre = "John Doe";

// function saludar() {
//   var nombre = "Juan Coder";
//   console.log(nombre);
// }

// saludar();
// console.log(nombre);

// const suma = function (a, b) {
//   return a + b;
// };

// console.log(suma(6, 7));

//arrow function
// const suma = (a, b) => {
//   return a + b;
// };

// console.log(suma(5, 6));

//cuando la funcion no tiene parametros los paréntesis se dejan vacios
//cuando solo tenemos un parametro los paréntesis se pueden quitar
// cuando quitamos las llaves y el return la arrow function hace un return implícito

// () => {return "Hola"};
// nombre => {return `Hola ${nombre}`}
// (x, y) => x + y;

// const saludar = () => {
//   return "Hola";
// };

// console.log(saludar());

// const saludar = (nombre) => {
//   return `Hola ${nombre}`;
// };

// console.log(saludar("andres"));

// const sumar = (x, y) => x + y;
// console.log(sumar(5, 6));

// const restar = (x, y) => x - y;
// console.log(restar(5, 6));

// function sumar(num1, num2) {
//   return num1 + num2;
// }

// const sumar = (num1, num2) => {
//   return num1 + num2;
// };

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;
let precioProducto = 1000;
let descuento = 100;

//precioProducto + iva - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
                // = resta(suma(1000, iva(1000)), 100);
                // = resta(suma(1000, 210), 100);
                // = resta(1210, 100);
                // = 1110

console.log(nuevoPrecio);
