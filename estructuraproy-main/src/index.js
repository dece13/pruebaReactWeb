const { apple } = require('color-convert');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

//const { mongoose } = require('./database'); coneccion con mongo db 

const app = express();


// settings
app.set('port', process.env.PORT || 3000); 


//middlewares
app.use(morgan('dev'));
app.use(express.json());// comprueba si el dato es de formato json

//routes 
app.use('/Pymeweb/home' , require('./routes/home.routes'));


//static files

app.use(express.static(path.join(__dirname, 'public'))); // le indica donde esta la carpeta public

// Starting the server

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });