var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    name: 'Francisco',
    available: true,
    animals: ["pajaro", "perro", "gato", "león", "elefante"]
  });
});

module.exports = router;
