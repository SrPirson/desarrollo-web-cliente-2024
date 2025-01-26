// npm init - Para inicializar el proyecto desde la consola.

// npm install libreria - Para instalar las librerias que necesitemos, en cada proyecto hay que instalarlo desde consola.

const colors = require("colors");
const axios = require("axios");

console.log("hello".green);

axios.get("https://rickandmortyapi.com/api/character")
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    })