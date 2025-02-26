const operaciones = require("./operaciones"); // Importamos las funciones del modulo de operaciones y lo guardamos en una variable.
const { mult, restar } = require("./operaciones"); // Podemos usar destructuring para traer solo mas que necesitemos y no todas.

const Persona = require("./persona"); // Importamos la clase persona

// Usamos la función sumar y la psamos los parametros requeridos
const suma = operaciones.sumar(3, 8);
console.log(suma);

// Usamos directamente la funcion mult.
const multiplicacion = mult(2, 3); 
console.log(multiplicacion);


const pers = new Persona("Francisco", "Cortés", 27);
console.log(pers.mostrar());
