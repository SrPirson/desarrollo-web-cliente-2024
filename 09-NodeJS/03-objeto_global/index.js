console.log(__dirname); // Referencia a la ruta completa hasta la carpeta donde estamos trabajando.
console.log(__filename); // Referencia a la ruta completa hasta el fichero que estamos ejecutando.

// Paso de argumentos mediante comandos 
console.log(process.argv); // Mediante el objeto process le indicamos la propiedad argv que nos devuelve los argumentos extras que le pasemos más la ruta de ejecución de node y el fichero, nos lo da como un array
// probamos con: node index.js --nombre Pedro --edad 38


// Creamos una función para obtener los datos
function getParam(param) {
    const index = process.argv.indexOf(param); // El index será el parametro que le pasemos como por ejemplo "--nombre"
    return index === -1 ? null : process.argv[index+1]; // Devolvemos el argumento del index más uno que será lo siguiente que haya al --nombre. Si no existe devolvemos null
}

const nombre = getParam("--nombre");
console.log(nombre);

const edad = getParam("--edad");
console.log(edad);