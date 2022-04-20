const express = require('express');
const router = express.Router();

//const { inicio, informacion } = require('../controller/controller');
const manejador =  require('../controller/controller');

//const { inicio, informacion } = manejador;

/* Obtener página de inicio. (GET home page.) */
router.get('/',manejador.inicio);


/* Obtener página de Informacion. (GET home page.) */
router.get('/info',manejador.informacion);

module.exports = router;
