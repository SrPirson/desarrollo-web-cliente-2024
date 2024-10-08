function PedirNum(msj){
    let j = prompt(msj);
    while(isNaN(j)){
        j = prompt("ERROR: " + msj);
    }
    return Number(j);
}


function Crear_Matriz(fila, columna){
    let matriz = new Array(columna);

    for (let i = 0; i < columna; i++){
        matriz[i] = new Array(fila);
    }
    console.log(matriz);
    return matriz;
}


function Pintar_Matriz(matriz){
    for (let i = 0; i < matriz.length; i++){
        let multiplos = PedirNum("Indica un número para rellenar");
        let mostrar = "";
        for (let j = 0; j < matriz.length; j++){
            matriz[i][j] = multiplos * (j + 1);
            if (matriz[i][j] <= 9){
                mostrar += "0" + matriz[i][j] + " ";
            } else {
                mostrar += matriz[i][j] + " ";
            }
        }
        console.log(mostrar);
    }
}


function Pintar_Matriz_Aleatorio(matriz){
    for (let i = 0; i < fila; i++){
        let mostrar = "";
        for (let j = 0; j < columna; j++){
            let numAlea = Math.random() * 99;
            matriz[i][j] = numAlea * (j + 1);
            if (matriz[i][j] <= 9){
                mostrar += "0" + matriz[i][j] + " ";
            } else {
                mostrar += matriz[i][j] + " ";
            }
        }
        console.log(mostrar);
    }
}


let fila = PedirNum("Introduce el número de filas: ");
let columna = PedirNum("Introduce el número de columnas: ");

let matriz_loca = Crear_Matriz(fila, columna);

Pintar_Matriz(matriz_loca);
Pintar_Matriz_Aleatorio(matriz_loca);
