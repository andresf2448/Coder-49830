//STORAGE

//localStorage
// console.log(localStorage);

//setItem(clave, valor); para guardar un elemento en el storage
// localStorage.setItem("nombre", "andres");
// localStorage.setItem("valor", true);
// localStorage.setItem("numero", 5);

//getitem(clave); obtiene el valor asociado a la clave en el storage
// let nombre = localStorage.getItem("nombre");
// console.log(nombre);
// let valor = localStorage.getItem("valor");
// console.log(valor);
// let numero = localStorage.getItem("numero");
// console.log(numero);

// localStorage.setItem("objeto", { nombre: "pepito", edad: 67 });
// localStorage.setItem("arreglo", [4, 56, 78, 9]);

// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);
//   console.log(clave);
//   console.log(localStorage.getItem(clave));
// }

//Eliminar el storage
// localStorage.removeItem("nombre"); //Elimina solo la clave con su valor
// localStorage.clear(); //Elimina todo el storage

//sessionStorage
// console.log(sessionStorage);
// sessionStorage.setItem("nombre", "pepito");
// sessionStorage.setItem("valor", "false");
// sessionStorage.setItem("numero", "6");

// let nombre = sessionStorage.getItem("nombre");
// console.log(nombre);
// let valor = sessionStorage.getItem("valor");
// console.log(valor);
// let numero = sessionStorage.getItem("numero");
// console.log(numero);

// for (let i = 0; i < sessionStorage.length; i++) {
//   let clave = sessionStorage.key(i);
//   console.log(clave);
//   console.log(sessionStorage.getItem(clave));
// }

// sessionStorage.removeItem("nombre"); //Elimina solo la clave con su valor
// sessionStorage.clear(); //Elimina todo el storage

//RESUMEN
//La diferencia entre localStorage y sessionStorage es que
//el primero persiste la información cuando se
//recarga o cierra la página, se apaga o se reinicia el computador
//mientras que el segundo solo persiste la informacion cuando
//se recarga la página en los demás casos se borra

// localStorage.setItem("objeto", { nombre: "pepito", edad: 67 });

//JSON.stringify(elemento); dar formato json al elemento

// let objeto = { nombre: "pepito", edad: 67 };
// localStorage.setItem("objeto", JSON.stringify(objeto));

// let arreglo = [3, 4, 56, 7, 8];
// localStorage.setItem("arreglo", JSON.stringify(arreglo));

//JSON.parse(elemento); devolver la forma incial del elemento
// let objeto = localStorage.getItem("objeto");
// console.log(JSON.parse(objeto));

// let arreglo = localStorage.getItem("arreglo")
// console.log(JSON.parse(arreglo));

// localStorage.setItem("objeto", JSON.stringify({nombre: "adriana", edad: 20}))
// let persona = localStorage.getItem("objeto");
// console.log(JSON.parse(persona));

// const productos = [
//   { id: 1, producto: "Arroz", precio: 125 },
//   { id: 2, producto: "Fideo", precio: 70 },
//   { id: 3, producto: "Pan", precio: 50 },
//   { id: 4, producto: "Flan", precio: 100 },
// ];

// const guardarStorage = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// productos.forEach((item) => {
//   guardarStorage(item.id, JSON.stringify(item));
// });

// localStorage.setItem("carrito", JSON.stringify(productos));

// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// if (usuarioStorage) {
//   usuario = usuarioStorage;
//   alert(`Bienvenid@ nuevamente ${usuario}`);
// } else {
//   usuario = prompt("Ingrese su nombre");
//   sessionStorage.setItem("usuario", usuario);
//   alert(`Bienvenid@ por primera vez ${usuario}`);
// }

// const productos = [
//   { id: 1, producto: "Arroz", precio: 125 },
//   { id: 2, producto: "Fideo", precio: 70 },
//   { id: 3, producto: "Pan", precio: 50 },
//   { id: 4, producto: "Flan", precio: 100 },
// ];
// localStorage.setItem("carrito", JSON.stringify(productos));

let carrito = [];
//traemos el carrito del storage
let carritoStorage = localStorage.getItem("carrito");
let boton = document.getElementById("boton");

//si hay carrito en el storage lo cargamos en la variable carrito
if (carritoStorage) {
  carrito = JSON.parse(carritoStorage);
} else {
  let div = document.createElement("div");
  div.innerHTML = "Carrito vacio";

  document.body.append(div);
}

//recorremos el carrito
carrito.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.producto}</p>
    <b>$${item.precio}</b>
  `;

  document.body.append(div);
});

//al boton para eliminar el carrito le agregamos un evento click
boton.addEventListener("click", () => {
  localStorage.clear(); //borramos el storage
  location.reload(); //recargamos la págaina
  alert("carrito eliminado");
});
