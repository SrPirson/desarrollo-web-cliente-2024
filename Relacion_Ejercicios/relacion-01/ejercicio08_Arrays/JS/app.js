function repetidos(lista1, lista2) {

    let grande = lista2.length;
    if (lista1.length > lista2.length) {
        grande = lista1.length // Comprobamos que lista es más grande en tamaño
    }

    // Unimos todo su contenido
    let arrayTodo = new Array;
    for (let i = 0; i <= grande; i++) {
        if(lista1.length > i){
            arrayTodo.push(lista1[i]);
        }
        if (lista2.length > i) {
            arrayTodo.push(lista2[i])
        }
    }
    
    let apariciones = [];
    for (let i = 0; i < arrayTodo.length; i++) {
        let num = arrayTodo[i];
        if (apariciones[num]) {
            apariciones[num]++;
        } else {
            apariciones[num] = 1;
        }
    }

    // Guardamos los que no re han repetido
    let sinRepetidos = [];
    for (let i = 0; i < arrayTodo.length; i++) {
        if (apariciones[arrayTodo[i]] === 1) {
            sinRepetidos.push(arrayTodo[i]);
        }
    }

    return sinRepetidos;
}

let array1 = [1, 2, 3, 3];
let array2 = [3, 2, 1, 4, 5];

console.log(repetidos(array1, array2));
