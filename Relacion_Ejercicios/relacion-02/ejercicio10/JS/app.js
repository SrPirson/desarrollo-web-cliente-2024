let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");

uno.addEventListener("mouseover", function() {
    cambiarFondo(this);
});
dos.addEventListener("mouseover", function() {
    cambiarFondo(this);
});
tres.addEventListener("mouseover", function() {
    cambiarFondo(this);
});

uno.addEventListener("mouseout", salir);
dos.addEventListener("mouseout", salir);
tres.addEventListener("mouseout", salir);

let body = document.querySelector("body");
function cambiarFondo(caja) {
    let colorFondo = window.getComputedStyle(caja).backgroundColor; // obtener el fondo de this
    body.style.backgroundColor = colorFondo;
}

function salir() {
    body.style.backgroundColor = "";
}