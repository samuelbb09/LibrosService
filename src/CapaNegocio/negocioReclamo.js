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

const borrarReclamo = async ({usuarioId, libroId}) => {
    
    const reclamo = await Reclamo.findOne({where:{usuarioId:usuarioId, libroId:libroId}})

    if(!reclamo){
        return {mensaje:'reclamo no existe', exito:false}
    }else {
        const resp = await Reclamo.destroy({where:{usuarioId:usuarioId, libroId:libroId}})
        return resp
    }

}

const actualizarReclamo = async ({usuarioId, libroId, comment}) => {

const reclamo = await Reclamo.findOne({where:{usuarioId:usuarioId, libroId:libroId}})

if(!reclamo){
    return {mensaje:'reclamo no existe', exito:false}
}else {
    const resp = await Reclamo.update({comment:comment}, {where:{usuarioId:usuarioId, libroId:libroId}})
    return resp
}

}

exports.actualizarReclamo = actualizarReclamo;
exports.borrarReclamo = borrarReclamo;
exports.crearReclamo = crearReclamo;
exports.obtenerReclamos = obtenerReclamos;