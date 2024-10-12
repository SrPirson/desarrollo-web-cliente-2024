// Matrices

function PedirNum(msj){
    let j = prompt(msj); // Pedir al usuario
    while(isNaN(j)){
        j = prompt("ERROR: " + msj);
    }

    return Number(j);
}


// FORMA 1
function Crea_y_Pinta(fila, columna){
    let matriz = new Array(columna);

    // Inicializamos matriz
    for (let i = 0; i < columna; i++){
        matriz[i] = new Array(fila);
    }

    // Rellenamos valores
    for (let i = 0; i < fila; i++){
        for (let j = 0; j < columna; j++){
            // Rellena las columnas y filas
            matriz[i][j] = i;
        }
        // Pinta filas completas
        console.log(matriz[i]);
    }
}


// FORMA 2
function Crea_y_Pinta2(fila, columna) {
    // Crear la matriz con el número de filas
    let matriz = new Array(fila);

    // Crear las columnas dentro de cada fila
    for (let i = 0; i < fila; i++) {
        matriz[i] = new Array(columna); // Cada fila es un array con el número de columnas
    }

    // Rellenar la matriz y pintarla
    for (let i = 0; i < fila; i++) {
        let mostrar = "";
        for (let j = 0; j < columna; j++) {
            // Rellenar cada posición de la matriz con la suma de i y j
            matriz[i][j] = i + j;
            mostrar += matriz[i][j].toString().padStart(2, '0') + " "; // Formato de dos dígitos
        }
        // Pinta cada fila completa
        console.log(mostrar.trim());
    }
}


let fila = PedirNum("Introduce el número de filas: ");
let columna = PedirNum("Introduce el número de columnas: ");

Crea_y_Pinta(fila, columna);

Crea_y_Pinta2(fila1, columna1);