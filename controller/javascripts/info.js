  
const myhandler = require('../handler')

const { obtenerAppNombre,
        obtenerExpressVersion,
        obtenerIpLocal,
        obtenerMomentoDeArranque,
        obtenerNodeVersion,
        obtenerAppPuerto
    } = myhandler



const saltoLinea =  '<Br/>';    //'\n' en Java, <Br/> en Html
const b = '&nbsp';              //Espacio en blanco
const tab = `${b}${b}${b}`;     //Tabulacion de tres espacios
const dA = '&#174;'             // Derechos de Autor

function mostrarSrvInfo() {
    const servidorNombre = obtenerAppNombre(); 
    const port = obtenerAppPuerto();

    const estilos= `<style>
                        h1 {color:aquamarine;}
                        h2 {color:lawngreen;}
                        
                        p {
                            color:aquamarine;
                            font-size:large;
                        }
                        
                        span {
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

    const contenido =  `<!DOCTYPE html>
                        <head>
                        <title>Servidor Info</title>
                        <link rel="icon" type="image/x-icon" href="#!">
                        ${estilos}
                        </head>
                        <body  class="fondo">
                            <h1>
                                Informacion del servidor, Node.js - Express.js 
                            </h1>
                            ${saltoLinea}
                            <h2>
                                El servidor "${servidorNombre}" esta Listo y escuchando en el puerto: ${port} 
                            </h2>
                            ${saltoLinea}${saltoLinea}
                            <span class='interlineado'>
                                - Node.js version   : <b>${tab}${b} ${obtenerNodeVersion()}</b>
                                ${saltoLinea}
                                - Express.js version: <b>${b} ${obtenerExpressVersion()} </b>
                                ${saltoLinea}
                                - Direccion/es Ip   : <b>${tab}${b} ${obtenerIpLocal()} </b>
                                ${saltoLinea}
                                - Iniciado          : <b>${tab}${tab}${tab}${tab}${b}${b} ${myhandler.obtenerMomentoDeArranque()} </b>
                            </span>
                            ${saltoLinea} ${saltoLinea} ${saltoLinea} 
                            <p class="firma">
                                ${dA}Ejercicio realizado por: <b>Andres Eduardo Garcia </b>
                            </p>
                        </body>

                        `
                        ;
    return(contenido);
};

module.exports = {mostrarSrvInfo};
