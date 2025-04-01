const router = require("express").Router;

const UsersController = require("../../controllers/users.controller"); // Requerimos el metodo para poder usarlo
router.post("/register", UsersController); // Creamos un post para usuarios

module.exports = router;