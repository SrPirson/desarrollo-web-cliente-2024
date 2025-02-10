"use strict";
// Set-ExecutionPolicy Unrestricted ejecutamos en PowerShell como administrador para poder ejecutar TypeScript.
// Para crear el fichero de configuración de TypeScript, ejecutamos el comando: "tsc --init" (Una vez por proyecto).
// Ctrl + Shift + B para compilar el fichero de TypeScript.
// Para compilar el fichero de TypeScript, ejecutamos el comando: "tsc nombre_fichero.ts".
// Para transpilar el fichero automaticamente ponemos "tsc nombre_fichero.ts" -w (watcher).
// Al declarar una vaiable tenemos que indicar su tipo.
let mensaje = "Hola Mundo";
console.log(mensaje);
let numero = 120;
console.log(numero);
let esViernes = false;
console.log(esViernes);
let real = 1.43;
let binario = 0b1101;
console.log(typeof binario + " " + binario);
let hexadecimal = 0x1A;
console.log(typeof hexadecimal + " " + hexadecimal);
let suma = binario + hexadecimal;
console.log(suma);
let comparacion;
comparacion = real > 2;
console.log(comparacion);
let octal = 0o123;
console.log(octal);
let sinRestriccion = 23 + "Hola"; // Tipo de variable sin restricción
console.log(typeof sinRestriccion);
let objet = 23; // Admite todo menos null
let desconocido = "Hola"; // Para datos de APIs se suele usar
// Tipos de cadenas de texto.
let nombre = "Juan";
let apellido = 'Peréz';
let direccion = `Calle Falsa, ${numero}`;
console.log(nombre + " " + apellido + " -> " + direccion);
// Arrays
let arreglo1 = [1, 2, 3, 4, 5];
let arreglo2 = [6, 7, 8, 9, 10];
console.log(arreglo1);
console.log(arreglo2);
console.log(typeof arreglo1);
console.log(typeof arreglo2);
let arregloCadena = ["TS", "JS", "PHP"];
arregloCadena.push("23");
// Tuplas 
let tupla; // Tamaño fijo
tupla = ["Fran", 27];
console.log(tupla);
// Enum -> Para enumerar
var semaforo;
(function (semaforo) {
    semaforo[semaforo["Rojo"] = 0] = "Rojo";
    semaforo[semaforo["Amarillo"] = 1] = "Amarillo";
    semaforo[semaforo["Verde"] = 2] = "Verde";
})(semaforo || (semaforo = {}));
;
var semaforo2;
(function (semaforo2) {
    semaforo2[semaforo2["Rojo"] = 3] = "Rojo";
    semaforo2[semaforo2["Amarillo"] = 4] = "Amarillo";
    semaforo2[semaforo2["Verde"] = 5] = "Verde";
})(semaforo2 || (semaforo2 = {}));
; // Para que empiece desde el numero que indiquemos
console.log(semaforo);
console.log(semaforo.Verde); // Devuelve el valor
console.log(semaforo2);
let personaFrancisco = {
    nombre: "Francisco",
    apellidos: "Cortés",
    edad: 27,
    estado: false,
};
console.log(personaFrancisco);
