/* 
estructura del bucle for

for(desde; hasta; actualizacion){
  codigo a repetir
}
*/

// i++     i = i + 1

// for(let i = 0; i < 100; i++){
//   console.log("Hola");
// }

// for (let i = 0; i < 100; i = i + 2) {
//   console.log(i);
// }

// for (let i = 0; i < 100; i--) {  PELIGRO BUCLE INFINITO
//   console.log(i);
// }

// let numero = Number(prompt("Ingrese el número"));

// for (let i = 1; i <= 10; i++) {
//   let resultado = numero * i;

//   // alert(numero + " x " + i + " = " + resultado);
//   alert(`${numero} X ${i} = ${resultado}`);
// }

// console.log(5 * 1);
// console.log(5 * 2);
// console.log(5 * 3);
// console.log(5 * 4);
// console.log(5 * 5);
// console.log(5 * 6);
// console.log(5 * 7);
// console.log(5 * 8);
// console.log(5 * 9);
// console.log(5 * 10);

// let saludo = "Hola";
// let nombre = "andres";

// console.log(saludo + " " + nombre);
// console.log(`${saludo} ${nombre}`);

// for (let turno = 1; turno <= 7; turno++) {
//   let nombre = prompt("Ingrese el nombre");
//   alert(`Turno #${turno} Nombre: ${nombre}`);
// }

// alert("ya no quedan cupos");

// for(let i = 0; i < 10; i++){
//   if(i === 5){
//     break;
//   }

//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }

//   console.log(i);
// }

// let saludo = "Hola";
// let nombre = "andres";

// console.log(saludo + " " + nombre);
// console.log(`${saludo} ${nombre}`);

/* 
estructura del bucle while

while(condicion){
  codigo a repetir siempre que la condicion sea verdadera
}
*/

// let repetir = true;

// while (repetir) {
//   console.log("Hola coder");
// }

// let entrada = prompt("Ingrese el usuario");

// while (entrada === "pepito") {
//   alert("usuario incorrecto");

//   entrada = prompt("Ingrese el usuario");
// }

// alert("Bienvenido");

/* 
estructura del bucle do while

do{
  codigo a ejecutar por primera vez y luego siempre que la condicion sea verdadera
}while(condicion);
*/

// let repetir = false;

// while (repetir) {
//   console.log("hola");
// }

// do {
//   console.log("Hola");
// } while (repetir);

// let numero;

// do {
//   numero = prompt("Ingrese un numero");
// } while (parseInt(numero));

/* 
estructura del switch

switch(valor){
  case valor1:
    codigo a ejecutar cuando el valor === valor1
    break;

  case valor2:
    codigo a ejecutar cuando el valor === valor2
    break;

  .
  .
  .

  default:
    codigo a ejecutar cuando ninguno de los valores coincide con valor
    break;
}
*/

// let moneda = "usd";

// switch (moneda) {
//   case "ars":
//     console.log("Moneda de Argentina");
//     break;

//   case "cop":
//     console.log("Moneda de Colombia");
//     break;

//   case "clp":
//     console.log("Moneda de chile");
//     break;
//   default:
//     console.log("Moneda no reconocida");
//     break;
// }

let entrada = prompt("Ingresar un nombre");

while (entrada != "ESC") {
  switch (entrada) {
    case "ANA":
      alert("HOLA ANA");
      break;
    case "JUAN":
      alert("HOLA JUAN");
      break;
    default:
      alert("¿QUIÉN SOS?");
      break;
  }

  entrada = prompt("Ingresar un nombre");
}
