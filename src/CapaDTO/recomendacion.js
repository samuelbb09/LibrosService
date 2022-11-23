const { DataTypes } = require("sequelize");
const { conexion } = require("../CapaConexion/Conexion");



const Recomendacion = conexion.define('recomendacion',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
    ,comment: {
        type: DataTypes.STRING,
        field: 'comentario'
    }
}, {
    tableName: 'recomendaciones', timestamps:false
});

Recomendacion.loadAssociations = () => {
    const { Autor } = require("./autor");
    const { Usuario } = require("./usuario");
    Recomendacion.belongsTo(Usuario)
    Recomendacion.belongsTo(Autor)
    
}


exports.Recomendacion = Recomendacion;