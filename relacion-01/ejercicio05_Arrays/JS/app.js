let fraseOriginal = prompt("Ingrese una frase: ").split(" ");

// Seleccionamos el elemento con id 'resultado'
let resultadoElement = document.getElementById("resultado");

// Mostrar la primera y última palabra en el documento usando innerHTML
resultadoElement.innerHTML = 
    "Total de palabras: " + fraseOriginal.length + "<br>" +
    "Primera palabra: " + fraseOriginal.indexOf() + "<br>" +
    "Última palabra: " + fraseOriginal.lastIndexOf() + "<br>" +
    "Frase a la inversa: " + fraseOriginal.reverse() + "<br>" +
    "Frase ordenada alfabeticamente: " + fraseOriginal.sort() + "<br>" +
    "Frase ordenada a la inversa: " + fraseOriginal.sort().reverse();

// También mostrar en la consola
console.log("Total de palabras: " + fraseOriginal.length);
console.log("Primera palabra: " + fraseOriginal.indexOf());
console.log("Última palabra: " + fraseOriginal.lastIndexOf());
console.log("Frase a la inversa: " + fraseOriginal.reverse());
console.log("Frase ordenada alfabeticamente: " + fraseOriginal.sort());
console.log("Frase ordenada a la inversa: " + fraseOriginal.sort().reverse());