// Set-ExecutionPolicy Unrestricted ejecutamos en PowerShell como administrador para poder ejecutar TypeScript.
// Para crear el fichero de configuración de TypeScript, ejecutamos el comando: "tsc --init" (Una vez por proyecto).
// Ctrl + Shift + B para compilar el fichero de TypeScript.
// Para compilar el fichero de TypeScript, ejecutamos el comando: "tsc nombre_fichero.ts".

// Para transpilar el fichero automaticamente ponemos "tsc nombre_fichero.ts" -w (watcher).

// Al declarar una vaiable tenemos que indicar su tipo.
let mensaje:string = "Hola Mundo";
console.log(mensaje);

let numero:number = 120;
console.log(numero);

let esViernes:boolean = false;
console.log(esViernes);

let real:number = 1.43;
let binario:number = 0b1101;
console.log(typeof binario + " " + binario);

let hexadecimal:number = 0x1A;
console.log(typeof hexadecimal + " " + hexadecimal);

let suma:number = binario + hexadecimal;
console.log(suma);

let comparacion:boolean;
comparacion = real > 2;
console.log(comparacion);

let octal:number = 0o123;
console.log(octal);

let sinRestriccion:any = 23 + "Hola"; // Tipo de variable sin restricción
console.log(typeof sinRestriccion);

let objet:Object = 23; // Admite todo menos null
let desconocido:unknown = "Hola"; // Para datos de APIs se suele usar

// Tipos de cadenas de texto.
let nombre:string = "Juan";
let apellido:string = 'Peréz';
let direccion:string = `Calle Falsa, ${numero}`;
console.log(nombre + " " + apellido + " -> " + direccion);


// Arrays
let arreglo1:number[] = [1, 2, 3, 4, 5];
let arreglo2:Array<number> = [6, 7, 8, 9, 10];
console.log(arreglo1);
console.log(arreglo2);
console.log(typeof arreglo1);
console.log(typeof arreglo2);
let arregloCadena:string[] = ["TS", "JS", "PHP"];
arregloCadena.push("23");

// Tuplas 
let tupla:[string, number]; // Tamaño fijo
tupla = ["Fran", 27];
console.log(tupla);

// Enum -> Para enumerar
enum semaforo{"Rojo", "Amarillo", "Verde"};
enum semaforo2{"Rojo"=3, "Amarillo", "Verde"}; // Para que empiece desde el numero que indiquemos
console.log(semaforo);
console.log(semaforo.Verde); // Devuelve el valor
console.log(semaforo2);

// Tipos 
interface Persona {
    nombre:string,
    apellidos:string,
    edad:number,
    estado:boolean,
}

let personaFrancisco:Persona={
    nombre:"Francisco",
    apellidos:"Cortés",
    edad:27,
    estado:false,
}

console.log(personaFrancisco);