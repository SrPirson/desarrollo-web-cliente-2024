let marcarNumeros = document.getElementById("marcaNumeros");
let marcarOperadores = document.getElementById("marcaOperadores");
let numeros = document.getElementsByClassName("numero");
let operadores = document.getElementsByClassName("operador");
let igual = document.getElementsByClassName("igual");
let todosSpan = document.querySelectorAll("span");
let limpiar = document.getElementsByClassName("limpiar");

marcarNumeros.addEventListener("click", marcarNums);

function marcarNums() {
    for (let i = 0; i < numeros.length; i++) {
        numeros[i].style.backgroundColor = "black";
        numeros[i].style.color = "white";
    }
}

marcarOperadores.addEventListener("click", marcarOpe);

function marcarOpe() {
    igual[0].style.backgroundColor = "yellow";
    for (let i = 0; i < operadores.length; i++) {
        operadores[i].style.backgroundColor = "yellow";
    }
}

let resetear = document.getElementById("resetear");
resetear.addEventListener("click", resetAll);

function resetAll() {
    igual[0].style.backgroundColor = "#F1FF92";

    for (let i = 0; i < numeros.length; i++) {
        numeros[i].style.backgroundColor = "#FFFFFF";
        numeros[i].style.color = "#888888";
    }

    for (let i = 0; i < operadores.length; i++) {
        operadores[i].style.backgroundColor = "#FFDAB9";
    }

    limpiar[0].style.backgroundColor = "#FF7C87";
    limpiar[0].style.color = "#888888";
}

todosSpan[17].addEventListener("click", coloC);

function coloC() {
    limpiar[0].style.backgroundColor = "rgb(202, 60, 60)";
    limpiar[0].style.color = "white";
}