const { Libro } = require("../CapaDTO/libro");
const { Reserva } = require("../CapaDTO/reserva");
const { Usuario } = require("../CapaDTO/usuario");


const crearReserva = async ({usuarioId, libroId}) => {
    const reserva = await Reserva.create({usuarioId:usuarioId, libroId:libroId})
    return reserva;
}

const obtenerReservas = async ({usuarioId}) => {
    const user = await Reserva.findOne({where:{usuarioId:usuarioId}, include: [Usuario, Libro]})

    return user;
}

exports.obtenerReservas = obtenerReservas;
exports.crearReserva = crearReserva;