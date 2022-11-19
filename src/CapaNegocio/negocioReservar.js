const { Libro } = require("../CapaDTO/libro");
const { Reserva } = require("../CapaDTO/reserva");
const { Usuario } = require("../CapaDTO/usuario");


const crearReserva = async ({usuarioId, libroId}) => {
    const reserva = await Reserva.create({usuarioId:usuarioId, libroId:libroId})
    return reserva;
}

const obtenerReservas = async ({usuarioId}) => {
    const reserva = await Reserva.findOne({where:{usuarioId:usuarioId}, include: [Usuario, Libro]})
    return reserva;
}

const borrarReserva = async ({usuarioId, libroId}) => {
    
        const reserva = await Reserva.findOne({where:{usuarioId:usuarioId, libroId:libroId}})
    
        if(!reserva){
            return {mensaje:'reserva no existe', exito:false}
        }else {
            const resp = await Reserva.destroy({where:{usuarioId:usuarioId, libroId:libroId}})
            return resp
        }
    
}

const actualizarReserva = async ({usuarioId, libroId, nuevolibroId}) => {
    
    const reserva = await Reserva.findOne({where:{usuarioId:usuarioId, libroId:libroId}})

    if(!reserva){
        return {mensaje:'reserva no existe', exito:false}
    }else {
        const resp = await Reserva.update({libroId:nuevolibroId}, {where:{usuarioId:usuarioId, libroId:libroId}})
        return resp
    }

}

exports.actualizarReserva = actualizarReserva;
exports.borrarReserva = borrarReserva;
exports.obtenerReservas = obtenerReservas;
exports.crearReserva = crearReserva;