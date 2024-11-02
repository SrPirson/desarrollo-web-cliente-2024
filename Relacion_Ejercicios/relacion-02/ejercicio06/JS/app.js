let botones = document.querySelectorAll("button");

let botonRojo, botonAzul, botonVerde, botonMorado, botonRosa;

for (let boton of botones) {
    if (boton.value == "rojo") {
        botonRojo = boton;
    } else if (boton.value == "azul") {
        botonAzul = boton;
    } else if (boton.value == "verde") {
        botonVerde = boton;
    } else if (boton.value == "morado") {
        botonMorado = boton;
    } else if (boton.value == "rosa") {
        botonRosa = boton;
    }
}

botonRojo.addEventListener("click", fondoRojo);
botonAzul.addEventListener("click", fondoAzul);
botonVerde.addEventListener("click", fondoVerde);
botonMorado.addEventListener("click", fondoMorado);
botonRosa.addEventListener("click", fondoRosa);

let body = document.querySelector("body");

function fondoRojo(){
    body.style.backgroundColor = botonRojo.style.backgroundColor;
}

function fondoAzul(){
    body.style.backgroundColor = botonAzul.style.backgroundColor;
}

function fondoVerde(){
    body.style.backgroundColor = botonVerde.style.backgroundColor;
}

function fondoMorado(){
    body.style.backgroundColor = botonMorado.style.backgroundColor;
}

function fondoRosa(){
    body.style.backgroundColor = botonRosa.style.backgroundColor;
}