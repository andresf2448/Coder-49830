//fetch(url, config);
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response[0].title);
//     console.log(response[0].body);
//   });

// let listado = document.getElementById("listado");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((response) => {
//     response.forEach((publicacion) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>${publicacion.title}</h2>
//         <p>${publicacion.body}</p>
//       `;

//       listado.append(li);
//     });
//   });

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Mi primera publicacion",
//     body: "Primera publicacion de coder",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// const listado = document.getElementById("listado");

// fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((producto) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//           <h4>${producto.nombre}</h4>
//           <p>${producto.precio}</p>
//           <p>Código: ${producto.id}</p>
//           <hr/>
//       `;

//       listado.append(li);
//     });
//   });

const listado = document.getElementById("listado");

const pedirDatos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((post) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.body}</p>
    `;
    listado.append(li);
  });
};

pedirDatos();
