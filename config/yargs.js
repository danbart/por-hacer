

let opts = {
  descripcion: {
    alias: "d",
    demand: true,
    desc: 'Descripción de la tarea por hacer'
  },
  completado: {
    alias: "c",
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
  }
};

const argv = require("yargs")
    .command("crear", "Crea tareas", opts)
    .command("actualizar", "Catualiza las Tareas", opts)
    .command("borrar", "Borra una de las Tareas", opts)
    .help()
    .argv;

module.exports = {
    argv,
}