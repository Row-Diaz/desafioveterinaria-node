const { registrar, leer } = require("./operaciones.js");

// Asignacion de la informacion del paciente por linea de comandos

const solicitud = process.argv[2];
const nombre = process.argv[3];
const edad = process.argv[4];
const animal = process.argv[5];
const color = process.argv[6];
const enfermedad = process.argv[7];

if (solicitud === "registrar") {
  registrar(nombre, edad, animal, color, enfermedad);
} else if (solicitud === "leer") {
  leer();
} else {
  console.log(
    "No se ha podido registrar a tu mascota, asegurate de ingresar bien los datos"
  );
}
