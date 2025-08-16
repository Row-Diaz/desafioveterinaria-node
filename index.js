const fs = require('fs');
const { registrar, leer } = require('./operaciones.js');


if(solicitud === "registrar"){
    registrar(nombre, edad, animal, color, enfermedad)
}
else if (solicitud === "leer"){
    leer()
}
else{
    console.log("No se ha podido registrar a tu mascota, asegurate de ingresar bien los datos")
}