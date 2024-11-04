// Ejercicio: Administrador de Lista de Tareas Objetivo 1. Crear una lista de
// tareas con opciones para añadir elementos en diferentes posiciones, reemplazar,
// y eliminar. 2. Cada botón realizará una acción específica usando uno de los
// métodos de manipulación del DOM.

// Api de elementos
// elemento.before(); Añade el nuevo elemento justo antes.
// elemento.after(); Añade el nuevo elemento justo después.
// elemento.prepend(); Añade el nuevo elemento justo antes del primer hijo.
// elemento.append(); Añade el nuevo elemento justo después del último hijo
// elemento.replaceChildren(); eliminar todos los hijos y los cambia por el nuevo elemento.
// elemento.replaceWith(); se sustituye el elemento por el nuevo.
// elemento.remove(); elimina el propio elemento.

let boton1 = document.getElementById("btnAgrAnt");
boton1.addEventListener("click", agregarAntes);



function agregarAntes() {
    let nuevoElemento = document.createElement("li");
    let primerElemento = document.getElementById("primerElemento");
    // todos los elementos que creemos con li van a tener la clase tarea.
    nuevoElemento.classList.add("tarea"); 
    // todos los elementos que creemos con li van a tener el id tarea.
    // nuevoElemento.id.add("hola"); 
    // agregamos texto al elemento creado.
    nuevoElemento.textContent = "Nueva tarea delante del 1er elemento";

    // añadimos el elemento justo antes del primer elemento.
    primerElemento.before(nuevoElemento);
}

let boton2 = document.getElementById("btnAgrDsp");
boton2.addEventListener("click", agregarDespues);

function agregarDespues() {
    let primerElemento = document.getElementById("primerElemento");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.classList.add("tarea"); 
    nuevoElemento.textContent = "Nueva tarea atras del 1er elemento";
    primerElemento.after(nuevoElemento);
}

let boton3 = document.getElementById("btnAgrInc");
boton3.addEventListener("click", agregarInicio);

function agregarInicio() {
    let inicioElemento = document.getElementById("listaTareas");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.classList.add("tarea"); 
    nuevoElemento.textContent = "Nueva tarea al inicio de la lista";
    inicioElemento.prepend(nuevoElemento);
}

let boton4 = document.getElementById("btnAgrFnl");
boton4.addEventListener("click", agregarFinal);

function agregarFinal() {
    let inicioElemento = document.getElementById("listaTareas");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.classList.add("tarea"); 
    nuevoElemento.textContent = "Nueva tarea al final de la lista";
    inicioElemento.append(nuevoElemento);
}

let boton5 = document.getElementById("btnRemTd");
boton5.addEventListener("click", reemplazarAll);

function reemplazarAll() {
    let primerElementoLista = document.getElementById("listaTareas");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.classList.add("tarea"); 
    nuevoElemento.id = "primerElemento";
    nuevoElemento.textContent = "Todo reemplazado";
    primerElementoLista.replaceChildren(nuevoElemento);
}

let boton6 = document.getElementById("btnRemPrm");
boton6.addEventListener("click", reemplazarPrimer);

function reemplazarPrimer() {
    let primerElementoLista = document.getElementById("primerElemento");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.classList.add("tarea"); 
    nuevoElemento.id = "primerElemento";
    nuevoElemento.textContent = "Solo primero reemplazado";
    primerElementoLista.replaceWith(nuevoElemento);
}

let boton7 = document.getElementById("btnElmPrm");
boton7.addEventListener("click", eliminarPrimer);

function eliminarPrimer() {
    let primerElementoLista = document.getElementById("primerElemento");
    primerElementoLista.remove();
}

let boton8 = document.getElementById("btnRemPrim");
boton8.addEventListener("click", reemplazarPrimerElem);

function reemplazarPrimerElem() {
    let primerElemento = document.querySelector("li");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.classList.add("tarea"); 
    nuevoElemento.textContent = "Reemplazo primero";
    primerElemento.replaceWith(nuevoElemento);
}

let boton9 = document.getElementById("btnElmPrim");
boton9.addEventListener("click", eliminarPrimerElem);

function eliminarPrimerElem() {
    let primerElemento = document.querySelectorAll("li");
    primerElemento[0].remove();
}
