addEventListener('keydown', function(event) {
    let formulario = document.getElementById('formulario');
    console.log(formulario);

    var teclaPulsada = event.keyCode;
    console.log(teclaPulsada);

    if (teclaPulsada === 13 || teclaPulsada === 3) {
        formulario.submit();
    }
    
});