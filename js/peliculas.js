import { crearCards } from "./carta.js";

const head = document.getElementById("head");
const menu = document.getElementById("menu-b");
const exit_o = document.getElementById("exit-o");

menu.addEventListener("click", (e) => {
  e.preventDefault();
  const opciones = document.getElementById("opciones");
  opciones.style.display = "flex";

  head.style.visibility = "hidden";
});

exit_o.addEventListener("click", (e) => {
  e.preventDefault();
  const opciones = document.getElementById("opciones");
  opciones.style.display = "none";

  head.style.visibility = "visible";
});

navbar()
peliculas()
function navbar() {
    const links = document.getElementById("links");
    const nombresEnlaces = [
      "inicio",
      "Pelicula",
      "Serie",
      "Popular",
    ];

    let rutas =[
      "/index.html","../vistas/peliculas.html","../vistas/series.html","../vistas/popular.html"];
  
    for (let i = 0; i < nombresEnlaces.length; i++) {
      // Crear un nuevo elemento a para cada enlace
      const enlace = document.createElement("a");
  
      enlace.innerHTML = nombresEnlaces[i];
      enlace.style.color = "white";
      enlace.href = rutas[i];
  
      links.appendChild(enlace);
    }
  }

//funcion para crear pelicula
function peliculas() {
  fetch("http://127.0.0.1:5000/solopelis")
    .then((response) => response.json())
    .then((data) => {
      const catalogo = document.getElementById("v-peli");
      data.forEach((item) => {
        const carta = crearCards(
          item.url,
          item.nombre,
          item.ranking,
          item.descripcion
        );
        catalogo.appendChild(carta);
      });
    })
    .catch((error) => console.error("Error:", error));
}
