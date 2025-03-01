// npm init - Para inicializar el proyecto desde la consola.
// npm init -y

// https://www.npmjs.com/ - Encontramos todas las librerias de NodeJS
// npm install nombre_libreria - Para instalar las librerias que necesitemos, en cada proyecto hay que instalarlo desde consola.

// Con npm start gracias al script creado en package.json podemos iniciar el proyecto directamente.

// Usamos la libreria:
// Primero requerimos la libreria con el nombre de la libreria que vamos a usar.
const colors = require("colors");
console.log("hello".green); // Gracias a la libreria podemos mostrar el texto de color verde.


// Usamos la libreria axios (peticiones web)
const axios = require("axios").default; // Requerimos

axios.get("https://rickandmortyapi.com/api/character") // Petición web a la API de rick y morty
    .then(response => {
        console.log(response.data); // Respuesta siempre viene en response con axios
    })
    .catch(error => {
        console.log(error); // Error en caso de que lo haya
    })