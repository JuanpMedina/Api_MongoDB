const {Schema, model} = require("mongoose");

const Estudiante = new Schema({
    nro_identificacion: {
        type           : String, 
        required       : [ true, 'El numero de identificación es obligatorio' ],
        unique         : [ true, 'El numero de identificación ya existe' ],
        maxlength      : [ 10, 'El numero solo puede tener un maximo de 15 caracteres' ],
        minlength      : [ 8, 'El numero solo puede tener un minimo de 8 caracteres' ]
    },
    nombre_1: {
        type           : String, 
        required       : [ true, 'El Primer Nombre es Obligatorio' ],
        maxlength      : [ 100, 'El Primer Nombre solo puede tener un maximo de 100 caracteres' ],
        minlength      : [ 5, 'El Primer Nombre solo puede tener un minimo de 5 caracteres' ]
    },
    nombre_2: {
        type           : String, 
        maxlength      : [ 100, 'El Segundo Nombre solo puede tener un maximo de 100 caracteres' ],
        minlength      : [ 5, 'El Segundo Nombre solo puede tener un minimo de 5 caracteres' ]
    },
    apellido_1: {
        type           : String, 
        required       : [ true, 'El Primer Apellido es Obligatorio' ],
        maxlength      : [ 100, 'El Primer Apellido solo puede tener un maximo de 100 caracteres' ],
        minlength      : [ 5, 'El Primer Apellido solo puede tener un minimo de 5 caracteres' ]
    },
    apellido_2 : {
        type           : String, 
        maxlength      : [ 100, 'El Segundo Apellido Nombre solo puede tener un maximo de 100 caracteres' ],
        minlength      : [ 5, 'El Segundo Apellido Nombre solo puede tener un minimo de 5 caracteres' ]
    },    
    fecha_de_nacimiento: {
        type           : Date, 
        required       : true,
    },
    activo: {
        type           : Boolean, 
        default        : true
    },
    carrera: {
        type           : String, 
        required       : [ true, 'El Codigo de la Carrera es Obligatorio' ]
    }
});

module.exports = model('Estudiante', Estudiante);