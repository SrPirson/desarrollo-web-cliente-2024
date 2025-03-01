#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('chat:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

// Requerimos la libreria socket.io y necesita que le pasemos la variable server por parametros.
const io = require("socket.io")(server);

// Lanzamos el evento de conexion para cuando el cliente se conecta al servidor
io.on("connection", (socket) => {
  // Instancia del canal de comunicación
  console.log("Se ha conectado un nuevo cliente.");

  // Emision solo para los clientes que ya estaban conectados
  socket.broadcast.emit("mensaje_chat", {
    usuario: "INFO",
    mensaje: "Se ha conectado un nuevo usuario."
  });

  // Mostrar el nuevo de clientes conectados
  io.emit("num_clientes", io.engine.clientsCount);

  // Recogemos los datos que nos envia el usuario
  socket.on("mensaje_chat", data =>{
    io.emit("mensaje_chat", data); // Emitimos los datos de nuevo al resto de usuarios
  });

  // Controlamos cuando se desconecta un cliente para actualizar los datos
  socket.on("disconnect", () => {
    io.emit("num_clientes", io.engine.clientsCount);
    io.emit("mensaje_chat", {
      usuario: "INFO",
      mensaje: "Se ha desconectado un usuario."
    });
  });

});



/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
