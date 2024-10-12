function countBy(x, y) {
    let nuevaLista = [];
    if (x < 0 || y < 0) {
        return nuevaLista;
    }

    for (let i = 1; i <= y; i++) {
        let multiplo = x * i;
        nuevaLista.push(multiplo);
    }
    return nuevaLista;
}

let num1 = 3;
let num2 = 6;
console.log(countBy(num1, num2));