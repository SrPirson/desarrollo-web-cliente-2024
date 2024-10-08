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
function Crea_y_Pinta2(fila,columna){
    let matriz = [fila][columna];

    // Rellenamos valores
    for (let i = 0; i < fila; i++){
        for (let j = 0; j < columna; j++){
            // Rellena las columnas y filas
            matriz[i][j] = (i + j);
        }
        // Pinta filas completas
        console.log(matriz[i]);
    }
}

let fila = PedirNum("Introduce el número de filas: ");
let columna = PedirNum("Introduce el número de columnas: ");

Crea_y_Pinta(fila, columna);

Crea_y_Pinta2(fila1, columna1);