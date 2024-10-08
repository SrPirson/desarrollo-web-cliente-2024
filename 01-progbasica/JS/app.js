//alert("Hola mundo");

// VAR, LET o CONST son las variables que utilizaremos.
// VAR No se suele usar.
// LET es usado como bloque.
// CONTS para definir constantes que no van a cambiar en el tiempo.

// Para activar Quokka Ctrl + Shift + P -> Quokka.js > Toggle (Start/Stop) on Current file.

console.log("Hola mundo");

nombre = "Francisco"; // Se lo traga todo.
console.log(nombre);

var nombre = null;
console.log(nombre);

// Hay que tener cuidado con los casteos.
let a = 3;
let b = '2';
let c = a + b;
console.log(c);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof nombre);

let ok = true;
console.log(typeof ok);

console.log(a + nombre);

if (b > a) {
    console.log("Si");
} else {
    console.log("No");
}

let simbolo = Symbol("id1");
console.log(typeof simbolo);


/* Control de franjas horarias con if */
let horaDia = 25;
let mensaje = "";

if (horaDia >= 6 && horaDia < 12) {
    mensaje = "Buenos días.";
} else if (horaDia >= 12 && horaDia < 18) {
    mensaje = "Buenas tardes.";
} else if (horaDia >= 18 && horaDia <= 24 || horaDia >= 1 && horaDia < 6) {
    mensaje = "Buenas noches.";
} else {
    mensaje ="Franja horaria incorrecta.";
}

console.log("Son las " + horaDia + " horas, " + mensaje);

/* */

let z = 2;
let y = '2';

if (z==y){
    console.log("Son iguales.");
}
if (z===y){
    console.log("Son iguales.")
}

/*
Operador Ternario
    El operador ternario de JavaScript es un operador condicional que tiene tres operandos.
    Se usa para tomar una decisión basada en una // expresión que se evalúa como true o false
    Es una forma abreviada de la sentencia if else que crea código más limpio, fácil de entender 
    y rápido de escribir.
*/

let resultado = (a<b) ? "Verdadero" : "False"; // Lo que devuelva se almacena en la variable
console.log(resultado);


// Casteos

let miNumero = "18";
console.log(miNumero);

if (isNaN(miNumero)) {
    console.log("no es un número");
}

miNumero = Number(miNumero);
console.log(miNumero);

let miString = String(miNumero);
console.log(miString);

// Bucles

let contador = 0;
while (contador < 3){
    console.log(contador);
    contador++;
}

let cont = 0;
do {
    console.log(cont++);
} while (cont < 4);

for(let conta = 0; conta < 5; conta++){
    console.log(conta);
}

let mes = 11;
let estacion = "desconocida";

switch (mes) {
    case 12: case 1: case 2:
        estacion = "invierno";
        break;
    case 3: case 4: case 5:
        estacion = "Primavera";
        break;
    case 6: case 7: case 8:
        estacion = "Verano";
        break;
    case 9: case 10: case 11:
        estacion = "Otoño";
        break;
    default:
        estacion = "Error";
        break;
}
if (mes <= 12){
    console.log("Estamos en " + estacion + " del mes " + mes + ".")
} else {
    console.log("Mes incorrecto.")
}

for (let i = 0; i <= 5; i++){
    for (let j = 0; j <= 6; j++){
        console.log("c1: " + i + " c2: " + j)
    }
    console.log("\n")
}


// Objetos

const objeto3 = {
    nombre: "Paco",
    apellido: "Fiestas",
    edad: 103,
}

console.log(typeof objeto3);


// Arrays

let marcaCoches = ['BMW','Audi','Renault','Mercedes-Benz'];
console.log(typeof marcaCoches);

console.log(marcaCoches);

for (i=0 ;i<marcaCoches.length ;i++){
    console.log(marcaCoches[i])
}


// Definir Clase

class Persona{
    constructor(nombre, apellido, edad){
        this._nombre = nombre; // A las variables internas de la clase ponerle _ al inicio.
        this._apellido = apellido;
        this._edad = edad;
    }
    toString(){
        let text = ``; // Nos permite integrar variables con texto ` text `.
        text += `Nombre: ${this._nombre}\n`; 
        text += `Apellido: ${this._apellido}\n`;
        text += `Edad: ${this._edad}`;
        return text;
    }        
}

console.log(Persona);
console.log(typeof Persona);


// Probar Clases

let persona1 = new Persona('Francisco', "Cortés", 26);
console.log(persona1.toString());


let nombre2 = persona1.toString();
console.log(nombre2);

let persona2 = new Persona(objeto3.nombre, objeto3.apellido, objeto3.edad);
console.log(persona2.toString());


// Funciones

var aa = 4;
var bb = 5;

function miFuncion(xx, yy){
    console.log("Suma: " + (xx + yy));
    console.log("Suma: " + (aa + bb)); // Está definido fuera y se lo come
    console.log(`Suma: ${aa + bb}`);
    return xx + yy;
}

let result = miFuncion(1,2);
console.log(result);