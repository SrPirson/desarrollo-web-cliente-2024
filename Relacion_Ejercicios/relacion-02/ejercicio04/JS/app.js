let avanzar = document.getElementById("avanzar");
let retroceder = document.getElementById("retroceder");

avanzar.addEventListener("click", avanzarIMG);
retroceder.addEventListener("click", retrocederIMG);

let imagen = document.getElementById("foto");
let url = "./IMG/";
let imagenes = [url+"c.jpg", url+"c2.jpg", url+"cls.jpg", url+"ml.jpg", url+"leon.jpg"];
console.log(imagenes);
let contador = 0;

if (contador == 0) {
    retroceder.disabled = true;
}

function avanzarIMG() {
    if (contador < imagenes.length-1) {
        contador += 1;
        imagen.src = imagenes[contador];
        retroceder.disabled = false;
    }
    if (contador == imagenes.length-1) {
        avanzar.disabled = true;
    }
}

function retrocederIMG() {
    if (contador > 0) {
        contador -= 1;
        imagen.src = imagenes[contador];
        avanzar.disabled = false;
    }
    if (contador == 0) {
        retroceder.disabled = true;
    }
        
}

