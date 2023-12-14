//funciones de alto orden
//retornar funciones

// function mayorQue(n) {
//   return (m) => m > n;
// }

// const mayorQueCinco = m => m > 5;
// console.log(mayorQueCinco(6));
// console.log(mayorQueCinco(3));

// const mayorQueDiez = mayorQue(10); //m => m > 10
// console.log(mayorQueDiez(11));
// console.log(mayorQueDiez(9));

// function operacionesBasicas(operacion) {
//   if (operacion === "restar") {
//     return (x, y) => x - y;
//   }

//   if (operacion === "sumar") {
//     return (x, y) => x + y;
//   }

//   if (operacion === "multiplicar") {
//     return (x, y) => x * y;
//   }

//   if (operacion === "dividir") {
//     return (x, y) => x / y;
//   }
// }

// const sumar = operacionesBasicas("sumar"); //(x, y) => x + y;
// console.log(sumar(5, 6));

// console.log(operacionesBasicas("sumar")(5, 6));

//recibir funciones por parámetro
// const iterar = (arreglo, fc) => {
//   for (const iterator of arreglo) {
//     fc(iterator);
//   }
// };

// iterar([3, 4, 5, 7, 8], console.log);

//Métodos de búsqueda y transformación
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "media", precio: 1000 },
//   { id: 3, nombre: "zapato", precio: 1000 },
//   { id: 4, nombre: "gorra", precio: 1000 },
// ];

//forEach recorre los elementos de un arreglo
// productos.forEach((item) => {
//   alert(`
//     Id: ${item.id}
//     Nombre: ${item.nombre}
//     Precio: ${item.precio}
//   `);
// });

//find encontrar el primer elemento que cumpla la propiedad
// let nombre = prompt("Ingrese el nombre del producto a buscar");
// const producto = productos.find((item) => item.nombre === nombre);

// if (producto) {
//   alert(`
//     Id: ${producto.id}
//     Nombre: ${producto.nombre}
//     Precio: ${producto.precio}
//   `);
// } else {
//   alert("Producto no encontrado");
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "media", precio: 700 },
//   { id: 3, nombre: "zapato", precio: 350 },
//   { id: 4, nombre: "gorra", precio: 177 },
// ];

//filter filtra todos los elementos del arreglo que cumplan la condición dada
// let precio = Number(prompt("Ingrese el precio mínimo del producto"));
// let filtrados = productos.filter((item) => item.precio > precio);

// filtrados.forEach((item) => {
//   alert(`
//     Id: ${item.id}
//     Nombre: ${item.nombre}
//     Precio: ${item.precio}
//   `);
// });

//some verifica si existe al menos un elemento dentro del arreglo que cumpla la condición dada
// console.log(productos.some((item) => item.nombre == "camisa"));
// console.log(productos.some((item) => item.nombre == "pantalon"));

//map transformar o modificar el arreglo
// const precios = productos.map((item) => item.precio);
// console.log(precios);

// const nombres = productos.map(item => item.nombre);
// console.log(nombres);

// const preciosNavidad = productos.map((item) => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21,
//   };
// });

// console.log(preciosNavidad);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "media", precio: 700 },
//   { id: 3, nombre: "zapato", precio: 350 },
//   { id: 4, nombre: "gorra", precio: 177 },
// ];

//reduce reduce un arreglo a un único valor
// const numeros = [1, 2, 354, 6, 7];
// let total = numeros.reduce((acum, item) => acum + item, 0);
// console.log(total);

// let total = productos.reduce((acum, item) => acum + item.precio, 0);
// console.log(total);

//sort ordena un arreglo
// const numeros = [ 40, 1, 5, 200 ];
// console.log(numeros.sort((a, b) => a - b));  // [ 1, 5, 40, 200 ]
// console.log(numeros.sort((a, b) => b - a));  // [ 200, 40, 5, 1 ]

const items = [
  { name: "Pikachu", price: 21 },
  { name: "Charmander", price: 37 },
  { name: "Pidgey", price: 45 },
  { name: "Squirtle", price: 60 },
];

console.log(
  items.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    // a es igual a b
    return 0;
  })
);
