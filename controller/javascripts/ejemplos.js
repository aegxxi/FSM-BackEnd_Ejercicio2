const myhandler = require('../handler')

const saltoLinea =  '<Br/>';  //'\n' en Java, <Br/> en Html
const b = '&nbsp';              //Espacio en blanco
const tab = `${b}${b}${b}`;     //Tabulacion de tres espacios
const dA = '&#174;'             // Derechos de Autor


function pgnEjemplos() {

  const estilos=`<style>
                  h1 {color:aquamarine;}
                  h2 {color:lawngreen;}
                  
                  p {
                      color:aquamarine;
                      font-size:large;
                    }

                  a {color:aliceblue}
                  summary {color:aliceblue}
                  article {color:aliceblue}
                  
                  .interlineado { line-height: 150%;}

                  .fondo {
                    color:aquamarine;
                    background-color: black;
                    margin: 2rem;
                  }

                  .textoComentario{
                    color:aliceblue
                  }

                  .firma {
                    color:aquamarine;
                    height: 64rem;
                    text-align: right;
                    margin-right: 32rem;
                    }
                </style>
                `
                ;
  const contenido = `<head>
                      <title>Ejemplos</title>
                      ${estilos}
                     </head>
                     <body  class="fondo">
                      <h1>
                        Ejemplos - Llamadas Get 
                      </h1>
                       ${saltoLinea} ${saltoLinea}
                      <h2>
                        Llamadas Get:
                      </h2>
                      ${saltoLinea}
                      <h3>
                        Ejemplos:
                      </h3>
                      <ul>
                        <li>
                          <p>Ejemplo 1 -> Procesando Parametros (params) en las rutas: <a href="http://localhost:4000/ejemplos/ejemplo1/Andres" target="_blank">Ver Ejemplo</a></p>
                        </li>
                        <li>
                          <p>Ejemplo 2 -> Procesando Consultas (Querys) en las rutas: <a href="http://localhost:4000/ejemplos/ejemplo2/?nombre=Andres&apellido=Garcia" target="_blank">Ver Ejemplo</a></p>
                        </li>
                      </ul> 
                      ${saltoLinea}
                      ${saltoLinea} 
                      <p class="firma">
                      ${dA}Ejercicio realizado por: <b>Andres Eduardo Garcia </b>
                      </p>
                    </body>

                    `
                    ;
    return(contenido);
};


// Procesando Parametros (params) en las Rutas
// -------------------------------------------
//  Ej: http://localhost:4000/numen/Andrres
// app.get('/numen/:alumno', (req, res) => {

function ejemplo1(alumno="Desconocido"){
        const saltoLinea =  '<Br/>';
        const b = '&nbsp'; //Espacio en blanco
        const tab = `${b}${b}${b}`; //Tabulacion de tres espacios 
        const estilos=`<style>
                        h1 {
                          color:darkslategrey;
                          font-weight: normal;
                        }
                        h2 {color:darkslategrey;}
                        p {color:darkslategrey;}
                        a {color:aliceblue}
      
                        .interlineado {line-height: 150%;}
      
                        .destacar1{
                          color:brown;
                          font-size:large;
                        }
      
                        .destacar2{
                          color:blueviolet;
                          font-size:large;
                        }
      
                        .cuerpo {
                          color:Black;
                          background-color: lightsteelblue;
                          margin: 2rem;
                        }
      
                        .codigo {
                          color:white;
                          background-color: darkslategray;
                          margin-right: 32rem;
                          line-height: 200%;
                          font-size:large;
                        }
      
                        .firma {
                          color:darkslategrey;
                          height: 64rem;
                          text-align: right;
                          margin-right: 32rem;
                          }  
                      </style>
                      `
                      ;
        //let alumno = alumno //req.params.alumno;
      
        let respuesta =`
                      <head>
                        <title>Rutas (Prams)</title>
                        ${estilos}
                      </head>
                      <body  class="cuerpo">
                        <h1>
                          Retorna: <b><i>Hola: ${alumno}</i></b>
                        </h1>
                        ${saltoLinea}
                        <p>URI: <i><b> localhost:${'port'}</b>/numen/<i class='destacar2'>${alumno}</i></i</p>
                        ${saltoLinea}${saltoLinea}
                        <h2>
                          Codigo: 
                        </h2>
                        <div class='codigo'>
                          <code>
                            ${`app.get('/numen/:alumno', (req, res) => {`} ${saltoLinea}
                            ${`${tab} Let alumno = req.params.alumno;`} ${saltoLinea}
                            ${`${tab} res.status(200).send('Hola: ' + ${'${alumno}'});`} ${saltoLinea}
                            ${`}) `} ${saltoLinea}
                          </code>
                        </div>
                        ${saltoLinea}${saltoLinea}${saltoLinea} 
                          <p class="firma">
                          ${dA}Ejercicio realizado por: <b>Andres Eduardo Garcia </b>
                          </p>
                      </body> 
                        `
          ;
      
        return(respuesta);
      }
      

