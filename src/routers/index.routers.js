const express = require('express')

const router = express()

const CarreraController = require('../controllers/carreras.controllers')
const EstudianteController = require('../controllers/estudiantes.controllers')

const vs = "/api/v1"

router.get(vs + '/estudiante/:id', EstudianteController.consultarEstudiante)
    .get(vs + '/estudiantes', EstudianteController.consultarEstudiantes)
    .post(vs + '/estudiante', EstudianteController.crearEstudiante)
    .delete(vs + '/estudiante/:id', EstudianteController.eliminarEstudiante)
    .put(vs + '/estudiante/:id', EstudianteController.actualizarEstudiante)

router.get(vs + '/carrera', CarreraController.consultarCarrera)
    .get(vs + '/carreras', CarreraController.consultarCarreras)
    .post(vs + '/carrera', CarreraController.crearCarrera)
    .delete(vs + '/carrera/:id', CarreraController.eliminarCarrera)
    .put(vs + '/carrera/:id', CarreraController.actualizarCarrera)
    

module.exports = router