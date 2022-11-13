const { Libro } = require("../CapaDTO/libro");
const { Reclamo } = require("../CapaDTO/reclamo");
const { Usuario } = require("../CapaDTO/usuario");


const crearReclamo = async ({usuarioId, comment,libroId}) => {
    const reclamo = await Reclamo.create({usuarioId:usuarioId, comment:comment,libroId:libroId})
    return reclamo;
}

const obtenerReclamos = async ({usuarioId}) => {
    const reclamo = await Reclamo.findOne({where:{usuarioId:usuarioId}, include: [Usuario, Libro]})
    return reclamo;
}

exports.crearReclamo = crearReclamo;
exports.obtenerReclamos = obtenerReclamos;