// Procesando Consultas (Querys) en las rutas
// ------------------------------------------
//  Ej: http://localhost:4000/prueba?nombre=Andres&apellido=Garcia
// app.get('/prueba', (req, res) => {

    function ejemplo2(nombre="Desconocido",apellido="Desconocido", port="Desconocido"){
    
        const saltoLinea =  '<Br/>'; 
        const b = '&nbsp'; //Espacio en blanco
        const tab = `${b}${b}${b}`; //Tabulacion de tres espacios 
    
        const estilos=`<style>
                        h1 {
                          color:darkslategrey;
                          font-weight: normal;
                        }
                        h2 {color:darkslategrey;}
                        p {color:darkslategrey;}
                        a {color:aliceblue}
      
                        .interlineado {line-height: 150%;}
      
                        .destacar1{
                          color:brown;
                          font-size:large;
                        }
      
                        .destacar2{
                          color:blueviolet;
                          font-size:large;
                        }
      
                        .cuerpo {
                          color:Black;
                          background-color: lightsteelblue;
                          margin: 2rem;
                        }
      
                        .codigo {
                          color:white;
                          background-color: darkslategray;
                          margin-right: 32rem;
                          line-height: 200%;
                          font-size:large;
                        }
      
                        .firma {
                          color:darkslategrey;
                          height: 64rem;
                          text-align: right;
                          margin-right: 32rem;
                          }  
                      </style>
                      `
                      ; 
        
        //let nombre = nombre //req.query.nombre;
        //let apellido = apellido //req.query.apellido;
        let resultado = `Mi nombre es: ${nombre}, ${apellido} `;
      
        let respuesta =`
                        <head>
                          <title>Rutas (Qrys)</title>
                          ${estilos}
                        </head>
                        <body  class="cuerpo">
                          <h1>
                            Retorna: <b><i>${resultado.trim()}</i></b>
                          </h1>
                          ${saltoLinea}
                          <p>URI: <b><i> localhost:${port}</b>/prueba<b class='destacar1'>?</b><i class='destacar2'>nombre=${nombre}</i><b class='destacar1'>&</b><i class='destacar2'>apellido=${apellido}</i></i></p>
                          ${saltoLinea}
                          <h2>
                            Codigo: 
                          </h2>
                          <div class='Codigo'>
                            <code>    
                              ${`app.get('/prueba', (req, res) => {   `} ${saltoLinea}
                              ${`${tab} let nombre = req.query.nombre;`} ${saltoLinea}
                              ${`${tab} let apellido = req.query.apellido;`}${saltoLinea}
                              ${`${tab} let resultado = 'Mi nombre es: ${'${nombre}, ${apellido}'}';`} ${saltoLinea}
                              ${`${tab} res.status(200).send(resultado);`} ${saltoLinea}
                              ${`})   `} ${saltoLinea}
                            </code>
                          </div>
                          ${saltoLinea}${saltoLinea}${saltoLinea} 
                          <p class="firma">
                          ${dA}Ejercicio realizado por: <b>Andres Eduardo Garcia </b>
                          </p>
                        </body> 
                        `
                        ;
        
        return(respuesta);
      }
    


module.exports = {
                    pgnEjemplos,
                    ejemplo1, 
                    ejemplo2 
                };                    