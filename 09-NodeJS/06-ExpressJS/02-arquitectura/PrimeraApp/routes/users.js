const router = require('express').Router();

router.get('/', (req, res) => {
  res.send("Mostrar usuarios");
});

router.get("/edit", (req, res) => {
    res.send("Editar usuarios");
})

router.post("/update", (req, res) => {
    res.send("Modificar usuarios");
})

module.exports = router;
