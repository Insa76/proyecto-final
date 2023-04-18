fetch("https://rickandmortyapi.com/api/character")
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    console.log(data.results);
    const personajes = data.results;
    const $contenedor = document.getElementById("contenedor-grid");
    for (let i = 0; i < personajes.length; i++) {
      $contenedor.innerHTML += `
        <div class ="grid-item">
        <img src="${personajes[i].image}" >
        <p class ="nombre-personaje">${personajes[i].name}</p>
        <p>Genero: ${personajes[i].gender}</p>
        <p>Especie: ${personajes[i].species}</p>
        <p>Estado: ${personajes[i].status}</p>
        </div>
        `;
    }
  });
