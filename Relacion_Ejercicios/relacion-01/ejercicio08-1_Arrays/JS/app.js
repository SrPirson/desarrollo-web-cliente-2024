function copiaUnicos(array1, array2){
    let arrayFinal = [];

    // Agregar elementos únicos de array1 que no estén repetidos en array1 ni esten en array2
    for (let i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) === -1 && esUnico(array1, array1[i])) {
            arrayFinal.push(array1[i]);
        }
    }

    // Agregar elementos únicos de array2 que no estén repetidos en array2 ni esten en array2
    for (let i = 0; i < array2.length; i++) {
        if (array1.indexOf(array2[i]) === -1 && !repetidos(array2, array2[i])) {
            // Otra forma de comprobarlo
            if (!array1.includes(array2[i]) && !repetidos(array2, array2[i])) {
                arrayFinal.push(array2[i]);
            }
        }
    }

    return arrayFinal;
}

function esUnico(array, elem){
    // Mira si la primera posición de aparición es la misma que la ultima aparición del elemento que le pasamos
    // Ejem: esUnico([77, "ciao", 8, "ciao", 42], "ciao") devuelve false.
    // "ciao" aparece en la posicion 1 y en la posicion 3 no son iguales.
    return array.indexOf(elem) === array.lastIndexOf(elem);
}



function repetidos(array, elem){
    let cont = 0;
    // Comprobamos si el elemento aparece más de una vez en el array
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elem) {
            cont++;
        }
    }

    if (cont == 1) {
        return false;
    } else {
        return true;
    }
}

let resultado = copiaUnicos([77, "ciao", 8, "ciao", 42], [77, 42, 9]);
console.log(resultado);