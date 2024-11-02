let perrete = document.querySelector("img");

perrete.addEventListener("mouseover", rollover);
perrete.addEventListener("mouseout", salir);

function rollover() {
    perrete.src = "./IMG/guinio.jpg";
}

function salir() {
    perrete.src = "./IMG/sin-guinio.jpg";
}