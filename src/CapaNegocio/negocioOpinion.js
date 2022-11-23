const { Libro } = require("../CapaDTO/libro");
const { Opinion } = require("../CapaDTO/opinion");
const { Usuario } = require("../CapaDTO/usuario");


const crearOpinion = async ({usuarioId, comment,libroId, score}) => {
    const opinion = await Opinion.create({usuarioId:usuarioId, comment:comment,libroId:libroId, score:score})
    return opinion;
}

const obtenerOpiniones = async (libroId) => {
    const opiniones = await Opinion.findAll({where:{libroId:libroId},include: [Usuario, Libro]})
    return opiniones;
}

const borrarOpinion = async ({opinionId}) => {
    
    const opinion = await Opinion.findOne({where:{id:opinionId}})

    if(!opinion){
        return {mensaje:'opinion no existe', exito:false}
    }else {
        const resp = await opinion.destroy()
        return resp
    }

}

const actualizarOpinion = async ({opinionId, comment, score}) => {

const opinion = await Opinion.findOne({where:{id:opinionId}})

if(!opinion){
    return {mensaje:'opinion no existe', exito:false}
}else {
    const resp = await opinion.update({comment:comment, score:score})
    return resp
}

}

exports.actualizarOpinion = actualizarOpinion;
exports.borrarOpinion = borrarOpinion;
exports.crearOpinion = crearOpinion;
exports.obtenerOpiniones = obtenerOpiniones;