const srvInfo = require('./javascripts/info');
const pgnEjemplos = require('./javascripts/ejemplos');
const pgnEjercicios = require('./javascripts/ejercicios');

const manejador = {

    saltoLinea :  '<Br/>',               //'\n' en Java, <Br/> en Html
    b : '&nbsp',                         //Espacio en blanco
    tab : '&nbsp' + '&nbsp' +'&nbsp',    //Tabulacion de tres espacios

    inicio : (req, res) => {
        res.render('index', { title: 'Express' });
        /* 
        res.render('index', { 
            title: 'Express',
            saltoLinea: saltoLinea,
            b: b,
            tab: tab
        }); 
        */
    },
    
    informacion : (req, res) => {
        let contenido = '' + srvInfo.mostrarSrvInfo()

        // envio respuesta al servidor                
        res.send(contenido);
    },

    ejemplos : (req, res) => {
        let contenido = '' + pgnEjemplos.pgnEjemplos()

        // envio respuesta al servidor                
        res.send(contenido);
    },

    ejemplo1 : (req, res) => {
        //const alumno = req.params.alumno;
        let contenido = '' + pgnEjemplos.ejemplo1(req.params.alumno)

        // envio respuesta al servidor                
        res.send(contenido);
    },

    ejemplo2 : (req, res) => {
        let nombre = req.query.nombre;
        let apellido = req.query.apellido;
        
        let contenido = '' + pgnEjemplos.ejemplo2(nombre,apellido,'port')

        // envio respuesta al servidor                
        res.send(contenido);
    },

    ejercicios : (req, res) => {
        let contenido = '' + pgnEjercicios.pgnEjercicios()

        // envio respuesta al servidor                
        res.send(contenido);
    },

    ej01op01 : (req, res) => {
        // let num1 = Number(req.params.num1);
        // let num2 = Number(req.params.num2);
        
        let contenido = '' + pgnEjercicios.ej01op01(req.params.num1,req.params.num2)

        // envio respuesta al servidor  
        res.status(200).json(contenido);              
    },

    ej01op02 : (req, res) => {
        
        let contenido = '' + pgnEjercicios.ej01op02(req.params.num1,req.params.num2)

        // envio respuesta al servidor  
        res.status(200).json(contenido);              
    },

    ej02op01 : (req, res) => {
        
        let contenido = '' + pgnEjercicios.ej02op01(req.params.num1,req.params.num2)

        // envio respuesta al servidor  
        res.status(200).json(contenido);              
    },

    ej03op01 : (req, res) => {
        
        let contenido = '' + pgnEjercicios.ej03op01(req.query.nombre,req.query.apellido)

        // envio respuesta al servidor  
        res.status(200).json(contenido);              
    },
 
    ej03op02 : (req, res) => {
        
        let contenido = '' + pgnEjercicios.ej03op02(req.query.nombre,req.query.apellido)

        // envio respuesta al servidor  
        res.status(200).json(contenido);              
    },

    ej03op03 : (req, res) => {
        
        let contenido = '' + pgnEjercicios.ej03op03(req.params.nombre,req.params.apellido)

        // envio respuesta al servidor  
        res.status(200).json(contenido);              
    },

}




module.exports = manejador;
