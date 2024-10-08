// Definición de funciones
let func = new Function("a", "b", "return a * b");
let resultado = func(10,10);
console.log(resultado);


// Funciones autoinvocadas
(function(){
    let msg = "hola";
    console.log(msg);
})();


// Funciones anonimas (No tienen nombre para llamarlo)
let a = 10;
let b = 6;
resultado = function (a, b){
    return a * b;
}

console.log(resultado(a,b));


// Funciones flecha -- Arrow functions
const arrow = (a,b) => a * b;
console.log(arrow(10,10));


// No son adecuadas para definir metodos en los objetos.