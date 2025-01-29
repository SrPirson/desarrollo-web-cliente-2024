const nombre = document.getElementById("nombre");
const apellido1 = document.getElementById("pApellido");
const apellido2 = document.getElementById("sApellido");
const foto = document.getElementById("foto");
const edad = document.getElementById("edad");
const email = document.getElementById("email");
const contrasenia = document.getElementById("contra");
const confContrasenia = document.getElementById("confContra");
const btnEnviar = document.getElementById("enviar");
const btnLimpiar = document.getElementById("limpiar");
const btnMostrarPass = document.getElementById("mostrarPass");

let validado = 0;


nombre.addEventListener("change", validarNombre);

function validarNombre(){
    let contenido = nombre.value.length;
    let validacionNombre = document.getElementById("validacionNombre");
    if (contenido <= 2) {
        validacionNombre.innerHTML = "El nombre debe ser como minimo de 3 caracteres."
        return false;
    } else {
        validacionNombre.innerHTML = ""
    }
    return true;
};



apellido1.addEventListener("change", validarApellido1);

function validarApellido1(){
    let contenido = apellido1.value.length;
    let validacionPApellido = document.getElementById("validacionPApellido");
    if (contenido <= 2) {
        validacionPApellido.innerHTML = "El apellido debe ser como minimo de 3 caracteres."
        return false;
    } else {
        validacionPApellido.innerHTML = ""
    }
    return true;
};



apellido2.addEventListener("change", validarApellido2); 

function validarApellido2(){
    let contenido = apellido1.value.length;
    let validacionSApellido = document.getElementById("validacionSApellido");
    if (contenido <= 2) {
        validacionSApellido.innerHTML = "El apellido debe ser como minimo de 3 caracteres."
        return false;
    } else {
        validacionSApellido.innerHTML = ""
    }
    return true;

};



foto.addEventListener("change", function() {
    let extension = foto.value.split('.')[1];
    const extensiones = ["jpg", "png"];
    let validacionFoto = document.getElementById("validacionFoto")
    if (!extensiones.includes(extension)) {
        validacionFoto.innerHTML = "Archivo erroneo."
        foto.value = "";
        return false;
    } else {
        validacionFoto.innerHTML = ""
    }
    return true;
});



edad.addEventListener("change", validarEdad); 

function validarEdad(){
    let contenidoEdad = edad.value;
    let validacionEdad = document.getElementById("validacionEdad");
    if (contenidoEdad < 18 || contenidoEdad > 99) {
        validacionEdad.innerHTML = "La edad debe de ser entre 18 y 99 años."
        return false;
    } else {
        validacionEdad.innerHTML = ""
    }
    return true;

};



contrasenia.addEventListener("change", validarContra);

function validarContra() {
    let contenidoContra = contrasenia.value.length;
    let validacionContra = document.getElementById("validacionContra");
    validarConfContra();
    if (contenidoContra < 8 || contenidoContra > 10) {
        validacionContra.innerHTML = "La contraseña debe de ser entre 8 y 10 caracteres."
        return false;
    } else {
        validacionContra.innerHTML = ""
    }
    return true;
}



confContrasenia.addEventListener("change", validarConfContra);

function validarConfContra() {
    let contenidoContras = contrasenia.value;
    let contenidoContraConf = confContrasenia.value;
    let validacionContraConf = document.getElementById("validacionContraConf");
    if (contenidoContras != contenidoContraConf) {
        validacionContraConf.innerHTML = "La contraseña no coincide con la anterior."
        return false;
    } else {
        validacionContraConf.innerHTML = ""
    }
    return true;
}

btnMostrarPass.addEventListener("click", function(){
    if (confContrasenia.type == "text") {
        confContrasenia.type = "password";
    } else {
        confContrasenia.type = "text";
    }
    
});



btnEnviar.addEventListener("click", validarFormulario);

function validarFormulario() {
    let enviarError = document.getElementById("enviarError");

    if (!validarNombre() || !validarApellido1() || !validarApellido2() || !validarEdad() || !validarContra() || !validarConfContra()) {
        enviarError.innerHTML = "No es posible enviar el formulario con campos erroneos.";
    } else {
        alert(
            "Nombre: " + nombre.value + "/n" +
            "Primer apellido: " + apellido1.value + "/n" +
            "Segundo apellido: " + apellido2.value + "/n" +
            "Email: " + edad.value + "/n" +
            "Contraseña (no se muestra)"
        );
    }
}



btnLimpiar.addEventListener("click", function(){
    nombre.value = "";
    apellido1.value = "";
    apellido2.value = "";
    foto.value = "";
    edad.value = "";
    email.value = "";
    contrasenia.value = "";
    confContrasenia.value = "";
});