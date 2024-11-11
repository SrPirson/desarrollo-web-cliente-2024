let listaImagentes = ["006-like.png", "013-newsletter.png", "cover.png", "foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg"];

let seccionTablas = document.getElementById("seccionTabla");
let generar = document.getElementById("btnGenerarTabla");

generar.addEventListener("click", generaTabla);

function pedirNum(msj){
    let num = prompt(msj);
    while(isNaN(num) || num <= 0 || num > 10){
        num = prompt(`Error: ${msj}`);
    }
    return Number(num);
}

function generaTabla() {
    let filas = pedirNum("Introduce el numero de filas del 1 al 10");
    let columnas = pedirNum("Introduce el numero de columnas del 1 al 10");
    let nuevaTabla = document.createElement("table");
    nuevaTabla.className = "tabla";
    nuevaTabla.style.border = "1px solid black";
    nuevaTabla.style.width = "100%";
    let tablaBody = document.createElement("tbody");

    for (let i = 0; i < filas; i++) {
        let fila = document.createElement("tr");
        for (let j = 0; j < columnas; j++) {
            let columna = document.createElement("td");
            let texto = document.createTextNode(`${i+1}`);
            columna.style.border = "1px solid black";
            columna.appendChild(texto);
            fila.appendChild(columna);
        }
        tablaBody.appendChild(fila);
    }

    nuevaTabla.appendChild(tablaBody);
    seccionTablas.appendChild(nuevaTabla);


    let celdas = document.querySelectorAll("td");
    let contadorIMG = 0;
    let imgAdd = document.createElement("img");
    for (let i = 0; i < celdas.length; i++) {
        celdas[i].onclick = function() {
            if (contadorIMG < listaImagentes.length) {
                imgAdd.src = "./img/" + listaImagentes[contadorIMG];
                this.appendChild(imgAdd);
                contadorIMG++;
                if (contadorIMG >= listaImagentes.length) {
                    contadorIMG = 0;
                }
            }
        };
    }
}

