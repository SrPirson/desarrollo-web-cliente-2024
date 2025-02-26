const fs = require("fs/promises");

async function accionFicheros() {

    try {
        // fs.writeFile - Nos permite escribir en un fichero y si no existe lo crea.
        await fs.appendFile("./texto.md", "\n\nAutor: Paco Fiestas"); // Escribimos en el fichero indicando la ruta del fichero y lo que deseamos agregar

        const data = await fs.readFile("./texto.md", "utf-8") // Indicamos la ruta del fichero a leer y la codificación del fichero

        console.log(data);

    } catch (error) {
        console.log(error);
    }
    
    
}

accionFicheros();