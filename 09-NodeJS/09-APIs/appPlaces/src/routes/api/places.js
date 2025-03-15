// Gestor de rutas
// Aquí gestionamos todas las  peticiones de places

const router = require("express").Router(); // Extraemos el router de express para crear rutas y gestionar peticiones

// Gestionamos las peticiones y la impotamos del /src/places.controller.js
const PlacesController = require("../../controllers/places.controller")

router.get("/", PlacesController.getAllPlaces);

router.post("/", PlacesController.createPlace);

router.put("/", PlacesController.updatePlace);

router.delete("/", PlacesController.deletePlace);

module.exports = router; // Exportamos el routerº