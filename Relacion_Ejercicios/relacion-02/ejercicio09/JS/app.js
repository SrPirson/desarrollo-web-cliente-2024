let texto = document.querySelector("p");

console.log(texto);

let fondo = "rgb(185, 137, 230)";
let color = "wheat";
let borde = "3px solid rgb(201, 154, 67)";
let width = "15%";
let height = "50%";
let padding = "10px";
let textAlign = "justify";

texto.style.backgroundColor = fondo;
texto.style.color = color;
texto.style.border = borde;
texto.style.width = width;
texto.style.height = height;
texto.style.padding = padding;
texto.style.textAlign = textAlign;

texto.addEventListener("click", cambiarColor);

let estado = true;
function cambiarColor() {
    if (estado) {
        texto.style.backgroundColor = "rgb(201, 154, 67)";
        texto.style.color = "rgb(117, 51, 179)"; 
        texto.style.border = "3px solid rgb(185, 137, 230)";
        estado = false;
    } else {
        texto.style.backgroundColor = fondo;
        texto.style.color = color;
        texto.style.border = borde;
        estado = true;
    }
}