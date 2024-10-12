function PedirNum(msj){
    let j = prompt(msj);
    while(isNaN(j) || j < 2){
        j = prompt("ERROR: " + msj);
    }
    return Number(j);
}

let num = PedirNum("Introduce un número mayor a 2: ");

let matriz = new Array(num);

for (let i = 0; i < num; i++) {
    matriz[i] = new Array(num); // Inicializo la matriz
}

let contador = 1; // Contador para las multiplicaciones

for (let i = 0; i < num; i++) { 
    let mostrar = ""; // Variable para mostrar la matriz
    for (let j = 0; j < num; j++) {
        matriz[i][j] = num * contador; // Añadimos en la matriz su multiplicación
        contador++;
        if (matriz[i][j] <= 9){ // Controlamos si es menor que 10 le añadimos un 0 delante
            mostrar += "0" + matriz[i][j] + " ";
        } else {
            mostrar += matriz[i][j] + " ";
        }
    }
    console.log(mostrar);
}