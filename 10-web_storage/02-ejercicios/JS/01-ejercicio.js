document.getElementById("incrementar").addEventListener("click", incrementar);
document.getElementById("decrementar").addEventListener("click", decrementar);
document.getElementById("resetear").addEventListener("click", resetear);

function incrementar() {
    let contadorInicial = parseInt(localStorage.getItem("contador"));
    localStorage.setItem("contador", contadorInicial+1);
    actualizarContador(contadorInicial);
}

function decrementar() {
    let contadorInicial = parseInt(localStorage.getItem("contador"));
    localStorage.setItem("contador", contadorInicial-1);
    actualizarContador(contadorInicial);
}

function resetear() {
    let contadorInicial = 0;
    localStorage.setItem("contador", contadorInicial);
    actualizarContador(contadorInicial);
}

function actualizarContador(contadorInicial) {
    document.getElementById("contador").value = contadorInicial;

}

actualizarContador(parseInt(localStorage.getItem("contador")));