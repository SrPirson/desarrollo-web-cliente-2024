let mensaje = document.getElementById("contenido");
let ocultar = document.getElementById("oculto");

ocultar.addEventListener("click", cambiarEstado);

function cambiarEstado() {
    if (mensaje.style.visibility == "visible") {
        mensaje.style.visibility = "hidden";
        ocultar.innerHTML = "Mostrar";
    } else {
        mensaje.style.visibility = "visible";
        ocultar.innerHTML = "Ocultar";
    }
    
}