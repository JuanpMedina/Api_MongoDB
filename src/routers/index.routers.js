const express = require('express')

const router = express()

const CarreraController = require('../controllers/carreras.controllers')
const EstudianteController = require('../controllers/estudiantes.controllers')

const vs = "/api/v1"

router.get(vs + '/estudiante', EstudianteController.consultarEstudiante)
    .get(vs + '/estudiante', EstudianteController.consultarEstudiantes)
    .post(vs + '/estudiante', EstudianteController.crearEstudiante)
    .put(vs + '/estudiante/:id', EstudianteController.eliminarEstudiante)
    .put(vs + '/estudiante/:id', EstudianteController.actualizarEstudiante)

router.get(vs + '/carrera', CarreraController.consultarCarrera)
    .get(vs + '/carrera', CarreraController.consultarCarreras)
    .post(vs + '/carrera', CarreraController.crearCarrera)
    .put(vs + '/carrera/:id', CarreraController.eliminarCarrera)
    .put(vs + '/carrera/:id', CarreraController.actualizarCarrera)
    

module.exports = router