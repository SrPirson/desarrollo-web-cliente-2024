const marcas = document.getElementById("marcas");
const modelos = document.getElementById("modelos");
const btnComprobar = document.getElementById("comprobar");

btnComprobar.addEventListener("click", function () {
    alert(marcas.options[marcas.selectedIndex].value);
    if (marcas.options[marcas.selectedIndex].value == "intel") {
        modelos.options[1].hidden = true;
        modelos.options[2].hidden = false;
        modelos.options[3].hidden = false;
    } else if (marcas.options[marcas.selectedIndex].value == "amd") {
        modelos.options[4].hidden = false;
        modelos.options[5].hidden = false;
        modelos.options[6].hidden = false;
    } else if (marcas.options[marcas.selectedIndex].value == "nvidia") {
        modelos.options[7].hidden = false;
        modelos.options[8].hidden = false;
        modelos.options[9].hidden = false;
    }
});