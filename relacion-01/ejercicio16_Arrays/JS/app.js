function comprobarComensales(msj) {
    let totalComensales = prompt(msj);
    while (totalComensales > 4 || isNaN(totalComensales) || totalComensales <= 0) {
        if (isNaN(totalComensales)) {
            alert("ERROR: Introduzca un número entero.");
        } else {
            alert("Lo siento, no admitimos grupos de " + totalComensales + ", haga grupos de 4 personas como máximo e intente de nuevo");
        }
        totalComensales = prompt(msj);
    }
    return Number(totalComensales);
}

function pedirMesa(msj, totalMesas) {
    let totalComensales = comprobarComensales(msj);
    let contador = 0;
    let mesaDisponible = false;

    while (!mesaDisponible && contador < totalMesas.length) {
        if (totalMesas[contador] === 0) {
            totalMesas[contador] = totalComensales;
            console.log("Por favor, siéntese en la mesa " + (contador + 1));
            mesaDisponible = true;
        } else if (((totalMesas[contador] + totalComensales) <= 4)) {
            totalMesas[contador] += totalComensales;
            console.log("Por favor, siéntese en la mesa " + (contador + 1));
            mesaDisponible = true;
        }
        contador++;
    }

    if (!mesaDisponible) {
        console.log("Lo siento, no hay mesas disponibles.");
    }
}

function estadoMesas(mesas) {
    console.log("Estado de las mesas:", mesas);
}

function totalMesasRest(msj) {
    let mesas = prompt(msj);
    while (isNaN(mesas) || mesas <= 0) {
        mesas = prompt("ERROR: " + msj);
    }
    console.log("El restaurante tiene " + mesas + " mesas.");

    let totalMesas = []; 
    for (let i = 0; i < mesas; i++) {
        totalMesas[i] = 0; 
    }

    return totalMesas;
}

let totalMesas = totalMesasRest("¿Cuántas mesas tiene el restaurante?");

let terminarTurno = false;
do {
    estadoMesas(totalMesas);

    pedirMesa("¿Cuántos comensales son?", totalMesas);

    let finalizar = prompt("¿Quieres finalizar el turno? (Si o No)").toUpperCase();
    if (finalizar === "SI") {
        terminarTurno = true;
    }

} while (!terminarTurno);

estadoMesas(totalMesas);
