const router = require("express").Router();
const UsersController = require("../../controllers/users.controller");

router.post("/register", UsersController.register);
router.post("/login", UsersController.login);

module.exports = router;