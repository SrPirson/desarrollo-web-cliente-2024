// Centro de las rutas y peticiones de las APIs

const router = require("express").Router(); // Extraemos el router de express para crear rutas y gestionar peticiones

// Ya nos llega el /api
// Delego todas las peticiones sin importar el metodo si tienen /api/aplaces las va a gestionar el /places
router.use("/places", require("./api/places"));


module.exports = router; // Exportamos el router