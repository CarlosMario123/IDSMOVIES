import { mostrarModal } from "./modal.js";
export function crearCards(url,contenido,starts,info){
    // Crear un elemento div para la tarjeta
    const card = document.createElement("div");
    
    card.className = "card"; // Aplicar la clase CSS "card" para dar estilo
   
    // Crear elementos para el contenido de la tarjeta
    const divImg = document.createElement("div");
    const imagen = document.createElement("img");
    imagen.src =  url;//añadir url
    divImg.appendChild(imagen);
  
  
  
    const descripcion = document.createElement("p");
    descripcion.textContent = contenido;
  
    const ranking = document.createElement("p");
    ranking.textContent= starts + " ⭐";
  
    const contain = document.createElement("div");
    contain.classList="contenedor";
    contain.appendChild(descripcion);
    contain.appendChild(ranking)
   
    // Agregar los elementos al DOM de la carta
    card.appendChild(divImg);
    card.appendChild(contain);
  
    
    card.addEventListener("click", function(e) {
        e.preventDefault();
        let catalogo = document.getElementById("catalogo");
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Para un desplazamiento suave
        });
        mostrarModal(url,info,starts)
        catalogo.style.display = "none"
    });
   
    return card;
   
   }