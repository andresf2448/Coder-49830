//Propiedades del objeto Math
//constantes
// console.log(Math.E);
// console.log(Math.PI);

//Mínimos y Máximos
// console.log(Math.max(3, 4, 56, 7, 89, 876, 53, 4));
// console.log(Math.min(3, 4, 56, 7, 89, 876, 53, 4));
// console.log(Math.max(3, 4, 56, 7, Infinity, 89, 876, 53, 4));
// console.log(Math.min(3, 4, 56, 7, 89, -Infinity, 876, 53, 4));

//Aproximaciones
// console.log(Math.ceil(3.12)); //aproxima al entero más cercano hacia arriba
// console.log(Math.ceil(3.7));
// console.log(Math.floor(3.7)); //aproxima al entero más cercano hacia abajo
// console.log(Math.floor(3.1));
// console.log(Math.round(3.7)); //aproxima al enterno más cercano
// console.log(Math.round(3.4));
// console.log(Math.round(3.5));

//raíz cuadrada
// console.log(Math.sqrt(9));
// console.log(Math.sqrt(2));
// console.log(Math.sqrt(1));
// console.log(Math.sqrt(-1));

//Números aleatorios
//0 - 1
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

//0 - 10
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));

// Math.round(Math.random() * amplitud + desplazamiento);

//7 - 20
// console.log(Math.round(Math.random() * 13 + 7));
// console.log(Math.round(Math.random() * 13 + 7));
// console.log(Math.round(Math.random() * 13 + 7));
// console.log(Math.round(Math.random() * 13 + 7));
// console.log(Math.round(Math.random() * 13 + 7));
// console.log(Math.round(Math.random() * 13 + 7));

//17 - 35
// console.log(Math.round(Math.random() * 18 + 17));
// console.log(Math.round(Math.random() * 18 + 17));
// console.log(Math.round(Math.random() * 18 + 17));
// console.log(Math.round(Math.random() * 18 + 17));
// console.log(Math.round(Math.random() * 18 + 17));

// const generarAleatorio = (amplitud, desplazamiento) => {
//   return Math.round(Math.random() * amplitud + desplazamiento);
// };

// console.log(generarAleatorio(3, 17));
// console.log(generarAleatorio(3, 17));
// console.log(generarAleatorio(3, 17));
// console.log(generarAleatorio(3, 17));
// console.log(generarAleatorio(3, 17));

//dado un arreglo de nombres, crear una función que genere un nombre aleatorio
//dado un arreglo de premios, crear una función que genere un premio aleatorio

//al ejecutar ambas funciones me debe mostrar aleatoriamente la persona y el premio que ha ganado
// const nombres = ["juanita", "pedrito", "andres", "carlitos", "marina"];
// const premios = ["celular", "carro", "ropa", "computador"];

// const generarNombreAleatorio = () => {
//   let indice = Math.floor(Math.random() * nombres.length);

//   return nombres[indice];
// };

// const generarPremioAleatorio = () => {
//   let indice = Math.floor(Math.random() * premios.length);

//   return premios[indice];
// };

// for (let i = 0; i < 4; i++) {
//   alert(
//     `Ganador ${generarNombreAleatorio()} Premio: ${generarPremioAleatorio()}`
//   );
// }

//DATE
// console.log(Date());
// console.log(new Date(2023, 11, 19, 10, 10, 10));

// const navidad = new Date("December 24, 2023 23:59:59");
// console.log(navidad);
// console.log(navidad.toDateString());
// console.log(navidad.toLocaleString());
// console.log(navidad.toLocaleDateString());
// console.log(navidad.toTimeString());
// console.log(navidad.getFullYear());
// console.log(navidad.getMonth());
// console.log(navidad.getDay());

const navidad = new Date("December 24, 2023");
const hoy = new Date("December 19, 2023");
console.log(navidad - hoy);

const milisegundoPorDia = 86400000;
console.log((navidad - hoy) / milisegundoPorDia);
