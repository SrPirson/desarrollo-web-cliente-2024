function media() {

    let contador = 1;
    let n1 = 0;
    let n2 = 0;
    let n3 = 0;
    let n4 = 0;
    let n5 = 0;
    let n6 = 0;
    let n7 = 0;
    let n8 = 0;
    let n9 = 0;
    let n10 = 0;
    let valor = 0;
    do {
        do {
            valor = prompt(contador + ".- Indica un número o pon un . para terminar");
            if (valor == ".") {
                break;
            } else {
                n1 = valor;
            }
            contador++;
        } while (isNaN(valor) || valor == "" || valor == " ");
        if (valor != ".") {
            do {
                valor = prompt(contador + ".- Indica un número o pon un . para terminar");
                if (valor === ".") {
                    break;
                } else {
                    n2 = valor;
                }
                contador++;
            } while (isNaN(valor) || valor == "" || valor == " ");
        }
        if (valor != ".") {
            do {
                valor = prompt(contador + ".- Indica un número o pon un . para terminar");
                if (valor === ".") {
                    break;
                } else {
                    n3 = valor;
                }
                contador++;
            } while (isNaN(valor) || valor == "" || valor == " ");
        }
        if (valor != ".") {
            do {
                valor = prompt(contador + ".- Indica un número o pon un . para terminar");
                if (valor === ".") {
                    break;
                } else {
                    n4 = valor;
                }
                contador++;
            } while (isNaN(valor) || valor == "" || valor == " ");
        }
        if (valor != ".") {
            do {
                valor = prompt(contador + ".- Indica un número o pon un . para terminar");
                if (valor === ".") {
                    break;
                } else {
                    n5 = valor;
                }
                contador++;
            } while (isNaN(valor) || valor == "" || valor == " ");
        }
        if (valor != ".") {
            do {
                valor = prompt(contador + ".- Indica un número o pon un . para terminar");
                if (valor === ".") {
                    break;
                } else {
                    n6 = valor;
                }
                contador++;
            } while (isNaN(valor) || valor == "" || valor == " ");
        }
        if (valor != ".") {
            do {
                valor = prompt(contador + ".- Indica un número o pon un . para terminar");
                if (valor === ".") {
                    break;
                } else {
                    n7 = valor;
                }
                contador++;
            } while (isNaN(valor) || valor == "" || valor == " ");
        }
        if (valor != ".") {
            do {
                valor = prompt(contador + ".- Indica un número o pon un . para terminar");
                if (valor === ".") {
                    break;
                } else {
                    n8 = valor;
                }
                contador++;
            } while (isNaN(valor) || valor == "" || valor == " ");
        }
        if (valor != ".") {
            do {
                valor = prompt(contador + ".- Indica un número o pon un . para terminar");
                if (valor === ".") {
                    break;
                } else {
                    n9 = valor;
                }
                contador++;
            } while (isNaN(valor) || valor == "" || valor == " ");
        }
        if (valor != ".") {
            do {
                valor = prompt(contador + ".- Indica un número o pon un . para terminar");
                if (valor === ".") {
                    break;
                } else {
                    n10 = valor;
                }
                contador++;
            } while (isNaN(valor) || valor == "" || valor == " ");
        }
    } while (contador < 10 || valor == ".");

    let media = (n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10) / 10;
    console.log("La media es: " + media);
}
