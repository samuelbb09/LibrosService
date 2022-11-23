const { DataTypes } = require("sequelize");
const { conexion } = require("../CapaConexion/Conexion");



const Opinion = conexion.define('opinion',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
    ,score: {
        type: DataTypes.INTEGER,
        field: 'puntaje'
    },comment: {
        type: DataTypes.STRING,
        field: 'comentario'
    }
}, {
    tableName: 'opiniones', timestamps:false
});

Opinion.loadAssociations = () => {
    const { Libro } = require("./libro");
    const { Usuario } = require("./usuario");
    Opinion.belongsTo(Usuario)
    Opinion.belongsTo(Libro)
    
}


exports.Opinion = Opinion;