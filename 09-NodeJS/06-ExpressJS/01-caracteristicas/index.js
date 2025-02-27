// Instalamos nodemon a nivel global con: npm install -g nodemon 
// Instalamos express con: npm install express  --> libreria para que todo funcione
// Instalamos la libreria dotenv con: npm install dotenv --> Nos permite leer los ficheros .env y guardarlos en variables
// Instalamos express-generator de manera global con: npm install -g express-generator

const express = require("express");

// Config .env
require("dotenv").config();

const app = express(); // Instancia prepara para recibir peticiones


// GET http://localhost:3000/contactos
app.get("/contactos", (req, res) => {
    res.send("Lista de contactos");
});

app.post("/usuarios/nuevo", (req, res) => {
    res.send("Nuevo usuario");
});


const PORT = process.env.PORT || 3000; // Si no hay un valor en el fichero .env con el valor PORT coge por defecto el valor 3000
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});