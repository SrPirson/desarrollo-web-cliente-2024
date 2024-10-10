let autos = ['BMW', 'Audi', 'Mercedes-Benz'];

console.log(autos);
console.log(typeof autos);

let item = new Array(1,6);
console.log(item);

let items = new Array(6);
console.log(items);

// let pets = new Array('Perro', 'Gato', 'Cocodrilo');
let pets = ['Perro', 'Gato', 'Cocodrilo']; // Equivalente al de arriba

console.log(pets);

console.log(pets.length); // Devuelve el total de elementos del array
console.log(pets[0]); // Devuelve la posición que le indiquemos

let len = pets.length;
for (i = 0; i < len; i++) {
    console.log(pets[i]);
}

items[2] = 'toro'
console.log(items);

console.log(pets.pop()); // Devuelve y elimina el ultimo elemento del array
console.log(pets);
console.log(pets.shift()); // Devuelve y elimina el primer elemento del array
console.log(pets);
console.log(pets.unshift('Mararron')); // Añade en la primera posición del array
console.log(pets);

function log(msj) {
    console.log(msj);
}

const months = ['Jan', 'March', 'April', 'June'];
console.log(months);
months.splice(1, 0, 'Perro'); // El primer num indica la posición y el 0 añade.
console.log(months);
months.splice(1, 1, 'Feb'); // El 1 reemplaza.
console.log(months);

months.splice(5, 2, 'July', 'Agost', 'Sept') // El 2 concatena una cadena.
console.log(months);

months.splice(2, 3, 'July', 'Agost', 'Sept'); // El 3 elimina a partir de donde le indiquemos
console.log(months);

let eliminados = months.splice(3);
console.log(eliminados);
console.log(months);

// Ordenación de arrays
console.log(months.reverse()); // Ordena a la inversa
console.log(months.sort()); // Ordena de forma numerica/alfabetico

// Delimitadores
let cadena = 'JavaScript es un lenguaje de programación';
let vector = "12,34,45,6,7,9";

cadena = cadena.replace('Java',"Mongo"); //Reemplaza la palabra que indiquemos de una cadena
console.log(cadena);

let palabras = cadena.split(' ');
let numeros = vector.split(",");

console.log(palabras);
console.log(numeros);

// Busqueda de posición
let posicion = months.indexOf("Feb");
console.log(posicion);

// Slice
console.log(months.slice(1)); // Corta a partir del indice que le indiquemos.
console.log(months);