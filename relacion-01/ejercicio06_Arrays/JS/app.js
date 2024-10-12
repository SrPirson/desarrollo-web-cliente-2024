function numeros(num){
    let total = [];
    for (let i = num; i >= 1; i--) {
        total.push(i);
    }
    return total;
}

let numero = 10

console.log(numeros(numero));