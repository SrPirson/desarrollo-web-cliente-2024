let mostrar = document.getElementById("muestra"); // obtengo el elemento boton
console.log(mostrar);

mostrar.addEventListener("click", mostrarURL);

let enlace = document.getElementById("enlace"); // obtengo el elemento a
let url = enlace.getAttribute("href"); // obtengo el atributo href del elemento a
let nombreURL = enlace.innerHTML; // obtengo el contenido del elemento a

function mostrarURL() {
    alert("URL: " + url + " Nombre: " + nombreURL);
}

let cambiar = document.getElementById("cambiar");
console.log(cambiar);

cambiar.addEventListener("click", cambiarURL);

function cambiarURL() {
    enlace.setAttribute("href", "https://medac.es/"); // cambio la url
    enlace.innerHTML = "He cambiado"; // cambio el contenido del elemento
    url = enlace.getAttribute("href"); // obtengo de nuevo la url
    nombreURL = enlace.innerHTML; // obtengo de nuevo el contenido

    alert("URL: " + url + " Nombre: " + nombreURL);
}
