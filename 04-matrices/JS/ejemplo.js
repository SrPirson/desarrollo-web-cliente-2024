autos=[['BMW1', 'BMW2', 'BMW3'], ['Audi1', 'Audi2'], ['Volvo']];
console.log(autos);

console.log(autos.length);
console.log(autos[0].length);
console.log(autos[1].length);
console.log(autos[2].length);

function PintaMatriz(autos){
    let resultado = "";

    // relleno valores
    for (let i = 0; i < autos.length; i++) {
        for (let j = 0; j < autos[i].length; j++) {
            resultado += autos[i][j];
        }
        console.log(resultado);
        resultado = "";
    }
}

PintaMatriz(autos);