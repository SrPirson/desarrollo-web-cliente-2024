console.log("javascript");

let creoAnuncio = document.getElementById("incluyeAnuncio");

creoAnuncio.addEventListener("click", incluirAnuncio);

function incluirAnuncio() {
    // Pedimos al usuario la url de la imagen y el enlace a incluir
    let rutaImagen = prompt("Dirección de la imagen", "./img/foto1.png");
    let urlEnlace = prompt("URL del enlace", "https://medac.es/");

    // Creamos un contenedor de tipo div para añadir los anuncios
    let nuevoHijo = document.createElement("div");

    // Creamos el enlace
    let enlace = document.createElement("a");
    // Añadimos el href al nodo a
    enlace.href = urlEnlace;
    // Añadimos texto para el enlace
    enlace.text = prompt("Indica el texto para del enlace");

    // Creamos la imagen
    let imagen = document.createElement("img");
    // Añadimos el src de la img
    imagen.src = rutaImagen;
    // Añadimos un texto alternativo por si no se ve la imagen
    imagen.alt = "Imagen";
    // Añadimos un tamaño por defecto para la imagen
    imagen.style.width = "100px";
    imagen.style.height = "100px";

    // Agregamos el hijo a nuestro div creado
    nuevoHijo.appendChild(enlace);
    nuevoHijo.appendChild(imagen);

    // Agregamos el hijo al padre
    let seccion = document.getElementById("seccionArticles");
    seccion.appendChild(nuevoHijo);
}