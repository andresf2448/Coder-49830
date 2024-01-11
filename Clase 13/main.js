//SPREAD OPERATOR
// const nombres = ["juan", "pedro", "carlitos"];

// console.log(nombres);
// console.log(...nombres);
// console.log(nombres.join(" "));

// const numeros = [2, 34, 56, 7, 8];

// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));

// const varios = [...nombres, ...numeros];
// console.log(varios);

//paso por valor
// let nombre1 = "juan";
// let nombre2 = nombre1;

// nombre2 = "carlitos";
// console.log(nombre1);

// const persona1 = {nombre: "juan", edad: 56};
// const persona2 = {...persona1};

// persona2.nombre = "carlitos";
// console.log(persona1);
// console.log(persona2);

// const usuario = {
//   nombre: "juan",
//   edad: 24,
//   curso: "Javascript",
// };

// const usuario2 = {
//   ...usuario,
//   edad: 45,
//   direccion: "AV",
// };

// console.log(usuario2);

//REST PARAMETERS
// const sumar = (...numeros) => {
//   console.log(numeros.reduce((acum, item) => acum + item, 0));
// };

// sumar(3, 56, 78, 9, 765, 43, 2);
// sumar(3, 4);

// const producto1 = {
//   id: 1,
//   nombre: "camisa",
//   precio: 1000,
// };

// const producto2 = {
//   id: 1,
//   nombre: "camisa",
//   precio: 1000,
// };

// const producto3 = {
//   id: 1,
//   nombre: "camisa",
//   precio: 1000,
// };

// const producto4 = {
//   id: 1,
//   nombre: "camisa",
//   precio: 1000,
// };

// const renderizarProductos = (...productos) => {
//   productos.forEach((item) => {
//     let div = document.createElement("div");

//     div.innerHTML = `
//         <h1>id: ${item.id}</h1>
//         <p>nombre: ${item.nombre}</p>
//         <p>precio: ${item.precio}</p>
//         `;

//     document.body.append(div);
//   });
// };

// renderizarProductos(producto1, producto2, producto3, producto4);

//REPASO
/* 
estructura del condicional if

if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}

if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}else{
  codigo a ejecutar en caso de que la condicion es falsa
}

if(condicion1){
  codigo a ejecutar en caso de que la condicion1 sea verdadera
}else if(condicion2){
  codigo a ejecutar en caso de que la condicion2 sea verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones es verdadera
}
*/

/* 
for(desde; hasta; actualizacion){
  codigo a repetir
}

while(condicion){
  codigo a repetir siempre que la condicion sea verdadera
}

do{
  codigo a ejecutar por primera vez y luego siempre que la condicion sea verdadera
}while(condicion);
*/

// let usuario = prompt("ingrese el usuario");

// while (usuario != "pepito") {
//   alert("Usuario incorrecto");
//   usuario = prompt("ingrese el usuario");
// }

/*
function nombreFuncion(parm1, parm2, ..., parmn){
  codigo a ejecutar por la funcion
}

nombreFuncion(valor1, ..., valorn);

const nombreFuncion = (parm1, ..., parmn) => {
  codgio a ejecutar por la funcion
}

nombreFuncion(valor1, ..., valorn);

//si no hay parametros se deben dejar los parentesis vacios
//si solo tenemos un parametro se pueden quitar los parentesis
//si quitamos las llaves y el return, la arrown function hace un return implicito
*/

/* 
Clases

class NombreClase{
  constructor(parm1, ..., parmn){
    this.clave1 = parm1;
    .
    .
    .
    this.claven = parmn;
  }

  metodo1(parm1, ..., parmn){
    codigo a ejecutar por el metodo1
  }

  .
  .
  .

  metodom(parm1, ..., parmn){
    codigo a ejecutar por el metodom
  }
}

const instancia1 = new NombreClase(valor1, ..., valorn);
*/

// class Usuario {
//   constructor(identificador, nombre, edad) {
//     this.identificador = identificador;
//     this.nombre = nombre;
//     this.edad = edad;
//     this.vigente = true;
//   }

//   renunciar() {
//     this.vigente = false;
//   }

//   renovarContrato() {
//     this.vigente = true;
//   }
// }

// const usuario1 = new Usuario("1xe", "juan", 45);

/////////////////////////////////////////////////////////////////////////////
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "media", precio: 750 },
//   { id: 3, nombre: "gorra", precio: 370 },
//   { id: 4, nombre: "zapato", precio: 852 },
// ];

// const carrito = []; //carrito para agregar los productos
// let boton = document.getElementById("ver-productos");

// //funcion para agregar al carrito
// const agregar = (id) => {
//   //buscamos el producto por su id
//   const producto = productos.find((item) => item.id === id);
//   // alert(`
//   //   Id: ${producto.id}
//   //   Nombre: ${producto.nombre}
//   //   Precio: ${producto.precio}
//   // `);
//   carrito.push(producto); //agregamos el producto al carrito
//   console.log(carrito);
// };

// productos.forEach((item) => {
//   let div = document.createElement("div");
//   //agregamos la información y el boton agregar
//   div.innerHTML = `
//     <h2>Id: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//     <button id="boton${item.id}">Agregar</button>
//   `;
//   document.body.append(div);

//   //obtenemos el boton en cuestion
//   let boton = document.getElementById(`boton${item.id}`);

//   //agregamos el addEventListener para cuando le demos click
//   boton.addEventListener("click", () => agregar(item.id));
// });

// boton.addEventListener("click", () => {
//   carrito.forEach((item) => {
//     let div = document.createElement("div");
//     //agregamos la información y el boton agregar
//     div.innerHTML = `
//     <h2>Id: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//   `;
//     document.body.append(div);
//   });
// });

////////////////////////////////////////////////////////////////////////
const productos = [];
let contenedor = document.getElementById("contenedor"); //contenedor para mostrar los productos creados
let formulario = document.getElementById("formulario");

//funcion para mostrar los productos creados
const renderizar = (productos) => {
  contenedor.innerHTML = ""; //eliminar el contenedor para que quede limpio antes de mostrar nuevamente los productos
  productos.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>ID: ${item.id}</h2>
      <p>Nombre: ${item.nombre}</p>
      <b>$${item.precio}</b>
    `;

    contenedor.append(div);
  });
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); //evitamos que se recargue el formulario

  let inputs = e.target.children; //sacamos los inputs
  let nombre = inputs[0].value; //sacamos el valor del nombre
  let precio = inputs[1].value; //sacamos el valor del precio

  //Math.max(...productos.map(item => item.id)) + 1
  productos.push({ id: productos.length + 1, nombre, precio }); //agregamos el producto a los arreglos
  renderizar(productos); //mostramos los productos
});
