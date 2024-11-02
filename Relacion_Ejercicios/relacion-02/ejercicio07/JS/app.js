let celdas = document.querySelectorAll("td");

let colores = ["palevioletred", "purple", "mediumslateblue", "cyan"];
let contadorColor = 0;
    for (let i = 0; i < celdas.length; i++) {
        // celdas[i].onclick = function() {
        //     this.style.backgroundColor = (this.style.backgroundColor === 'black') ? 'white' : 'black';
        //     this.style.color = (this.style.color === 'white') ? 'black' : 'white';
        // };

        celdas[i].onclick = function() {
            if (contadorColor < colores.length) {
                this.style.backgroundColor = colores[contadorColor];
                contadorColor++;
                if (contadorColor >= colores.length) {
                    contadorColor = 0;
                }
            }
        };
    }