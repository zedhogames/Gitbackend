const express = require ('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.get('/',(peticion,respuesta) => {

    respuesta.send('Hola Mundo, estamos en la calse 4');

    console.log('Macheaste al Home');
})

app.listen(PORT, (err) => {
    if(err) throw err;

    console.log(`Servidor corriendo en el puerto http://localhost: ${PORT}`);
})