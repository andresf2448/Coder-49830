//operador ++

// let numero = 1;
// numero = numero + 1;
// numero += 1;
// numero++;

//operador ternario
/* 
estructura del operador ternario

condicion ? codigo cuando la condicion es verdadera : codigo cuando la condicion es falsa;
*/

/* let edad = 12;

if(edad >= 18){
  console.log("Eres mayor de edad");
}else{
  console.log("Eres menor de edad");
} */

// let edad = 24;
// edad >= 18 ? console.log("Eres mayor de edad") : console.log("Eres menor de edad");

// let temperatura = 10;

// if (temperatura > 30) {
//   console.log("Día caluroso");
// } else {
//   console.log("Dia agradable");
// }

// let temperatura = 10;

// temperatura > 30 ? console.log("Día caluroso") : console.log("Dia agradable");

// let permiso;
// const usuario = {
//   nombre: "juan",
//   edad: 10,
// };

// if (usuario.edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if (permiso) {
//   console.log("Puedes entrar a al fiesta");
// } else {
//   console.log("No puedes entrar a la fiesta");
// }

// const usuario = {
//   nombre: "juan",
//   edad: 56,
// };

// const permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("puedes entrar a la fiesta") : console.log("no puedes entrar a la fiesta");

/* 
operador1 && operador2 retorna operador2 si operado1 es verdadero, en caso contrario retorna operador1
si operador1 entonces operador2

operador1 || operador2 retorna operador1 si este es verdadero, en caso contrario retorna operador2
si operador1 entonces operador1
*/

//&&
// const carrito = [];

// if(carrito.length === 0){
//   console.log("El carrito está vacio");
// }

// carrito.length === 0 && console.log("El carrito está vacío");

// const usuario = {
//   nombre: "andres",
//   edad: 10,
// };

// const registro = usuario.edad >= 18 && new Date();
// console.log(registro);

//||
// console.log(0 || "Falsy"); //falsy
// console.log(40 || "Falsy"); //40
// console.log(null || "Falsy"); //falsy
// console.log(undefined || "Falsy"); //falsy
// console.log("Hola Mundo" || "Falsy"); //hola mundo
// console.log("" || "Falsy"); //falsy
// console.log(NaN || "Falsy"); //falsy
// console.log(true || "Falsy"); //true
// console.log(false || "Falsy"); //false

// const usuario = {
//   nombre: "andres",
//   edad: 10,
// };

// const usuario1 = null;

// console.log(usuario || "El usuario no existe");
// console.log(usuario1 || "El usuario no existe");

// let carrito;
// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if (carritoStorage) {
//   carrito = carritoStorage;
// } else {
//   carrito = [];
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//ACCESO CONDICIONAL A UN OBJETO
// const usuario = null;

// console.log(usuario?.nombre || "El usuario no existe");

// const usuario = {
//   nombre: "juan",
//   edad: 44,
//   cursos: {
//     javascript: "aprobado",
//   },
// };

// console.log(usuario?.cursos?.javascript || "La propiedad no existe");
// console.log(usuario?.trabajos?.coderhouse || "La propiedad no existe");

//DESESTRUCTURACION
// const usuario = {
//   nombre: "juan",
//   edad: 44,
//   direccion: "AV",
//   cursos: {
//     javascript: "aprobado",
//   },
// };

// let nombre = usuario.nombre;
// let edad = usuario.edad;
// let direccion = usuario.direccion;

// const { nombre, edad, direccion } = usuario;
// console.log(nombre, edad, direccion);

// const usuario = {
//   nombre: "juan",
//   edad: 44,
//   direccion: "AV",
//   telefonos: {
//     cel: 1234,
//     casa: null,
//     trabajo: 345786,
//   },
// };

// //ALIAS
// const {
//   nombre: nombrePersona,
//   telefonos: { trabajo: numerotrabajo },
// } = usuario;

// console.log(nombrePersona, numerotrabajo);

//DESESTRUCTURACION EN PARAMETROS
// const desestructurar = (usuario) => {
//   //la funcion recibe un objeto y sacamos cada una de sus propiedades
//   const nombre = usuario.nombre;
//   const edad = usuario.edad;

//   console.log(nombre, edad);
// };

// const usuario = {
//   nombre: "pepito",
//   edad: 56,
//   direccion: "AV"
// };

// desestructurar(usuario);

// const desestructurar = ({nombre, edad, direccion}) => {
//   console.log(nombre, edad, direccion);
// };

// const usuario = {
//   nombre: "pepito",
//   edad: 56,
//   direccion: "AV",
// };

// desestructurar(usuario);

// const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];
// const [a, , b] = nombres;

// console.log(a);
// console.log(b);

const usuarios = [
  { id: 1, nombre: "camila", edad: 45 },
  { id: 2, nombre: "andres", edad: 45 },
  { id: 3, nombre: "carlitos", edad: 45 },
  { id: 4, nombre: "pedrito", edad: 45 },
];

usuarios.forEach(({ nombre, edad }) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Nombre: ${nombre}</h2>
    <p>Edad: ${edad}</p>
  `;
});
