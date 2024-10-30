/*
    a) contar número de enlaces de la página
    b) Indicar a qué enlace apunta el penúltimo enlace de la página.
    c) Indicar cuantos enlaces apuntan a la url: http://prueba
    d) Número de enlaces del 3er párrafo.
*/

// Ejecutar aunque no se haya cargado la web.
// document.addEventListener("DOMContentLoaded", domCargado);

// function domCargado(){
//     alert("DOM cargado");

//     let texto = "";

//     // Verificar si en el navegador estan activas o no las cookies
//     if (window.navigator.cookieEnabled) {
//         texto = "Cookies habilitadas";
//     } else {
//         texto = "Cookies inhabilitadas";
//     }
//     alert(texto);

//     // OBJETO WINDOWS
//     // El objeto window representa la ventana que contiene un documento DOM; 
//     // la propiedad document apunta al DOM document cargado en esa ventana.
//     // https://developer.mozilla.org/es/docs/Web/API/Window
//     // Window.innerHeight: Obtiene la altura del area de contenido del navegador incluyendo, 
//     // si es interpretado, la barra de deslizado.
//     // window.innerWidth: Obtiene el ancho del area de contenido de la ventana del navegador,
//     // si es interpretado, la barra de deslizado vertical.
//     // Window.location: Obtiene/fija la location, o URL actual, del objeto de la ventana.
//     // Window.navigator: Returns a reference to the navigator object.
//     // Window.sessionStorage: Returns a reference to the session storage object used to store data that may only be accessed by the origin that created it.
//     // Window.localStorage: Retorna una referencia al objeto almacenamiento local usado para
//     // almacenar datos que pueden ser de accedidos por el origen que los creo.

//     // Para ver la url que estamos visitando
//     alert(window.location);

//     // Para ver el tamaño de la ventana
//     alert(`Tamaño de la ventana: Altura ${window.innerHeight}, Anchura: ${window.innerWidth}`);
// }


window.addEventListener("load", contarEnlaces);

function contarEnlaces() {
    let info = document.getElementById("informacion");
    console.log(info);

    // let numEnlaces = document.getElementsByTagName("a");
    let numEnlaces = document.querySelectorAll("a");
    console.log(numEnlaces);

    // Aqui vamos a ir poniendo los resultado

    // Apartado A
    // Mostramos el numero total de enlaces con el .length
    info.innerHTML = "El número de enlaces es: " + numEnlaces.length + "<br>";

    // Apartado B
    // Le indicamos que queremos el penultimo con el .lenght-2 y con el .href le decimos que muestre el enlace
    info.innerHTML += "El url penultimo enlace es: " + (numEnlaces[numEnlaces.length-2].href) + "<br>";

    // Apartado C
    let contador = 0;
    for (let i = 0; i < numEnlaces.length; i++) {
        if(numEnlaces[i].href == "http://prueba/") {
            contador++;
        }
    }
    info.innerHTML += "El total de enlaces es: " + contador + "<br>";

    // Apartado D
    // Busco todos los parrafos que hay
    let numParrafos = document.querySelectorAll("p");
    console.log(numParrafos);
    // Me quedo con el parrafo que quiero y busco todos los enlaces
    let enlaces = numParrafos[2].getElementsByTagName("a");
    console.log(enlaces);
    info.innerHTML += "El total de enlaces del parrafo tres es: " + enlaces.length + "<br>";
}
