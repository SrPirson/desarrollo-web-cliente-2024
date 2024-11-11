let agregar = document.getElementById("btnAgregar");
let borrar = document.getElementById("btnBorrar");
let lista = document.getElementById("listaDinamica");

agregar.addEventListener("click", addLista);
borrar.addEventListener("click", deleteLista);

function addLista() {
    let nuevaLista = document.createElement("li");
    let nuevoA = document.createElement("a");

    let nuevoElemento = prompt("Introduce el nuevo elemento de la lista");
    let nuevoURL = prompt("Introduce la URL de la lista");

    nuevoA.innerHTML = nuevoElemento;
    nuevoA.href = nuevoURL;
    nuevaLista.append(nuevoA);
    lista.append(nuevaLista);
}

function deleteLista() {
    let totalLista = document.querySelectorAll("li");
    console.log(totalLista);
    for (let i = 0; i < totalLista.length; i++) {
        totalLista[i].remove();
    }
}