const router = require('express').Router();

router.get('/', (req, res) => {
  res.send("Recuperamos todos los productos");
});

router.get("/new", (req, res) => {
    res.send("Formulario para crear productos");
})

router.get("/:productId", (req, res) => { // Con los dos : y el nombre que indiquemos hacemos que la URL sea dinamica para poder cambiar esos datos
  // console.log(req.params); // req.params obtiene todos los valores dinamicos en forma de objeto
  const { productId } = req.params; // Destructuring del objeto req.params para obtener el valor que ponemos en la URL
  res.send(`Recupero el producto con ID: ${productId}`)
})

router.post("/create", (req, res) => {
    res.send("Gestión de los datos del formulario");
})

module.exports = router;
