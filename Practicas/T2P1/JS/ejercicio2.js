const pasear = document.getElementById("pasear");
const comer = document.getElementById("comer");
const viajar = document.getElementById("viajar");
const btnAdd = document.getElementById("add");
const mostrar = document.getElementById("mostrar");


// Parte A
btnAdd.addEventListener("click", agregarCampos);

function agregarCampos(){
    mostrar.value = "";
    if (pasear.checked) {
        mostrar.value += pasear.value + " ";
    }
    if (comer.checked) {
        mostrar.value += comer.value + " ";
    }
    if (viajar.checked) {
        mostrar.value += viajar.value + " ";
    }
}

// Parte B
pasear.addEventListener("click", function() {
    if (pasear.checked) {
        mostrar.value += pasear.value + " ";
    } else {
        mostrar.value = "";
    }
});

comer.addEventListener("click", function() {
    if (comer.checked) {
        mostrar.value += comer.value + " ";
    } else {
        mostrar.value = "";
    }
});

viajar.addEventListener("click", function() {
    if (viajar.checked) {
        mostrar.value += viajar.value + " ";
    } else {
        mostrar.value = "";
    }
});