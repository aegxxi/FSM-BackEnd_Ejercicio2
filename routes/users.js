var express = require('express');
var router = express.Router();

/* Obtener la listado de usuarios.  (GET users listing.) */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
