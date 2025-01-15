let apellidoCasilla = document.getElementById("apellidos");


apellidoCasilla.addEventListener("focusout", function(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellidos").value;
    let boton = document.getElementById("enviar");
    if (nombre === apellido) {
        boton.disabled = false;
    } else {
        boton.disabled = true;
    }
});