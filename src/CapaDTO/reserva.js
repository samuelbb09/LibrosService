const { conexion } = require("../CapaConexion/Conexion");




const Reserva = conexion.define('reserva',{

}, {
    tableName: 'reservas', timestamps:false
});

Reserva.loadAssociations = () => {
    const { Libro } = require("./libro");
    const { Usuario } = require("./usuario");
    Reserva.belongsTo(Usuario)
    Reserva.belongsTo(Libro)
}

exports.Reserva = Reserva;