const app = require('./app');

const cAppPuerto = '4000';
const cAppName =  `${app.name}`;  // app.name.toLocaleUpperCase();


const miServidor = {
    srvPuerto: cAppPuerto,
    srvNombre: cAppName
};

function fnMiServidor(){
    return(miServidor);
};



// agregado para ver si puedo obtener informacion
// ----------------------------------------------
// const nombreApp = app.name;
// const puertoApp = app.get('port');

// Obtengo 
function fnAppObtenerNombre() {
    const resultado = `${cAppName}`;
    return(resultado);
  };

  
// Obtengo el puerto 
function fnAppObtenerPuerto() {
    const resultado = `${app.get('port')}`;
    return(resultado);
  };





module.exports = {
                    fnMiServidor,
                    fnAppObtenerNombre,
                    fnAppObtenerPuerto
                };

