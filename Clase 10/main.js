//EVENTOS
// let boton = document.getElementById("boton");

// const saludar = (nombre) => {
//   alert(`Hola click ${nombre}`);
// };

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

//EVENTOS COMUNES
let boton = document.getElementById("boton");
let saludo = document.getElementById("saludo");

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("click", () => console.log("click"));

// boton.addEventListener("mousedown", () => {
//   saludo.className = "rojo";
// });

// boton.addEventListener("click", () => {
//   saludo.className = "azul";
// });

// boton.addEventListener("mouseover", () => {
//   saludo.className = "amarillo";
// });

// boton.addEventListener("mouseout", () => {
//   saludo.className = "verde";
// });

let nombre = document.getElementById("nombre");

// nombre.addEventListener("keydown", () => console.log("keydown"))
// nombre.addEventListener("keyup", () => console.log("keyup"))

// nombre.addEventListener("keyup", (e) => {
//   if (e.key === "a") {
//     saludo.className = "rojo";
//   } else if (e.key === "s") {
//     saludo.className = "azul";
//   } else if (e.key === "d") {
//     saludo.className = "amarillo";
//   } else {
//     saludo.className = "verde";
//   }
// });

// nombre.addEventListener("change", () => {
//   console.log("Change");
// });

// nombre.addEventListener("input", () => {
//   if (!nombre.value.includes("@")) {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "blanco";
//   }
// });

// me traigo el formulario
let formulario = document.getElementById("formulario");

//agrego el evento sumbit
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //evito que se recargue el formulario

  let inputs = e.target.children; //traigo los inputs del formulario
  alert(inputs[0].value);
  alert(inputs[1].value);

  // if (!inputs[0].value.includes("@")) {
  //   inputs[0].value = "";
  //   alert("El campo debe tener el @")
  // }
});
