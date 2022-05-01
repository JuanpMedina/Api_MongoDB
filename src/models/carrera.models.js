const {Schema, model} = require("mongoose");

const Carrera = new Schema({
    codigo: {
        type           : String, 
        required       : [ true, 'El código de la carrera obligatorio' ],
        unique         : [ true, 'El código de la Carrera ya existe' ],
        maxlength      : [ 10, 'El código solo puede tener un maximo de 10 caracteres' ],
        minlength      : [ 2, 'El código solo puede tener un minimo de 2 caracteres' ]
    },
    nombre: {
        type           : String, 
        required       : [ true, 'El nombre de la Carrera obligatorio' ],
        maxlength      : [ 150, 'El nombre solo puede tener un maximo de 150 caracteres' ],
        minlength      : [ 5, 'El nombre solo puede tener un minimo de 5 caracteres' ]
    },
    descripcion: {
        type           : String,
        maxlength      : [500, 'La descripcion solo puede tener un maximo de 500 caracteres'],
    },
    activo: {
        type           : Boolean, 
        default        : true
    },
});

module.exports = model('Carrera', Carrera);