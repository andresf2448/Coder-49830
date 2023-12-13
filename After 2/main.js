// let respuesta = prompt("quieres comprar una planta");

// const calcularRespuesta = (servicio) => {
//   switch (servicio) {
//     case "a":
//       alert("El precio por unidad es 1000");
//       break;

//     case "b":
//       alert("El precio por unidad es 1300");
//       break;

//     case "c":
//       alert("El precio por unidad es 1500");
//       break;

//     default:
//       alert("producto no disponible");
//       break;
//   }
// };

// while (respuesta != "no") {
//   let servicio = prompt("Ingrese la planta que quieres comprar (a, b, c)");
//   calcularRespuesta(servicio);
//   respuesta = prompt("quieres comprar una planta");
// }

// alert("Gracias por ingresar a nuestra página");

const fechas = [
  { fecha: "20/12/2023", disponible: true },
  { fecha: "21/12/2023", disponible: true },
  { fecha: "22/12/2023", disponible: true },
  { fecha: "23/12/2023", disponible: true },
];

let respuesta = prompt("Quieres reservar una fecha?");

while (respuesta != "no") {
  let fecha = prompt("Ingrese la fecha que quiere reservar (DD/MM/AAAA)"); // 20/12/2023

  for (let i = 0; i < fechas.length; i++) {
    let item = fechas[i];

    if (item.fecha === fecha) {
      if (item.disponible) {
        fechas[i].disponible = false;
        alert("Reservaste la fecha");
      } else {
        alert("fecha no disponible");
      }
    }
  }

  respuesta = prompt("Quieres reservar una fecha?");
}

alert("Gracias por entrar a nuestra página");
