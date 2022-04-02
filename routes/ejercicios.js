const express = require('express');
const router = express.Router();

const manejador =  require('../controller/controller');

/* Obtener el listado de ejercicios.  */
// router.get('/', function(req, res, next) {
//   res.send('Ruta ejercicios');
// });


/* Obtener el listado de ejercicios. 
*  http://localhost:4000/ejercicios
*/
router.get('/', manejador.ejercicios);


/* Obtener el Ejercicio 1.  
    http://localhost:4000/ejercicios/ej01op01/10/5
*/
router.get('/ej01op01/:num1/:num2', manejador.ej01op01);


/* Obtener el Ejercicio 1 opcion 2.  
    http://localhost:4000/ejercicios/ej01op02/10/5
*/
router.get('/ej01op02/:num1/:num2', manejador.ej01op02);


/* Obtener el Ejercicio 2 opcion 1.  
    http://localhost:4000/ejercicios/ej02op01/10/5
*/
router.get('/ej02op01/:num1/:num2', manejador.ej02op01);


/* Obtener el Ejercicio 3 opcion 1.  
    http://localhost:4000/ejercicios/ej03op01/?nombre=Andres&apellido=Garcia
*/
router.get('/ej03op01/', manejador.ej03op01);


/* Obtener el Ejercicio 3 opcion 2.  
    http://localhost:4000/ejercicios/ej03op02/?nombre=Andres&apellido=Garcia
*/
router.get('/ej03op02/', manejador.ej03op02);


/* Obtener el Ejercicio 3 opcion 3.  
    http://localhost:4000/ejercicios/ej03op03/Andres/Garcia
*/
router.get('/ej03op03/:nombre/:apellido', manejador.ej03op03);



module.exports = router;
