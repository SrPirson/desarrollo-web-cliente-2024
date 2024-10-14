function convertidor(cadena){
    let arrayCadena = cadena.split('');
    for (let i = 0; i < arrayCadena.length; i++) {
        if(arrayCadena[i] === "T"){
            arrayCadena[i] = "U";
        }
    }
    return arrayCadena.join("");
}

let cadena = prompt("Introduce tu formula: ");
console.log(convertidor(cadena));