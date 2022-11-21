const { DataTypes } = require("sequelize");
const { conexion } = require("../CapaConexion/Conexion");




const Reserva = conexion.define('reserva',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }

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