const { Libro } = require("../CapaDTO/libro");
const { Reserva } = require("../CapaDTO/reserva");
const { Usuario } = require("../CapaDTO/usuario");


const crearReserva = async ({usuarioId, libroId}) => {
    const reserva = await Reserva.create({usuarioId:usuarioId, libroId:libroId})
    return reserva;
}

const obtenerReservas = async ({usuarioId}) => {
    const reserva = await Reserva.findAll({where:{usuarioId:usuarioId}, include: [Usuario, Libro]})
    return reserva;
}

const borrarReserva = async ({reservaId}) => {
    
        const reserva = await Reserva.findOne({where:{id:reservaId}})
    
        if(!reserva){
            return {mensaje:'reserva no existe', exito:false}
        }else {
            const resp = await reserva.destroy()
            return resp
        }
    
}

const actualizarReserva = async ({reservaId, libroId}) => {
    
    const reserva = await Reserva.findOne({where:{id:reservaId}})

    if(!reserva){
        return {mensaje:'reserva no existe', exito:false}
    }else {
        const resp = await reserva.update({libroId:libroId})
        return resp
    }

}

exports.actualizarReserva = actualizarReserva;
exports.borrarReserva = borrarReserva;
exports.obtenerReservas = obtenerReservas;
exports.crearReserva = crearReserva;