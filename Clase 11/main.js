//STORAGE

//localStorage
// console.log(localStorage);

//setItem(clave, valor); para guardar un elemento en el storage
// localStorage.setItem("nombre", "andres");
// localStorage.setItem("valor", true);
// localStorage.setItem("numero", 5);

//getitem(clave); obtiene el valor asociado a la clave en el storage
// let nombre = localStorage.getItem("nombre");
// console.log(nombre);
// let valor = localStorage.getItem("valor");
// console.log(valor);
// let numero = localStorage.getItem("numero");
// console.log(numero);

// localStorage.setItem("objeto", { nombre: "pepito", edad: 67 });
// localStorage.setItem("arreglo", [4, 56, 78, 9]);

// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);
//   console.log(clave);
//   console.log(localStorage.getItem(clave));
// }

//Eliminar el storage
// localStorage.removeItem("nombre"); //Elimina solo la clave con su valor
// localStorage.clear(); //Elimina todo el storage

//sessionStorage
// console.log(sessionStorage);
// sessionStorage.setItem("nombre", "pepito");
// sessionStorage.setItem("valor", "false");
// sessionStorage.setItem("numero", "6");

// let nombre = sessionStorage.getItem("nombre");
// console.log(nombre);
// let valor = sessionStorage.getItem("valor");
// console.log(valor);
// let numero = sessionStorage.getItem("numero");
// console.log(numero);

// for (let i = 0; i < sessionStorage.length; i++) {
//   let clave = sessionStorage.key(i);
//   console.log(clave);
//   console.log(sessionStorage.getItem(clave));
// }

// sessionStorage.removeItem("nombre"); //Elimina solo la clave con su valor
// sessionStorage.clear(); //Elimina todo el storage

//RESUMEN
//La diferencia entre localStorage y sessionStorage es que
//el primero persiste la información cuando se
//recarga o cierra la página, se apaga o se reinicia el computador
//mientras que el segundo solo persiste la informacion cuando
//se recarga la página en los demás casos se borra