let parrafo = document.querySelector("p");
console.log(parrafo);

parrafo.addEventListener("click", cambiaClase);

function cambiaClase() {
    // Cambia entre las clases "uno" y "dos"
    parrafo.classList.toggle("uno");
    parrafo.classList.toggle("dos");
}