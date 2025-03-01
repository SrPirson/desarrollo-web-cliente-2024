// Para crear la aplicación usamos: express --no-view --git PrimeraApp

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require("fs/promises");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productsRouter = require("./routes/products");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Middleware lo ponemos antes de la rutas para que sea lo primero que ejecute
app.use((req, res, next) => { // next es una función dentro del middleware queremoas dar el salto al siguiente majenador
    console.log(new Date());
    next(); // Para que la función siga su trabajo, si no lo ponemos se queda siempre en el middleware
});

app.use((req, res, next) => {
    // Un ejemplo aleatorio de bloqueo | Se puede modificar para bloquear ciertas IPs, comprobar si está registrado, comprobar en general
    const randomNum = Math.random();
    if (randomNum > 0.6) {
        res.send("No puedes acceder");
    } else {
        next();
    }
});

app.use(async (req, res, next) => {
    // Creación de un log
    await fs.appendFile("./main.log", `Método: ${req.method}. Url: ${req.url}\n`);
    next();
});

/* -------- RUTAS ----------- */

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/products", productsRouter);

module.exports = app;