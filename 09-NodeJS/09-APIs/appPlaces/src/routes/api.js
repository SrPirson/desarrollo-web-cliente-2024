// Centro de las rutas y peticiones de las APIs

const { checkToken } = require("../helpers/middlewares");

const router = require("express").Router(); // Extraemos el router de express para crear rutas y gestionar peticiones

// Ya nos llega el /api
// Delego todas las peticiones sin importar el metodo si tienen /api/aplaces las va a gestionar el /places
router.use("/places", checkToken, require("./api/places"));

// Todas las peticiones que lleguen con /api/users las delegamos al fichero users
router.use("/users", require("./api/users"));

module.exports = router; // Exportamos el router