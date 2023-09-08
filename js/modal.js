// Función para mostrar el modal
export function mostrarModal(url,parrafo,ranking) {
    console.log(ranking)
    // Crea el div del modal
    const modal = document.createElement("div");
    modal.id = "mi-modal";
    modal.className = "modal";

    // Crea el contenido del modal
    const contenido = document.createElement("div");
    contenido.className = "modal-contenido";

    // Crea el botón de cierre (×)
    const cerrar = document.createElement("span");
    cerrar.className = "cerrar";
    cerrar.textContent = "×";
    cerrar.onclick = cerrarModal;

    // Crea el contenido del modal
    const imagen = document.createElement("img");
    imagen.className = "imagenModal"
    imagen.src = url;


    const texto = document.createElement("p");
    texto.className = "textoModal"
    texto.innerHTML = parrafo;

    const resena = document.createElement("div");
    resena.className = "resena";

    const starts = document.createElement("p");
    starts.className="start";
    starts.innerHTML= ranking + ' ⭐';

    const agrupar = document.createElement("div");
    agrupar.className = "agrupar";
    agrupar.appendChild(texto);
    agrupar.appendChild(starts);
    //resena.appendChild(starts);
    //resena.appendChild(texto);
    resena.appendChild(agrupar);
    resena.appendChild(imagen);
    
    // Agrega los elementos al modal
    contenido.appendChild(cerrar);
    contenido.appendChild(resena)
    modal.appendChild(contenido);

    // Agrega el modal al cuerpo del documento
    document.body.appendChild(modal);
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById("mi-modal");
    if (modal) {
        modal.parentNode.removeChild(modal);
        let catalogo = document.getElementById("catalogo");
        catalogo.style.display = "flex";
    }
}
