// Creamos un modulo con funciones para poder usarlas en el exterior

function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    return a / b;
}

// Exportamos las funciones que queramos para poder usarlas fuera.
module.exports = { // Creamos un objeto con las funciones y su clave a exportar.
    sumar: sumar,
    restar: restar,
    mult: multiplicar
}