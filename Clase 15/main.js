//setTimeout(funcion, tiempo);

// setTimeout(() => {
//   console.log("Hola a todos");
// }, 3000);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 2000);

// console.log("Final");

// let boton = document.getElementById("boton");
// let mensaje = document.getElementById("mensaje");

// boton.addEventListener("click", () => {
//   mensaje.classList.add("color");

//   setTimeout(() => {
//     mensaje.classList.remove("color");
//   }, 4000);
// });

// for (let letra of "hola") {
//   setTimeout(() => {
//       console.log(letra)
//   }, 1000)
// }

// for (let letra of "mundo") {
//   setTimeout(() => {
//       console.log(letra)
//   }, 3000)
// }

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

// function multiply(x, y) {
//   return x * y;
// }

// function printSquare(x) {
//   let resultado = multiply(x, x);
//   console.log(resultado);
// }

// printSquare(5);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

//setInterval(funcion, tiempo);

// setInterval(() => {
//   console.log("Hola");
// }, 3000);

// let counter = 0;
// const interval = setInterval(() => {
//   counter++;
//   console.log("Counter: ", counter);

//   if (counter >= 5) {
//     clearInterval(interval);
//     console.log("Se removió el intervalo");
//   }
// }, 1000);

//PROMESAS
// new Promise((resolve, reject) => {
//   //cuerpo de la promesa
// })

// const futuro = (valor) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       valor
//         ? resolve(["carlitos", "pedrito", "juanita"])
//         : reject("Promesa rechazada");
//     }, 3000);
//   });
// };

// futuro(true)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Proceso finalizado"));

///////////////////////////////////////////////////////////////////////////////SERVIDOR
const BD = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "media", precio: 750 },
  { id: 3, nombre: "gorra", precio: 385 },
  { id: 4, nombre: "pantalon", precio: 486 },
];

const traerDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(BD);
      // reject("Intente luego");
    }, 3000);
  });
};
///////////////////////////////////////////////////////////////////////////////

traerDatos()
  .then((response) => {
    response.forEach((item) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <h1>Id: ${item.id}</h1>
        <p>Nombre: ${item.nombre}</p>
        <b>$${item.precio}</b>
      `;

      document.body.append(div);
    });
  })
  .catch((error) => {
    let div = document.createElement("div");
    div.innerHTML = error;

    document.body.append(div);
  });
