function comprobarMoneda(msj){
    let j = prompt(msj);
    while(isNaN(j) || j <= 0 || j == "" || j == " "){
        j = prompt("ERROR: " + msj);
    }
    return Number(j);
}

function comprobarTipo(msj){
    let j = prompt(msj);
    while(isNaN(j) || j > 2 || j < 0 || j == "" || j == " "){
        j = prompt("ERROR: " + msj);
    }
    return Number(j);
}


function conversion(){
    let tipo = comprobarTipo("Indicame que conversión desea hacer (1 - de Euros a Pesetas o 2 - de Euros a Dolares)");
    let cantidad = comprobarMoneda("Indique la cantidad a convertir");
    let total = 0;

    switch (tipo) {
        case 1:
            total = cantidad * 166;
            alert(cantidad + "€ son " + total + " pesetas.");
            break;
        case 2:
            total = cantidad * 1.09
            alert(cantidad + "€ son " + total + " dólares.");
            break;
    }
    
}