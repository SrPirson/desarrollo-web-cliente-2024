console.log("Manejo elementos DOM");

/* 
Crear elementos en DOM
    .createElement(tag, options); // Crea y devuelve un elemento HTML
    .createComment(text); // Crea y devuelve un nodo de comentario HTML <!-- text -->
    .createTextNode(text); // Crea y devuelve un nodo HTML con el texto text.
    .cloneNode(deesp); // Clona el nodo HTML y devuelve una copia. deep se envía false por defecto
    .isConnected; // Indica si el nodo HTML ya está insertado
    .insertBefore(newNode, referenceNode); // Añade 
*/

// Guardamos nuesto elemento boton
let elemento = document.getElementById("boton1");
// Añadimos un listener al boton para cuando se le de click
elemento.addEventListener("click", incluyoElemento);

function incluyoElemento() {
    // Creamos un nuevo div y vamos a añadirle contenido
    let nuevoDiv = document.createElement("div");
    let nuevoContenido = document.createTextNode("Estoy incluyendo contenido en el DIV");
    
    // Añadimos el contenido a nuestro div
    nuevoDiv.appendChild(nuevoContenido);
    console.log(nuevoDiv)

    // Añadimos el div a la seccion que le indicamos
    let seccionActual = document.getElementById("seccionDivsAIncluir");
    // document.body.insertBefore(nuevoDiv, seccionActual); - Opcion 1
    seccionActual.appendChild(nuevoDiv) // Opcion 2
}



let elemento2 = document.getElementById("boton2");
elemento2.addEventListener("click", incluyoElemento2);

function incluyoElemento2() {
    // Creamos un nuevo div y vamos a añadirle contenido
    let nuevoDiv = document.createElement("div");
    let nuevoContenido = document.createTextNode("Estoy incluyendo un nuevo contenido mediante un DIV");
    
    // Añadimos el contenido a nuestro div
    nuevoDiv.appendChild(nuevoContenido);
    console.log(nuevoDiv)

    // Añadimos el div a la seccion que le indicamos
    let divActual = document.getElementById("divAIncluir");
    divActual.innerHTML += nuevoDiv.outerHTML;
}



let elemento3 = document.getElementById("boton3");
elemento3.addEventListener("click", incluyoElemento3);

function incluyoElemento3() {
    // Creamos un nuevo div y vamos a añadirle contenido
    let nuevoDiv = document.createElement("div");
    nuevoDiv.style.background = "blue";
    nuevoDiv.style.color = "whitesmoke";
    let nuevoContenido = document.createTextNode("Estoy incluyendo un nuevo contenido mediante un DIV-3");
    
    // Añadimos el contenido a nuestro div
    nuevoDiv.appendChild(nuevoContenido);
    console.log(nuevoDiv)

    // Añadimos el div a la seccion que le indicamos
    let divActual = document.getElementById("seccionDivsAIncluir2");
    // document.body.insertBefore(nuevoDiv, divActual);
    divActual.appendChild(nuevoDiv);
}



let elemento4 = document.getElementById("boton4");
elemento4.addEventListener("click", incluyoElemento4);

function incluyoElemento4() {
    // Creamos un nuevo div y vamos a añadirle contenido
    const nuevoDiv = document.createElement("div");
    nuevoDiv.className = "rojo"; // Asignamos la clase
    nuevoDiv.textContent = "Clase: roja."; // Asignamos el texto
    let nuevoContenido = document.createTextNode("Estoy incluyendo un nuevo contenido mediante un DIV-3");
    
    // Añadimos el contenido a nuestro div
    nuevoDiv.appendChild(nuevoContenido);
    console.log(nuevoDiv)

    // Añadimos el div a la seccion que le indicamos
    let divActual = document.getElementById("seccionDivsAIncluir2");
    // document.body.insertBefore(nuevoDiv, divActual);
    divActual.appendChild(nuevoDiv, divActual);
}


// Vamos a reemplazar un elemento
let elemento5 = document.getElementById("reemplazoChild");
elemento5.addEventListener("click", reemplazoChild);

function reemplazoChild() {
    // Recuperamos el ultimo elemento de la lista
    const listItem = document.querySelector("li:last-child");
    console.log(listItem);
    let nuevoItem = document.createElement("li");
    nuevoItem.innerHTML = "<a href='#'>Productos</a>";
    console.log(nuevoItem);
    // Nos despazamos al nodo padre y lo reemplazamos
    listItem.parentNode.replaceChild(nuevoItem, listItem);
}