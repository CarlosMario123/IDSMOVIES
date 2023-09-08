import { getImagenes } from "./js/banner.js";
import { crearCards } from "./js/carta.js";
let incremento = -1;
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

navbar();
peliculas();

setInterval(() => {
  //controla el cambio de imagen en el banner

  let arreglo = getImagenes();
  const banner = document.getElementById("banner");

  incremento = incremento + 1;
  if (incremento == 4) {
    incremento = 0;
  }

  banner.style.backgroundImage = `url(${arreglo[incremento]})`;
  console.log(incremento);
}, 3000);

export function navbar() {
  const links = document.getElementById("links");
  const nombresEnlaces = [
    "inicio",
    "Pelicula",
    "Serie",
    "Popular"
  ];
  let rutas =[
    "/index.html","/vistas/peliculas.html","/vistas/series.html","/vistas/popular.html"];

  for (let i = 0; i < nombresEnlaces.length; i++) {
  
    
    // Crear un nuevo elemento a para cada enlace
    const enlace = document.createElement("a");

    enlace.innerHTML = nombresEnlaces[i];
    enlace.style.color = "white";
    enlace.href = rutas[i]
    links.appendChild(enlace);
  }
}

function peliculas() {
  let url1 = "https://pics.filmaffinity.com/Last_Days-140982533-large.jpg";
  let info = `Empequeñecido por los grandes árboles, Blake se adentra en el denso bosque. 
  Camina hacia una orilla, se desnuda y se baña. La mañana siguiente vuelve a casa, una elegante aunque descuidada mansión.
  Mucha gente le busca, sus amigos, sus managers y su discográfica, e incluso un 
  detective privado, pero él no quiere que le encuentren. Entre la niebla de sus
   últimas horas, Blake pasará casi todo el tiempo solo. Evita a la gente que vive en su casa, que 
   sólo se acercan a él cuando necesitan algo, ya sea dinero o ayuda con alguna canción. Vaga por los bosques y toca una 
   nueva melodía, una
   última explosión de rock and roll. Finalmente, solo en el invernadero, Blake 
   mirará, escuchará y buscará la liberación.
  Aunque esta película está inspirada sobre el alma en transición en los últimos días de la 
  vida de Kurt Cobain, es una obra de ficción y los hechos y personajes reflejados son ficticios`;

  const carta = crearCards(url1, "Last day", 5, info);
  const catalogo = document.getElementById("catalogo");
  catalogo.appendChild(carta);

  fetch("http://127.0.0.1:5000/peliculas")
    .then((response) => response.json())
    .then((data) => {
      const catalogo = document.getElementById("catalogo");
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
