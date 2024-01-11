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

const producto1 = {
  id: 1,
  nombre: "camisa",
  precio: 1000,
};

const producto2 = {
  id: 1,
  nombre: "camisa",
  precio: 1000,
};

const producto3 = {
  id: 1,
  nombre: "camisa",
  precio: 1000,
};

const producto4 = {
  id: 1,
  nombre: "camisa",
  precio: 1000,
};

const renderizarProductos = (...productos) => {
  productos.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
        <h1>id: ${item.id}</h1>
        <p>nombre: ${item.nombre}</p>
        <p>precio: ${item.precio}</p>
        `;
    document.body.append(div);
  });
};

renderizarProductos(producto1, producto2, producto3, producto4);
