let boton = document.getElementById("mostrar");

boton.addEventListener("click", function(){
    let contrasenia = document.getElementById("pass");
    if ( contrasenia.type == "text") {
        contrasenia.type = "password";
    } else {
        contrasenia.type = "text";
    }
    
});