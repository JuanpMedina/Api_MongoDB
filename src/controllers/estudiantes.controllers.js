const estudianteModels = require('../models/estudiante.models') 
const {consultarCarrera} = require('./carreras.controllers')

/**
 * Método para crear estudiante
 * @param {*} req 
 * @param {*} res 
 */
 const crearEstudiante = async (req, res) => {
    let respuesta = {};
    try {
        respuesta.ok = true;
        respuesta.message = "Estudiante creado correctamente";
        const { nro_identificacion, nombre1, nombre2, apellido1, apellido2, fecha_de_nacimiento, carrera} = req.body;
        const estudiante = new estudianteModels({ nro_identificacion, nombre1, nombre2, apellido1, apellido2, fecha_de_nacimiento, carrera });
        const estudianteConsultado = consultarEstudiante
        const carreraConsultada=consultarCarrera
        if(estudianteConsultado.nro_identificacion != nro_identificacion && carreraConsultada.activo==true){
        resultado = await estudiante.save();
        console.log(resultado);
        respuesta.info = resultado;
        res.send(respuesta);
        }else{
            respuesta.ok = false;
            respuesta.message = "Estudiante ya existe";
            respuesta.info = error;
            res.status(500).send(respuesta);
        }
       
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error creando el estudiante";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}

/**
 * Método para consultar todos los estudiantes activsos
 * @param {*} req 
 * @param {*} res 
 */
 const consultarEstudiantes = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true;
        respuesta.message = "Estudiantes consultados correctamente";
        const resultado = await estudianteModels.find({ activo: true });
        console.log(resultado);
        respuesta.info = resultado;
        res.send(respuesta);
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error consultando los estudiantes";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}


/**
 * Método para consultar 1 estudiante
 * @param {*} req 
 * @param {*} res 
 */
const consultarEstudiante = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true;
        respuesta.message = "Estudiante consultado correctamente";
        const resultado = await estudianteModels.findOne({ _id: req.params.id });
        console.log(resultado);
        respuesta.info = resultado;
        res.send(respuesta);
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error consultando el estudiante";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}

/**
 * Método para actualizar un estudiante
 * @param {*} req 
 * @param {*} res 
 */
 const actualizarEstudiante = async (req, res) => {
    let respuesta = {}
    const { nombre1, nombre2, apellido1, apellido2, fecha_de_nacimiento } = req.body;
    try {
        respuesta.ok = true;
        respuesta.message = "Estudiante actualizado correctamente";
        const resultado = await estudianteModels.findOneAndUpdate({_id:req.params.id}, {nombre1, nombre2, apellido1, apellido2, fecha_de_nacimiento});
        console.log(resultado);
        respuesta.info = resultado;
        res.send(respuesta);
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error actualizando el estudiante";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}


/**
 * Método para eliminar un estudiante
 * @param {*} req 
 * @param {*} res 
 */
 const eliminarEstudiante = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true;
        respuesta.message = "Estudiante eliminado correctamente";
        const resultado = await carreraModels.findByIdAndUpdate(req.params.id, { activo: false });
        console.log(resultado);
        respuesta.info = resultado;
        res.send(respuesta);
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error eliminando el estudiante";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}

module.exports = {crearEstudiante,consultarEstudiante, consultarEstudiantes, actualizarEstudiante,eliminarEstudiante}