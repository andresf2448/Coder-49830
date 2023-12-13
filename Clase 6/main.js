/* 
estructura de un arreglo
[valor1, valor2, ..., valorn];
*/

// const vacio = [];
// const numeros = [2, 3, 4, 5, 7];
// const nombres = ["camila", "juan", "andres", "pedro"];
// const valores = [false, true, true, false];
// const varios = [true, 2, "andres"];

// const nombres = ["camila", "juan", "andres", "pedro"];

// console.log(nombres[1]);

// const numeros = [2, 3, 4, 5, 7];

// let resultado = numeros[1] + numeros[3];
// console.log(resultado);

// const productos = ["mate", "cafe", "carne", "chocolate"];

//index++     index = index + 1

// for(let index = 0; index < productos.length; index++){
//   console.log(productos[index]);
// }

// const productos = ["mate", "cafe", "carne", "chocolate"];

//length logitud o cantidad de elementos del arreglo
// console.log(productos.length);

// //push agrega un elemento al final del arreglo
// productos.push("agua");
// console.log(productos);

// //unshift agrega un elemento al inicio del arreglo
// productos.unshift("granola");
// console.log(productos);

// //pop quitar el último elemento del arreglo
// productos.pop();
// console.log(productos);

// //shift quitar el primer elemento del arreglo
// productos.shift();
// console.log(productos);

// const productos = ["mate", "cafe", "carne", "chocolate"];
//splice elimina uno o varios elementos en cualquier posicion
// productos.splice(1, 2);
// console.log(productos);

//join une en un solo string todos los elementos del arreglo separados por el parametro
// console.log(productos.join("====="));

//concat une dos arreglos en uno solo
// const numeros = [4, 45, 7, 8, 9];
// const varios = productos.concat(numeros);

// console.log(varios);

//slice crea una copia de un fragmento del arreglo
// const productos = ["mate", "cafe", "carne", "chocolate"];

// const copia = productos.slice(1, 2);
// console.log(copia);

// const productos = ["mate", "cafe", "carne", "chocolate"];
//indexOf buscar a posicion de un elmento del arreglo
// console.log(productos.indexOf("chocolate"));
// console.log(productos.indexOf("chocolateasfasdf"));

//includes verifica la existencia de un elemento dentro del arreglo
// console.log(productos.includes("chocolate"));
// console.log(productos.includes("chocolateasdf"));

// let nombre = prompt("Ingrese el producto a verificar su existencia");

// if (productos.includes(nombre)) {
//   alert("Producto disponible");
// } else {
//   alert("Producto no disponible");
// }

//reverse invierte el orden de los elementos del arreglo
// productos.reverse();
// console.log(productos);

// const productos = ["mate","carne", "chocolate"];

// const elminarPorNombre = (nombre) => {
//   let index = productos.indexOf(nombre);

//   if (index != -1) {
//     productos.splice(index, 1);
//     console.log(productos);
//   }
// };

// elminarPorNombre("carne");

// const objeto = {
//   nombre: "juan",
//   edad: 34,
// };

// const personas = [objeto, { nombre: "andres", edad: 27 }];
// console.log(personas);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 700 },
//   { id: 3, nombre: "media", precio: 1500 },
//   { id: 4, nombre: "zapato", precio: 350 },
// ];

// for(const item of productos){
//   console.log(item.nombre);
//   console.log(item.precio);
// }

// const productos = [];

// for (let i = 0; i < 3; i++) {
//   let nombre = prompt("Ingrese el nombre del producto a agregar");
//   let precio = Number(prompt("Ingrese el precio del producto"));

//   let producto = {
//     nombre,
//     precio,
//   };

//   productos.push(producto);
// }

// console.log(productos);

// class Producto {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//   }
// }

// const productos = [];

// for (let i = 0; i < 3; i++) {
//   let nombre = prompt("Ingrese el nombre del producto a agregar");
//   let precio = Number(prompt("Ingrese el precio del producto"));

//   let producto = new Producto(nombre, precio);

//   productos.push(producto);
// }

// console.log(productos);

// const productos = [
//   { nombre: "asd", precio: 1000 },
//   { nombre: "asdf", precio: 500 },
//   { nombre: "asdf", precio: 100 },
// ];

// let nombre = "asd";

// for(const item of productos){
//   if(item.nombre === nombre){
//     console.log(item);
//   }
// }