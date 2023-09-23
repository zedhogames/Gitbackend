const express = require ('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.get('/',(peticion,respuesta) => {

    respuesta.send('<h1 style="color:red;">Bienvenido a la aplicaion de ecommerce<h1>');

    console.log('Cambiamos el texto a rojo y le agregamos h1');
})

app.listen(PORT, (err) => {
    if(err) throw err;

    console.log(`Servidor corriendo en el puerto http://localhost: ${PORT}`);
})