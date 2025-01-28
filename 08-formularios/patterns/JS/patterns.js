const matricula_coche = /^[0-9]{4}-[A-Z^AEIOU]{3}|[A-Z]{1,2}-[0-9]{4}-[A-Z]{2}$/;

let coche = document.getElementById("btn_matricula_coche");

coche.addEventListener('click', function() {

    let matricula = document.getElementById('matricula_coche');
    let valormatricula = matricula.value.toUpperCase();

    if (matricula_coche.test(valormatricula)) {
        alert(`La matricula ${valormatricula} es correcta.`);
    } else {
        alert('Error en la matricula el formato debe ser ‘MU-XXXX-YYY’ donde XXXX son 4 dígitos numéricos y YYY son letras de la A a la Z en mayúsculas')
    }
    
    matricula.innerHTML = " ";
}); 