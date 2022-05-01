const carreraModels = require('../models/carreras.models');


/**
 * Método para crear carrera
 * @param {*} req 
 * @param {*} res 
 */
 const crearCarrera = async (req, res) => {
    let respuesta = {};
    try {
        respuesta.ok = true;
        respuesta.message = "Carrera creada correctamente";
        const { codigo, nombre, descripcion } = req.body;
        const carrera = new carreraModels({ codigo, nombre, descripcion });
        resultado = await carrera.save();
        console.log(resultado);
        respuesta.info = resultado;
        res.send(respuesta);

    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error creando la carrera";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}


/**
 * Método para consultar todas las carreras activas
 * @param {*} req 
 * @param {*} res 
 */
const consultarCarreras = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true;
        respuesta.message = "Carreras consultadas correctamente";
        const resultado = await carreraModels.find({ activo: true });
        console.log(resultado);
        respuesta.info = resultado;
        res.send(respuesta);
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error consultando las carreras";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}


/**
 * Método para consultar 1 carrera
 * @param {*} req 
 * @param {*} res 
 */
const consultarCarrera = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true;
        respuesta.message = "Carrera consultada exitosamente";
        const resultado = await carreraModels.findOne({ _id: req.params.id });
        console.log(resultado);
        respuesta.info = resultado;
        res.send(respuesta);
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error consultando la carrera";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}


/**
 * Método para actualizar una carrera
 * @param {*} req 
 * @param {*} res 
 */
const actualizarCarrera = async (req, res) => {
    let respuesta = {}
    const { nombre, descripcion } = req.body;
    try {
        respuesta.ok = true;
        respuesta.message = "Carrera actualizada correctamente";
        const resultado = await carreraModels.findOneAndUpdate(req.params.id, { nombre, descripcion });
        console.log(resultado);
        respuesta.info = resultado;
        res.send(respuesta);
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error actualizando la carrera";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}

/**
 * Método para eliminar una carrera
 * @param {*} req 
 * @param {*} res 
 */
const eliminarCarrera = async (req, res) => {
    let respuesta = {}
    try {
        respuesta.ok = true;
        respuesta.message = "Carrera eliminada correctamente";
        const resultado = await carreraModels.findOneAndUpdate(req.params.id, { activo: false });
        console.log(resultado);
        respuesta.info = resultado;
        res.send(respuesta);
    } catch (error) {
        respuesta.ok = false;
        respuesta.message = "Ha ocurrido un error eliminando la carrera";
        respuesta.info = error;
        res.status(500).send(respuesta);
    }
}

module.exports = {crearCarrera,consultarCarrera,consultarCarreras,actualizarCarrera,eliminarCarrera}