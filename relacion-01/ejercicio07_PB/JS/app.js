let vectorNumeros = prompt("Introduce los enteros separados por comas: ");

let numeros = vectorNumeros.split(',').map(Number);

let suma = 0;

let mayor = 0;
let menor = 99999;

for (let i = 0; i < numeros.length; i++) {
    if(mayor < numeros[i]){
        mayor = numeros[i];
    }
    if(menor > numeros[i]){
        menor = numeros[i];
    }
    suma += numeros[i];
}

let media = (suma/numeros.length);

console.log("El suma es: " + suma);
console.log("La media es: " + media);
console.log("El mayor es: " + mayor);
console.log("El menor es: " + menor);

document.write("La suma es: " + suma + "<br>");
document.write("La media es: " + media + "<br>");
document.write("El mayor es: " + mayor + "<br>");
document.write("El menor es: " + menor + "<br>");

// 63,45,58,56
