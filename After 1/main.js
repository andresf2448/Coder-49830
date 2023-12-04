//number
//string
//booleano => true/false

// let nombre = "andres";
// let edad = 67;
// let valor = true;

// let nombre = prompt("Ingrese su nombre");

// if (nombre === "juan") {
//   alert("Hola juan");
// } else {
//   alert("No sé quién eres");
// }

//Crear un algoritmo que diga si un número es o no primo
let esPrimo = true;
let numero = Number(prompt("Ingrese un número para saber si es primo o no"));

for (let i = 3; i < numero; i++) {
  if (numero % i === 0) {
    esPrimo = false;
  }
}

if (esPrimo) {
  alert("El número es primo");
} else {
  alert("el número no es primo");
}