/* 
valores booleanos
true o false

= asignacion
== comparación solo de valor
=== comparacion tanto de valor como de tipo

Boolean(0) => false
Boolean(-1) => true
Boolean(5) => true
Boolean("") => false
Boolean("andres") => true
*/

/* 
estructura del condicion if

if(condicion o valor true/false){
  codigo a ejecutar cuando el valor o la condicion sea verdadera
}
*/

// if (1) {
//   console.log("Hola");
// }

// console.log("proceso finalizado");

// if (0) {
//   console.log("Hola");
// }

// console.log("proceso finalizado");

// if ("") {
//   console.log("Hola");
// }

// console.log("proceso finalizado");

// if ("andres") {
//   console.log("Hola");
// }

// console.log("proceso finalizado");

// let nombre = "juan";

// if(nombre === "andres"){
//   console.log("Hola andres");
// }

/* 
estructura del if else

if(valor o condicion){
  codigo a ejecutar cuando la condicion es verdadera
}else{
  codigo a ejecutar cuando la condicion es falsa
}
*/

// let respuesta = prompt("Terminaste la tarea?").toLowerCase();

// if (respuesta === "si") {
//   alert("Puedes salir a jugar");
// } else {
//   alert("no puedes salir a jugar");
// }

/* 
estructura del if else if

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 e verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones es verdadera
}
*/

// let edad = Number(prompt("Ingrese su edad"));

// if (edad < 14) {
//   alert("No puedes entrar");
// } else if (edad < 18) {
//   alert("Puedes entrar con un adulto responsable");
// } else if (edad < 50) {
//   alert("Puedes entrar a la fiesta");
// } else {
//   alert("Eres muy grande no puedes entrar");
// }

// let edad = Number(prompt("Ingrese su edad"));

// if (edad < 14) {
//   alert("No puedes entrar");
// } else if (edad < 18) {
//   alert("Puedes entrar con un adulto responsable");
// } else if (edad > 18) {
//   alert("Puedes entrar a la fiesta");
// }

// let nombre = prompt("Ingresa tu nombre");

// if(nombre === ""){
//   alert("debes ingresar algo")
// }

/* 
! cambia el valor de un elemento
valor1 && valor2 es verdadero cuando ambos valores son verdaderos, en caso contrario es falso
valor1 || valor2 es verdadero cuando al menos uno de los valores es verdadero, en caso contrario es falso
*/

// let nombre = prompt("Ingrese el nombre");
// let apellido = prompt("Ïngrese el apellido");

// if (nombre != "" && apellido != "") {
//   alert("hola " + nombre + " " + apellido);
// } else {
//   alert("los datos son requeridos");
// }

// let nombre = prompt("Ingrese el nombre");

// if (nombre === "ANA" || nombre === "ana") {
//   alert("Hola ana");
// } else {
//   alert("no eres ana");
// }

let nombre = prompt("Ingrese el nombre");

if (nombre != "" && (nombre === "EMA" || nombre === "ema")) {
  alert("hola Ema");
} else {
  alert("Nombre no valido");
}
