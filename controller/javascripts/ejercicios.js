const myhandler = require('../handler')
const entorno = require('../../appSrvEntorno');

const {obtenerMomentoDeArranque} = myhandler

const { fnMiServidor } =entorno
const { srvPuerto, srvNombre } = fnMiServidor()


const saltoLinea =  '<Br/>';    //'\n' en Java, <Br/> en Html
const b = '&nbsp';              //Espacio en blanco
const tab = `${b}${b}${b}`;     //Tabulacion de tres espacios
const dA = '&#174;'             // Derechos de Autor

function pgnEjercicios(){
    
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
                      <title>Ejercicios</title>
                      ${estilos}
                     </head>
                     <body  class="fondo">
                      
                     <h1>
                        Ejercicios 
                      </h1>
                      
                      ${saltoLinea}${saltoLinea}
                      
                      <h2>
                        Listado de ejercicios:
                      </h2>
                      ${saltoLinea}
                      <ul>
                        <li>
                          <p>Ejercicio 1 -> Sumar dos valores: <a href="http://localhost:${srvPuerto}/ejercicios/ej01op02/9/2" target="_blank">Ver Ejercicio</a></p>
                          <details>
                          <summary>Comentarios</summary>
                          <article>
                              <p class="textoComentario"> - Como los parametros son parte de la ruta, si alguno se omite, falla la ruta</p>
                              <p class="textoComentario"> - En este caso no se valido cada parametro, se valido el resultado</p>
                              <p class="textoComentario">${tab} Si bien siempre es conveniente usar <b><i>"Number(req.params.x)"</i></b> para transformar el valor del parametro de texto a numero</p>
                              <p class="textoComentario">${tab} ${b}En este ejercicio, se eligio multiplicarlo por 1 (elemento neutro de la multiplicacion)</p>
                              <p class="textoComentario">${tab} <b><i>Fundamentacion:</i></b></p>
                              <p class="textoComentario">${tab} ya que en Js ("2" * 2 = 4), si el texto ("2"), es un numero, lo convierte en el mumero (2) y devuelve el resultado (4) como numero</p>
                              <p class="textoComentario">${tab} ojo! en Js ("2" + 2 = "4"), si el texto ("2"), es un numero, lo convierte en el mumero (2) y devuelve el resultado ("4") como texto</p>
                              <p class="textoComentario">${tab} ojo! en Js ("A" * 2)=NaN (no es un numero) pero Js lo considera de tipo numerico. NaN usado en cualquier operacion da como resultado NaN</p>
                              <p class="textoComentario">${tab} aprovechando esto si multiplicamos el valor recibido en el parametro por 1 (Valor neutro) y lo almacenamos en una variable, esta sera de tipo numerico</p>
                              <p class="textoComentario">${tab} si luego usamos las variables en una operacion matematica el resultado sera numerico, o sea cualquier numero incluyendo NaN</p>
                              <p class="textoComentario">${tab} por eso un simple ternario nos sirve para validar la variable que usamos para almacenar el resultado y no es necesario validar cada parametro </p>
                              <p class="textoComentario">${tab} Ejemplo del ternario => (resultado !== null && !isNaN(resultado)) ? resultado : "Mesaje de parametros incorrectos"; </p>
                              <p class="textoComentario">___</p>
                          </article>
                        </details> 
                          </li>
                        <li>
                          <p>Ejercicio 2 -> Restar dos valores, distintos de cero: <a href="http://localhost:${srvPuerto}/ejercicios/ej02op01/9/2" target="_blank">Ver Ejercicio</a></p>
                          <details>
                            <summary>Comentarios</summary>
                            <article>
                                <p class="textoComentario">En este caso hay validaciones de los datos pasados por parametros</p>
                                <p class="textoComentario"> - Como los parametros son parte de la ruta, si alguno se omite, falla la ruta</p>
                                <p class="textoComentario"> - Si se pasan todos los parametros, los datos recibidos pueden ser validados</p>
                                <p class="textoComentario">${tab} - Se valido que los datos recibidos sean numericos</p>
                                <p class="textoComentario">${tab} - Se valido que los datos recibidos no sean 0 (cero)</p>
                                <p class="textoComentario">___</p>
                            </article>
                          </details> 
                          </li>
                        <li>
                          <p>Ejercicio 3 -> Nombre y Apellido (Por Consulta, sin validaciones): <a href="http://localhost:${srvPuerto}/ejercicios/ej03op01/?nombre=Andres&apellido=Garcia" target="_blank">Ver Ejercicio</a></p>
                          <details>
                            <summary>Comentarios</summary>
                            <article>
                                <p class="textoComentario">En este caso no hay validaciones de los datos pasados a la consulta</p>
                                <p class="textoComentario">___</p>
                            </article>
                          </details>   
                        </li>
                        <li>
                          <p>Ejercicio 3 -> Nombre y Apellido (Por Consulta, con validaciones): <a href="http://localhost:${srvPuerto}/ejercicios/ej03op02/?nombre=Andres&apellido=Garcia" target="_blank">Ver Ejercicio</a></p>
                          <details>
                            <summary>Comentarios</summary>
                            <article>
                                <p class="textoComentario">En este caso si hay validaciones de los datos pasados a la consulta</p>
                                <p class="textoComentario"> - En este caso los datos pueden haber sido enviados o no</p>
                                <p class="textoComentario">${tab} - Se valido que todos los datos se hayan recibido</p>
                                <p class="textoComentario">${tab} - Se valido que los datos recibidos sean texto y no numeros</p>
                                <p class="textoComentario">___</p>
                            </article>
                          </details> 
                          </li>
                        <li>
                          <p>Ejercicio 3 -> Nombre y Apellido (Por Parametros, con validaciones): <a href="http://localhost:${srvPuerto}/ejercicios/ej03op03/Andres/Garcia" target="_blank">Ver Ejercicio</a></p>
                          <details>
                            <summary>Comentarios</summary>
                            <article>
                                <p class="textoComentario">En este caso si hay validaciones de los datos pasados por parametros</p>
                                <p class="textoComentario"> - Como los parametros son parte de la ruta, si alguno se omite, falla la ruta</p>
                                <p class="textoComentario"> - Si se pasan todos los parametros, los datos recibidos pueden ser validados</p>
                                <p class="textoComentario">${tab} - Se valido que los datos recibidos sean texto y no numeros</p>
                                <p class="textoComentario">___</p>
                            </article>
                          </details> 
                          </li>
                      </ul> 
                      ${saltoLinea} 
                      <p class="firma">
                        ${dA}Ejercicio realizado por: <b>Andres Eduardo Garcia </b>
                      </p>
                    </body>

                    `
                    ;
  
  // envio respuesta al servidor                
  return(`${contenido}`);
}





// ---------- 
// Ejercicios
// ----------


// Ejercicio 1 - Sumar dos valores
// -----------

// Opcion 1 -  Sumo dos numeros pasados como parametro en la ruta 
//  Transformo el texto a numero con la funcion Number()
// Como los parametros son parte de la ruta, si alguno se omite, falla la ruta
// ej: href="http://localhost:4000/sumaEjemploClase/9/2
//app.get('/sumaEjemploClase/:num1/:num2', (req, res) => {
  
function ej01op01 (pNum1,pNum2){
    
    let num1 = Number(pNum1)    //Number(req.params.num1);
    let num2 = Number(pNum2)   //Number(req.params.num2);
    let resultado = num1 + num2;

  //res.send(`La suma es: ${resultado} `);
  return(resultado);
}


// Opcion 2 - Sumar dos valores pasados por parametros a la ruta
// Transformo el texto a numero haciendo una operacion matematica
// Como los parametros son parte de la ruta, si alguno se omite, falla la ruta
// Se valida que los parametros pasados sean numericos
// Si bien siempre es conveniente usar "Number(req.params.x)" para transformar el valor del parametro de texto a numero,
// para este ejercicio se eligio multiplicarlo por 1 (elemento neutro de la multiplicacion)
// se elijo esto, porque asi verifico el estado de una sola variable "resultado" para validar las entradas
// Fundamentacion:
//     ya que en Js ("2" * 2 = 4), si el texto ("2"), es un numero, lo convierte en el mumero (2) y devuelve el resultado (4) como numero
//     ojo! en Js ("2" + 2 = "4"), si el texto ("2"), es un numero, lo convierte en el mumero (2) y devuelve el resultado ("4") como texto
//     ojo! en Js ("A" * 2)=NaN (no es un numero) pero Js lo considera de tipo numerico. NaN usado en cualquier operacion da como resultado NaN
//     aprovechando esto si multiplicamos el valor recibido en el parametro por 1 (Valor neutro) y lo almacenamos en una variable, esta sera de tipo numerico
//     si luego usamos las variables en una operacion matematica el resultado sera numerico, o sea cualquier numero incluyendo NaN
//     por eso un simple ternario nos sirve para validar la variable que usamos para almacenar el resultado y no es necesario validar cada parametro
//     la siguiente comparacion (resultado !== null && !isNaN(resultado)) ya solucona el tema plateado
// Ej: http://localhost:4000/suma/9/2
//app.get('/suma/:num1/:num2', (req, res) => {

function ej01op02 (pNum1,pNum2){
    let num1 = (pNum1) * 1;   //(req.params.num1) * 1;
    let num2 = (pNum2) *1;    //(req.params.num2) *1;
    let resultado = num1 + num2;

    // Consologueo los valores a trabajar en este ejercicio
    console.log(``);
    console.log(`Log de valores del ejercicio 1 Opcion 2: ${obtenerMomentoDeArranque()}`);
    console.log(`. Parametro pNum1 (req.params.num1) => ${pNum1} -> Tipo: ${typeof pNum1}`);
    console.log(`. req.params.num2 (req.params.num2) => ${pNum2} -> Tipo: ${typeof pNum2}`);
    console.log(`. num1 => ${num1} -> Tipo: ${typeof num1}`);
    console.log(`. num2 => ${num2} -> Tipo: ${typeof num2}`);
    console.log(`. resultado => ${resultado} -> Tipo: ${typeof resultado}`);
    console.log(`. (resultado !== null && !isNaN(resultado)) => ${(resultado !== null && !isNaN(resultado))} -> Tipo: ${typeof (resultado !== null && !isNaN(resultado))}`);
    //---------------------------------------------------------------------------    

    // Asigno a variable el error a mostrar
    let msjPrmIncorrecto = `Ambos Parametros deben ser Numeros. ruta/${num1}/${num2}`;

    // Asigno a variable el resultado, luego de validarlo
    let respuesta = (resultado !== null && !isNaN(resultado)) ? resultado : msjPrmIncorrecto;

    // Muestra del ternario como If ... else
    // let respuesta
    // if (resultado !== null && !isNaN(resultado)) {
    //   respuesta = resultado
    // } else {
    //   respuesta = msjPrmIncorrecto
    // }  

    // informo el resultado ya validado
    return(respuesta);

    //Consologueo la repuesta
    console.log(`* Respuesta: ${respuesta}`);
}



// Ejercicio 2 - Restar dos valores pasados por parametros en la ruta
// -----------
// Se Validara que los valores pasados en los parametros no sean 0 (cero)
//  En este ejercicio, para efectuar la resta, transformo el texto a numero haciendo una operacion matematica. 
//    (por ejemplo multiplico por 1 que es un elemento neutro para la multiplicacion)
//    sin embargo lo estandar seria "Number(req.params.x)" 
//  Como los parametros son parte de la ruta, si alguno se omite, falla la ruta
//  En las variables donde se almacenaron de los parametros transformados se obtendra lo sguiente:
//    Si el contenido a transformar contenia caracteres no numericos, su contenido sera NaN y su tipo sera numerico
//    Si el contenido a transformar contenia caracteres numericos, su contenido sera dicho numero y su tipo sera numerico
//    Recordemos que por ejemplo (10 - NaN = NaN) y NaN es de tipo numerico
//    Por lo anterior la siguiente comparacion resuellve la validacion (num1 !== 0 && num2 !== 0)
//  Ej: http://localhost:4000/resta/9/2
//app.get('/resta/:num1/:num2', (req, res) => {
function ej02op01 (pNum1,pNum2){    
  // Cargo en variables los parametros, los transformo, y cargo el resultado en otra variable
  let num1 = (pNum1) * 1;     //(req.params.num1) * 1;
  let num2 = (pNum2) * 1;     //(req.params.num2) * 1;
  let resultado = num1 - num2;
  
  // Consologueo los valores a trabajar en este ejercicio
  console.log(``);
  console.log(`Log de valores del ejercicio 2: ${obtenerMomentoDeArranque()}`);
  console.log(`. Parametro pNum1 (req.params.num1) => ${pNum1} -> Tipo: ${typeof pNum1}`);
  console.log(`. Parametro pNum2 (req.params.num2) => ${pNum2} -> Tipo: ${typeof pNum2}`);
  console.log(`. num1 => ${num1} -> Tipo: ${typeof num1}`);
  console.log(`. num2 => ${num2} -> Tipo: ${typeof num2}`);
  console.log(`. resultado => ${resultado} -> Tipo: ${typeof resultado}`);
  console.log(`. (resultado !== null && !isNaN(resultado)) => ${(resultado !== null && !isNaN(resultado))} -> Tipo: ${typeof (resultado !== null && !isNaN(resultado))}`);
  console.log(`. (num1 !== 0 && num2 !== 0) => ${(num1 !== 0 && num2 !== 0)} -> Tipo: ${typeof (num1 !== 0 && num2 !== 0)}`);
  //---------------------------------------------------------------------------

  // Asigno a variables los errores a informar
  let msjPrmIncorrecto = `Ambos Parametros deben ser Numeros: ruta/${num1}/${num2}`;
  let msjNumIncorrecto = `El 0 (cero) no se admite como parametro: ruta/${num1}/${num2}`;
  
  // Asigno a una variable el resultado luego de validarlo 
  let respuesta = (resultado !== null && !isNaN(resultado)) 
    ?  (num1 !== 0 && num2 !== 0)
      ? resultado 
      :msjNumIncorrecto
    : msjPrmIncorrecto
  ;

  // Respondo con el resultado validado
  return(respuesta);
  
  // Consologueo la repuesta
  console.log(`* Respuesta: ${respuesta}`);
}



// Ejercicio 3 - Retornar Nombre y Apellido 
// -----------

// Opcion 1, por consulta (qrys) sin validacion
//  - No se hacen validaciones para poder comparar los resultados con la opcion 2
// http://localhost:4000/ej3op2?nombre=Andres&apellido=Garcia
//app.get('/ej3op1', (req, res) => {
function ej03op01 (pNombre, pApellido){
    // Asigno a variables el contenido de las consultas
    let nombre = pNombre;       //req.query.nombre
    let apellido = pApellido;   //req.query.apellido
    
    // Consologueo los valores a trabajar en este ejercicio
    console.log(``);
    console.log(`Log de valores del ejercicio 3 Opcion 1: ${obtenerMomentoDeArranque()}`);
    console.log(`. Parametro: pNombre (req.query.nombre) => ${pNombre} -> Tipo: ${typeof pNombre}`);
    console.log(`. Parametro: pApellido (req.query.apellido) => ${pApellido} -> Tipo: ${typeof pApellido}`);
    console.log(`. nombre => ${nombre} -> Tipo: ${typeof nombre}`);
    console.log(`. apellido => ${apellido} -> Tipo: ${typeof apellido}`);
    //---------------------------------------------------------------------------  
    
    // Asigno a una variable el valor resultante sin validaciones
    let respuesta = `Respuesta: Mi nombre es ${nombre} ${apellido}`;
    
    //Respondo con la variable ya validada
    return(respuesta);

    //Consologueo la repuesta
    console.log(`* Respuesta: ${respuesta}`);
}


// Opcion 2, por consulta (qrys) con validacion
// http://localhost:4000/ej3op2?nombre=Andres&apellido=Garcia
//app.get('/ej3op2', (req, res) => {
function ej03op02 (pNombre, pApellido) {
    // Asigno a variables el contenido de las consultas
    let nombre = pNombre;       //req.query.nombre
    let apellido = pApellido;   //req.query.apellido

    // Consologueo los valores a trabajar en este ejercicio
    console.log(``);
    console.log(`Log de valores del ejercicio 3 Opcion 2: ${obtenerMomentoDeArranque()}`);
    console.log(`. Parametro: pNombre (req.query.nombre) => ${pNombre} -> Tipo: ${typeof pNombre}`);
    console.log(`. Parametro: pApellido (req.query.apellido) => ${pApellido} -> Tipo: ${typeof pApellido}`);
    console.log(`. nombre => ${nombre} -> Tipo: ${typeof nombre}`);
    console.log(`. apellido => ${apellido} -> Tipo: ${typeof apellido}`);
    console.log(`. nombre * 0 => ${(nombre * 0)} -> Tipo: ${typeof (nombre * 0)}`);
    console.log(`. apellido * 0 => ${(apellido * 0)} -> Tipo: ${typeof (apellido * 0)}`);
    console.log(`. ((nombre * 0) !==0 && (apellido * 0) !==0) => ${(nombre * 0) !==0 && (apellido * 0) !==0} -> Tipo: ${typeof ((nombre * 0) !==0 && (apellido * 0) !==0)}`);
    console.log(`. ( nombre && apellido ) => ${(nombre && apellido)} -> Tipo: ${typeof (nombre && apellido)}`)
    //---------------------------------------------------------------------------  

    // Asigno a una variable el valor resultante segun la validacion
    let respuesta = ( nombre && apellido ) 
        ?
        ((nombre * 0) !== 0 && (apellido * 0) !== 0)
            ? `Mi nombre es ${nombre} ${apellido}`
            :`Todos los argumentos de la consulta deben ser textos -> Valores consultados  [${nombre}] y [${apellido}]`
        :`Se deben pasar las dos consultas con su valor (?nombre:Nombre&apellido:Apellido) -> Valores consultados [${nombre}] y [${apellido}]`
    ;

    //Respondo con la variable ya validada
    return(respuesta);

    //Consologueo la repuesta
    console.log(`* Respuesta: ${respuesta}`);
}


// Opcion 3, por parametros (Prms)
// Como los parametros son parte de la ruta, si alguno se omite, falla la ruta
//  Se valido que ninguno de los parametros sean numeros
//  Ej: http://localhost:4000/ej3op3/Andrres/Garcia
//app.get('/ej3op3/:nombre/:apellido', (req, res) => {
function ej03op03 (pNombre, pApellido){
    // Asign a variables los datos de los parametros
    let nombre = pNombre;       //req.params.nombre
    let apellido = pApellido;   //req.params.apellido
    
    // Consologueo los valores a trabajar en este ejercicio
    console.log(``);
    console.log(`Log de valores del ejercicio 3 Opcion 3: ${obtenerMomentoDeArranque()}`);
    console.log(`. Parametro: pNombre (req.params.nombre) => ${pNombre} -> Tipo: ${typeof pNombre}`);
    console.log(`. Parametro: pApellido (req.params.apellido) => ${pApellido} -> Tipo: ${typeof pApellido}`);
    console.log(`. nombre => ${nombre} -> Tipo: ${typeof nombre}`);
    console.log(`. apellido => ${apellido} -> Tipo: ${typeof apellido}`);
    console.log(`. ( nombre && apellido ) => ${( nombre && apellido )} -> Tipo: ${typeof ( nombre && apellido )}`);
    console.log(`. ((nombre * 0) !== 0 && (apellido * 0) !== 0) => ${((nombre * 0) !== 0 && (apellido * 0) !== 0)} -> Tipo: ${typeof (((nombre * 0) !== 0 && (apellido * 0) !== 0))}`);
    //---------------------------------------------------------------------------    

    // Asigno a una variable el resultado, segun la validacion de los datos obtenidos
    let respuesta = ( nombre && apellido ) 
    ?
    ((nombre * 0) !== 0 && (apellido * 0) !== 0)
    ? `Respuesta: Mi nombre es ${nombre} ${apellido}`
    : `Respuesta: Todos los argumentos de la consulta deben ser textos -> Valores pasados  [${nombre}] y [${apellido}]`
    :`Respuesta: Se deben pasar los dos parametros (ruta/:nombre/:apellido) -> Valores pasados  ruta/${nombre}/${apellido}`
    ;

    // Respondo con la variable con el resultado
    return(`${respuesta}`);  

    //Consologueo la repuesta
    console.log(`* Respuesta: ${respuesta}`);
    console.log(respuesta);
}
/*------ */



module.exports = {  pgnEjercicios,
                    ej01op01,
                    ej01op02,
                    ej02op01,
                    ej03op01,
                    ej03op02,
                    ej03op03
                 };

