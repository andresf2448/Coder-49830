// console.log(document.body);

//ACCESO AL DOM
//getElementById();
// let aplicacion = document.getElementById("aplicacion");
// console.log(aplicacion.innerHTML);
// console.log(aplicacion.innerText);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

//getElementsByClassName();
// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos);//HTMLCollection parecido a un arreglo pero no lo es
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

// for (const perrito of perritos) {
//   console.log(perrito.innerHTML);
// }

//getElementsByTagName();
// let divs = document.getElementsByTagName("div");
// console.log(divs);

//MODIFICAR EL DOM
// let saludo = document.getElementById("saludo");
// saludo.innerHTML = "<h1>Hola coder</h1>";

let contenedor = document.getElementById("contenedor");

let seccion = prompt("Ingrese el nombre de la seccion");

if (seccion === "carrito") {
  contenedor.innerHTML = "<h1>Bienvenid@ al carrito</h1>";
  contenedor.className = "rojo";
} else if (seccion === "favoritos") {
  contenedor.innerHTML = "<h1>Bienvenid@ a los favoritos</h1>";
  contenedor.className = "azul";
} else {
  contenedor.innerHTML = "<h1>Bienvenid@ a nuestra super página</h1>";
  contenedor.className = "amarillo";
}
