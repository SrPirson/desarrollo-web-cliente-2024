function comprobarNum(msj){
    let j = prompt(msj);
    while(isNaN(j) || j < 2 || j > 5 || j == "" || j == " "){
        j = prompt("ERROR: " + msj);
    }
    return Number(j);
}

function crearMatriz(fila, columna){
    let matriz = new Array(columna);

    for (let i = 0; i < columna; i++){
        matriz[i] = new Array(fila);
    }
    return matriz;
}

function pintaMatriz(matriz){
    let mostrar = "";
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz.length; j++){
            matriz[i][j] = Math.floor(Math.random() * (99 - 1) + 1);
            if (matriz[i][j] <= 9){
                mostrar += "0" + matriz[i][j] + " ";
            } else {
                mostrar += matriz[i][j] + " ";
            }
        }
        mostrar += "\n";
    }
    console.log("La matriz generada es: ");
    console.log(mostrar);
}

function calcularMedia(matriz) {
    let media = 0;
    let contador = 0;
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            media += matriz[i][j];
            contador++;
        }
    }
    media /= contador;
    console.log("La media de la matriz es: " + media);
    return media;
}

function medias(matriz, array, num, media){
    let encimaMedia = "";
    let bajoMedia = "";
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            if(matriz[i][j] >= media) {
                array[0].push(matriz[i][j]);
                encimaMedia += matriz[i][j] + " ";
            } else {
                array[1].push(matriz[i][j]);
                bajoMedia += matriz[i][j] + " ";
            }
        }
    }
    console.log(array);
    console.log("La matriz resultado es: ");
    console.log(encimaMedia);
    console.log(bajoMedia);
}

function ordenarArrays(array) {
    let elec = prompt("Indica (0) para ordenar ascendente o (1) para descendente");
    while(isNaN(elec) || elec < 0 || elec > 1 || elec == "" || elec == " "){
        elec = prompt("ERROR: Indica (0) para ordenar ascendente o (1) para descendente");
    }

    let mostrarCero = "";
    let mostrarUno = "";
    if (elec == 0) {
        array[0].sort(function(a, b){return a - b});
        array[1].sort(function(a, b){return a - b});
    } else {
        array[0].sort(function(a, b){return a - b}).reverse();
        array[1].sort(function(a, b){return a - b}).reverse();
    }

    for (let i = 0; i < array[0].length; i++) {
        if (array[0][i] < 10) {
            mostrarCero += "0" + array[0][i] + " ";
        } else {
            mostrarCero += array[0][i] + " ";
        }
    }

    for (let i = 0; i < array[1].length; i++) {
        if (array[1][i] < 10) {
            mostrarUno += "0" + array[0][i] + " ";
        } else {
            mostrarUno += array[1][i] + " ";
        }
    }
    console.log(array);
    console.log("La matriz resultado ordenado es: ");
    console.log(mostrarCero);
    console.log(mostrarUno);
}

let num = comprobarNum("Indica el tamaño de la matriz, entre 2 y 5");
let matriz = crearMatriz(num, num);
pintaMatriz(matriz);
let mediaTotal = calcularMedia(matriz);
let resultado = crearMatriz(1, 2);
medias(matriz, resultado, num, mediaTotal);
ordenarArrays(resultado);
