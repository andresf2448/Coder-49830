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

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }

  console.log(i);
}
