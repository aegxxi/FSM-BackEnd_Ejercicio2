const express = require('express');
const router = express.Router();

const manejador =  require('../controller/controller');

/* Obtener el listado de ejempos. 
*  http://localhost:4000/ejemplos
*/
router.get('/', manejador.ejemplos);


/* Obtener el Ejemplo 1.  
    http://localhost:4000/ejemplos/ejemplo1/:alumno
*/
router.get('/ejemplo1/:alumno', manejador.ejemplo1);



/* Obtener el Ejemplo 2.  
    http://localhost:4000/ejemplos/ejemplo2/?nombre=Andres&apellido=Garcia
*/
router.get('/ejemplo2', manejador.ejemplo2);




module.exports = router;
