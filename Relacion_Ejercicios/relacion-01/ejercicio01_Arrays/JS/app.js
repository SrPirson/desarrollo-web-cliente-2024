function sumaParcial(lista) {
    let nuevaLista = [];
    for (let i = 0; i < lista.length; i++) {
        let suma = 0;
        for (let j = 0; j <= i; j++) {
            suma += lista[j]; // Voy sumando
        }
        nuevaLista[i] = suma;
    }
    return nuevaLista;
}

let listaNumeros = [1,2,3,4,5,6,];
let parciales = sumaParcial(listaNumeros);
console.log(parciales);