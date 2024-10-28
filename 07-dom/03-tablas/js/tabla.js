let botonTabla = document.getElementById("generaTabla");

botonTabla.addEventListener("click", crearTabla);

function crearTabla() {
    let tam = pedirNum("Dime el tamaño de la tabla:");
    let seccionTablas = document.getElementById("seccionTabla");

    let nuevaTabla = document.createElement("table"); // Creamos el elemento tabla
    let tablaBody = document.createElement("tbody"); // Creamos el elemento tbody
    
    nuevaTabla.style.width = "100%";
    nuevaTabla.setAttribute("border", 1); // setAttribute añade atributos a un elemento

    for (let i = 0; i < tam; i++) {
        // Creamos filas
        let fila = document.createElement("tr");
        for (let j = 0; j < tam; j++) {
            // Creamos columnas
            let columna = document.createElement("td");
            // Creamos texto para cada celda de la columna
            let textito = document.createTextNode(`F: ${i+1} C: ${j+1}`);
            // Añadimos el texto a la cada celda
            columna.appendChild(textito);

            // Añadimos un manejador de eventos para cambiar el color al hacer click en la celda oportuna
            columna.onclick = function(){
                cambiarColorColumna(this);
            };

            // Añadimos la celda que acabo de crear a la fila que estoy construyendo
            fila.appendChild(columna);
        }
        // Añadimos cada fila a la tabla
        tablaBody.appendChild(fila);
    }

    // Añadimos la tabla en el body de la tabla
    nuevaTabla.appendChild(tablaBody);
    // Añadimos la tabla completa en el elemento <section id="seccionTabla">
    seccionTablas.appendChild(nuevaTabla);
}

function cambiarColorColumna(celda) {
    celda.style.backgroundColor = (celda.style.backgroundColor === 'cyan') ? 'pink' : 'cyan';
}


// appendChild - añade un nuevo hijo
function pedirNum(msj){
    let num = prompt(msj); // Pedir al usuario
    while(isNaN(num)){
        num = prompt("ERROR: " + msj);
    }
    return Number(num);
}