function comprobarNum(msj){
    let j = prompt(msj);
    while(isNaN(j) || j < 5 || j > 10 || j == "" || j == " "){
        j = prompt("ERROR: " + msj);
    }
    return Number(j);
}

function calcularMedia(){
    let tam = comprobarNum("Indica el tamaño del array entre 5 y 10");
    let lista = new Array(tam);
    let totalLista = "";
    let superaMedia = "";
    let media = 0;
    for (let i = 0; i < lista.length; i++) {
        lista[i] = tam * Math.floor(Math.random() * 100);
        media += lista[i];
        totalLista += lista[i] + " ";
    }

    media /= lista.length

    for (let i = 0; i < lista.length; i++) {
        if (lista[i] >= media) {
            superaMedia += lista[i] + " ";
        }
    }

    console.log("El array es: " + totalLista);
    console.log("La media es: " + media);
    console.log("Los que superan la media son: " + superaMedia);
}