const { Autor } = require("../CapaDTO/autor");
const { Recomendacion } = require("../CapaDTO/recomendacion");
const { Usuario } = require("../CapaDTO/usuario");


const crearRecomendacion = async ({usuarioId, comment,autorId}) => {
    const recomendacion = await Recomendacion.create({usuarioId:usuarioId, comment:comment,autorId:autorId})
    return recomendacion;
}

const obtenerRecomendaciones = async (autorId) => {
    const recomendacion = await Recomendacion.findAll({where:{autorId:autorId}, include: [Usuario, Autor]})
    return recomendacion;
}

const borrarRecomendacion = async ({recomendacionId}) => {
    
    const recomendacion = await Recomendacion.findOne({where:{id:recomendacionId}})

    if(!recomendacion){
        return {mensaje:'recomendacion no existe', exito:false}
    }else {
        const resp = await recomendacion.destroy()
        return resp
    }

}

const actualizarRecomendacion = async ({recomendacionId, comment}) => {

const recomendacion = await Recomendacion.findOne({where:{id:recomendacionId}})

if(!recomendacion){
    return {mensaje:'recomendacion no existe', exito:false}
}else {
    const resp = await recomendacion.update({comment:comment})
    return resp
}

}

exports.actualizarRecomendacion = actualizarRecomendacion;
exports.borrarRecomendacion = borrarRecomendacion;
exports.crearRecomendacion = crearRecomendacion;
exports.obtenerRecomendaciones = obtenerRecomendaciones;