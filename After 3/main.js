// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");
// let boton = document.getElementById("boton");

// if (usuarioStorage) {
//   usuario = usuarioStorage;
//   alert(`Bienvenid@ nuevamente ${usuario}`);
// } else {
//   usuario = prompt("Ingrese su nombre");
//   sessionStorage.setItem("usuario", usuario);
//   alert(`Bienvenid@ por primera vez ${usuario}`);
// }

// boton.addEventListener("click", () => {
//   sessionStorage.clear();
//   location.reload();
// });

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "media", precio: 700 },
//   { id: 3, nombre: "zapato", precio: 750 },
// ];
// localStorage.setItem("carrito", JSON.stringify(productos));

//funciones para modificar el storage
//modificar un producto en su precio por su nombre
// const modificarPrecio = (nombre, nuevoPrecio) => {
//   //traemos la data del storage
//   let carritoJson = localStorage.getItem("carrito");
//   //quitamos el formato json
//   let productos = JSON.parse(carritoJson);

//   //buscamos el producto por su nombre
//   let producto = productos.find((item) => item.nombre === nombre);

//   //una vez encontrado el producto actualizamos su precio
//   producto.precio = nuevoPrecio;

//   localStorage.setItem("carrito", JSON.stringify(productos));
// };

// let nombre = prompt("Ingrese el nombre del producto a modificar su precio");
// let precio = Number(prompt("Ingrese el nuevo precio"));

// modificarPrecio(nombre, precio);

//crear una funcion que agregue un nuevo producto al storage

// const agregar = (nombre, precio) => {
//   let carritoStorage = localStorage.getItem("carrito");
//   let productos = JSON.parse(carritoStorage);

//   let producto = {
//     id: productos.length + 1,
//     nombre,
//     precio,
//   };

//   productos.push(producto);
//   localStorage.setItem("carrito", JSON.stringify(productos));
// };

// let nombre = prompt("Ingrese el nombre del producto");
// let precio = Number(prompt("Ingrese el precio del producto"));

// agregar(nombre, precio);

//eliminar dado el nombre de un producto eliminar este del storage

const eliminar = (nombre) => {
  //utilizar el metodos filter
}