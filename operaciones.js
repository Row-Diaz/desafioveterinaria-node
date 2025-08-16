const fs = require("fs");
// funcion para registrar los datos de los pacientes 🐶🐈

function registrar(nombre, edad, animal, color, enfermedad) {
  const registro = {
    nombre: nombre,
    edad: edad,
    animal: animal,
    color: color,
    enfermedad: enfermedad,
  };

  const data = fs.readFileSync("citas.json", "utf8");
  const cita = JSON.parse(data);
  cita.push(registro);
  fs.writeFileSync("citas.json", JSON.stringify(cita));
}

// funcion para mostrar por consola todas las citas registradas de los pacientes 🐶🐈

function leer() {
  const formularios = fs.readFileSync("citas.json", "utf8");
  JSON.parse(formularios).forEach((informacion) => {
    console.log(informacion);
  });
}

module.exports = { registrar, leer };
