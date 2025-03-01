const router = require('express').Router();

/* 

  Tipos de respuestas:
  res.render() -> Para enviar un HTML.
  res.send() -> Para enviar una respuesta.
  res.status().send() -> Para enviar una respuesta con el estado de la respuesta. (200, 404, 503...).
  res.end() -> Para enviar una respuesta.
  res.json({}) -> Para devolver un JSON. (Imprescindible si vamos a crear APIs).
  res.download() -> Forzamos la descarga de un fichero

*/

router.get('/', (req, res) => {
  const { page = 1, limit = 10 }  = req.query; // Objeto con tantas claves como estemos enviando en la petición | ejem: GET http://localhost:3000/products?page=3&limit=10
  console.log(page, limit); 
  res.status(503).send("Recuperamos todos los productos");
});

router.get("/new", (req, res) => {
    // res.json({ uno: "uno", dos: "dos" });
    res.download("./files/playa.jpg");
})

router.get("/:productId", (req, res) => { // Con los dos : y el nombre que indiquemos hacemos que la URL sea dinamica para poder cambiar esos datos
  // console.log(req.params); // req.params obtiene todos los valores dinamicos en forma de objeto
  const { productId } = req.params; // Destructuring del objeto req.params para obtener el valor que ponemos en la URL
  res.send(`Recupero el producto con ID: ${productId}`)
})

router.post("/create", (req, res) => {
  const { name, price } = req.body; // Recuperamos el body de la petición con el objeto body
  console.log(name, price); 
  res.send("Gestión de los datos del formulario");
})

module.exports = router;
