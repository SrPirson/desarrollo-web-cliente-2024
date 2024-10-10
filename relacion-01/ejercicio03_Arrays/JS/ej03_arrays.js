function separador(lista){
    let palabras = lista.split(',');
    return palabras;
}

function ordenar(listaA, listaB){
    let listaOrdenada = [];
    let total = 0;

    if (listaA.lenght >= listaB.lenght){
        total = listaA.lenght;
    } else {
        total = listaB.lenght;
    }

    for (let i = 0; i < total; i++) {
        if(i<listaA.lenght){
            listaOrdenada.push(listaA[i] + ", " + push(listaB[i]));
        }
        else if(i<listaB.lenght){
            listaOrdenada.push(listaA[i] + ", " + push(listaB[i]));
        }
    }
}

let listaA = prompt("Introduce enteros separados por comas")
let listaB = prompt("Vuelve a introducir enteros separados por comas")

let listaSeparadaA = separador(listaA);
let listaSeparadaB = separador(listaB);
let ordenado = ordenar(listaSeparadaA, listaSeparadaB);
console.log(ordenado);
