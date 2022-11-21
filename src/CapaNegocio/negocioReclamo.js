const { Libro } = require("../CapaDTO/libro");
const { Reclamo } = require("../CapaDTO/reclamo");
const { Usuario } = require("../CapaDTO/usuario");


const crearReclamo = async ({usuarioId, comment,libroId}) => {
    const reclamo = await Reclamo.create({usuarioId:usuarioId, comment:comment,libroId:libroId})
    return reclamo;
}

const obtenerReclamos = async ({usuarioId}) => {
    const reclamo = await Reclamo.findAll({where:{usuarioId:usuarioId}, include: [Usuario, Libro]})
    return reclamo;
}

const borrarReclamo = async ({reclamoId}) => {
    
    const reclamo = await Reclamo.findOne({where:{id:reclamoId}})

    if(!reclamo){
        return {mensaje:'reclamo no existe', exito:false}
    }else {
        const resp = await reclamo.destroy()
        return resp
    }

}

const actualizarReclamo = async ({reclamoId, comment}) => {

const reclamo = await Reclamo.findOne({where:{id:reclamoId}})

if(!reclamo){
    return {mensaje:'reclamo no existe', exito:false}
}else {
    const resp = await reclamo.update({comment:comment})
    return resp
}

}

exports.actualizarReclamo = actualizarReclamo;
exports.borrarReclamo = borrarReclamo;
exports.crearReclamo = crearReclamo;
exports.obtenerReclamos = obtenerReclamos;