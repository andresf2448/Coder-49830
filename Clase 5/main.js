// let nombre = "pepito";
// let edad = 67;
// let direccion = "AV";

/* 
estructura de un objeto

{clave1: valor1, clave2: valor2, ..., claven: valorn};
*/

// let persona = { nombre: "pepito", edad: 67, direccion: "Av" };

// let clave1 = "nombre";
// console.log(persona.clave1);
// console.log(persona.edad);
// console.log(persona.direccion);

// let clave = "nombre";
// console.log(persona[clave]);
// console.log(persona["edad"]);
// console.log(persona["direccion"]);

// let clave = prompt("Ingrese la clave para ver su respectivo valor");
// alert(persona[clave]);

// const persona = { nombre: "pepito", edad: 67, direccion: "Av" };
// // console.log(persona);
// persona.nombre = "juanita";
// persona["edad"] = 56;
// console.log(persona);

// persona.madre = "carlota";
// persona["padre"] = "carlos";

// console.log(persona);

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// const persona1 = new Persona("pepito", 34, "AV");
// const persona2 = new Persona("juanita", 34, "AV1");
// console.log(persona1.nombre);
// console.log(persona2.nombre);

// function Persona(info) {
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
//   this.altura = info.altura;
//   this.peso = info.peso;
// }

// const persona1 = new Persona({
//   direccion: "AV",
//   altura: 180,
//   peso: 34,
//   edad: 23,
//   nombre: "pepito",
// });

// let persona = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
// };

// for (const clave in persona) {
//   console.log(clave);
//   console.log("Valor asociado", persona[clave]);
// }

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.hablar = function () {
//     console.log(`Hola soy ${this.nombre}`);
//   };
// }

// const persona1 = new Persona("pepito", 34, "AV");
// persona1.hablar();

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.hablar = function () {
//     console.log(`Hola soy ${this.nombre}`);
//   };
// }

// class Persona {
//   constructor(nombre, edad, direccion) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }

//   hablar(){
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("pepito", 34, "AV");
// persona1.hablar();

// class Producto {
//   constructor(nombre, precio, imagen) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//   }
// }

// const producto1 = new Producto(
//   "RECOMENDADO Monitor Led De 24 Con Panel Ips Y Diseño Si",
//   536200,
//   "htpp:asdfjlkgshf"
// );

// const producto2 = new Producto(
//   "Monitor Curvo 27 Fhd Diseño Sin Bordes Colo",
//   707941,
//   "htpp://alskjdfh"
// );

// class Producto {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.vendido = false;
//   }

//   vender() {
//     this.vendido = true;
//   }
// }

// const producto1 = new Producto("monitor", 1234);
// console.log(producto1);
// producto1.vender();
// console.log(producto1);

class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  vender() {
    //this.cantidad = this.cantidad - 1
    this.cantidad -= 1;
  }
}

const producto1 = new Producto("monitor", 1234, 5);
console.log(producto1);
producto1.vender();
console.log(producto1);
producto1.vender();
console.log(producto1);