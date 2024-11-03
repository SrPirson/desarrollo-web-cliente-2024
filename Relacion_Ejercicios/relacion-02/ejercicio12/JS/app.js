let imagen = document.getElementById("imagen");
console.log(imagen.src);

let izq = document.getElementById("izquierda");
let dch = document.getElementById("derecha");

izq.addEventListener("click", moverIzq);
dch.addEventListener("click", moverDch);

let posicion = imagen.offsetLeft;
console.log(posicion);

console.log(window.innerHeight);
    console.log(window.innerWidth - imagen.offsetWidth - 10);

function moverIzq() {
    if (posicion > 10) {
        imagen.style.left = (posicion - 5) + "px";
        posicion = imagen.offsetLeft;
        console.log(posicion)
    }
    
}

function moverDch() {
    if (posicion < (window.innerWidth - imagen.offsetWidth - 10)) {
        imagen.style.left = (posicion + 5) + "px";
        posicion = imagen.offsetLeft;
        console.log(posicion)
    }

}