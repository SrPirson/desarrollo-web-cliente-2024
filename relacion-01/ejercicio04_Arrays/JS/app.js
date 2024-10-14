let vector = [0,1,2,3,4,5,6,7,8,9,10];
console.log(vector);

// Pedir al usuario la posición donde quiere insertar el nuevo valor
let posicion = parseInt(prompt("Introduce la posición donde deseas insertar el nuevo valor: "));

// Pedir al usuario el nuevo valor que quiere insertar
let nuevoValor = parseInt(prompt("Introduce el nuevo valor a insertar: "));

vector.splice(posicion, 1, nuevoValor);

console.log(vector);