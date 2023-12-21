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

// let contenedor = document.getElementById("contenedor");

// let seccion = prompt("Ingrese el nombre de la seccion");

// if (seccion === "carrito") {
//   contenedor.innerHTML = "<h1>Bienvenid@ al carrito</h1>";
//   contenedor.className = "rojo";
// } else if (seccion === "favoritos") {
//   contenedor.innerHTML = "<h1>Bienvenid@ a los favoritos</h1>";
//   contenedor.className = "azul";
// } else {
//   contenedor.innerHTML = "<h1>Bienvenid@ a nuestra super página</h1>";
//   contenedor.className = "amarillo";
// }

//CREACIÓN DE ELEMENTOS
//1 paso: Cración del nodo
// let div = document.createElement("div");

//2 paso agregado de contenido
// div.innerHTML = "<h1>Hola a todos</h1>";

//agregado de un padre
// 1 forma en el body
// document.body.append(div);

//2 forma
// let contenedor = document.getElementById("contenedor");
// contenedor.append(div);

//ELIMINAR NODOS
// let saludo = document.getElementById("saludo");
// saludo.remove();

// let contenedor = document.getElementById("contenedor");
// const usuarios = ["carmen", "carlitos", "juan", "pedrito", "andres"];

// usuarios.forEach((usuario) => {
//   let li = document.createElement("li");
//   li.innerHTML = usuario;
//   contenedor.append(li);
// });

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "gorra", precio: 750 },
  { id: 3, nombre: "media", precio: 370 },
  { id: 4, nombre: "zapato", precio: 290 },
];

let contenedor = document.getElementById("contenedor");

productos.forEach((producto) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${producto.id}</h2>
    <p>Nombre: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
  `;

  contenedor.append(div);
});
