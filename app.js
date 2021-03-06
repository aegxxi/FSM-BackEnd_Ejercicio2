const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Defino las rutas disponibles
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const ejemplosRouter = require('./routes/ejemplos');
const ejerciciosRouter = require('./routes/ejercicios');

const app = express();

// ???
app.use(logger('dev'));
app.use(express.json());  // middleware nativo. Permite recibir informacion en formato Json
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Declaro las rutas definidas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ejemplos', ejemplosRouter);
app.use('/ejercicios', ejerciciosRouter);



module.exports = app;

