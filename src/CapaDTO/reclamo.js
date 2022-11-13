const { DataTypes } = require("sequelize");
const { conexion } = require("../CapaConexion/Conexion");



const Reclamo = conexion.define('reclamo',{
    comment: {
        type: DataTypes.STRING,
        field: 'comentario'
    }
}, {
    tableName: 'reclamos', timestamps:false
});

Reclamo.loadAssociations = () => {
    const { Libro } = require("./libro");
    const { Usuario } = require("./usuario");
    Reclamo.belongsTo(Usuario)
    Reclamo.belongsTo(Libro)
    
}


exports.Reclamo = Reclamo;