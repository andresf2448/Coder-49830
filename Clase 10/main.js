//EVENTOS
let boton = document.getElementById("boton");

const saludar = (nombre) => {
  alert(`Hola click ${nombre}`);
};

//Primera forma
//agregamos el escuchador de eventos (debemos pasar la declaración de una función no su ejecución)
// boton.addEventListener("click", saludar);

//Segunda forma
// boton.onclick = saludar;

// let evento = prompt("Ingrese el evento");
// boton.addEventListener(evento, saludar);

// let nombre = "andres";
// boton.addEventListener("click", () => saludar(nombre));

// function sumar(x, y) {
//   return x + y;
// }

// const sumar = (x, y) => {
//   return x + y;
// };
