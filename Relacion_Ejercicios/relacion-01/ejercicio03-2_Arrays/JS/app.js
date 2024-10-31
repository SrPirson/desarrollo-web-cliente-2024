let array1 = prompt("1- Introduce enteros separados por comas: ").split(",");
let array2 = prompt("2- Introduce enteros separados por comas: ").split(",");

let arrayFinal = [];
let mayor = array1.length;
if (array1.length < array2.length) {
    mayor = array2.length
}

for (let i = 0; i < mayor; i++) {
    if (i < array1.length) { 
        arrayFinal.push(array1[i]);
    }
    if (i < array2.length) { 
        arrayFinal.push(array2[i]);
    }
}

console.log(arrayFinal);
