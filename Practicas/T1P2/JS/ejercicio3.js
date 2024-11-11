let agregar = document.getElementById("btnAgregarDivImagen");
let resetear = document.getElementById("btnResetearSeccion");
let seccion = document.getElementById("seccionDinamica");

agregar.addEventListener("click", addImg);

function addImg() {
    let titulo = prompt("Indique un titulo", "Titulo X");
    let imagen = prompt("Indique la ruta de la imagen", "./img/foto1.jpg");
    let url = prompt("Indique la URL de la imagen", "https://ejemplo.com/");

    let crearDiv = document.createElement("div");
    let crearH = document.createElement("h2");
    let crearImg = document.createElement("img");
    let crearA = document.createElement("a");

    crearDiv.className = "caja";
    crearH.innerHTML = titulo;
    crearImg.src = imagen;
    crearA.href = url
    crearA.innerHTML = "Ver más";

    crearDiv.appendChild(crearH);
    crearDiv.appendChild(crearImg);
    crearDiv.appendChild(crearA);
    seccion.appendChild(crearDiv);
}

resetear.addEventListener("click", clearAll);

function clearAll() {
    let totalDivs = document.getElementsByClassName("caja");
    while (totalDivs.length > 0) {
        totalDivs[0].remove();
    }
}