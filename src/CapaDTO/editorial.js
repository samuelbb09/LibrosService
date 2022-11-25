const { DataTypes } = require("sequelize");
const { conexion } = require("../CapaConexion/Conexion");






const Editorial = conexion.define('editorial',{
    name: {
        type: DataTypes.STRING,
        field: 'nombre'
    }
}, {
    tableName: 'editoriales', timestamps:false
});

Editorial.loadAssociations = () => {
    const { Libro } = require("./libro");
    const { Pais } = require("./pais");
    Editorial.belongsTo(Pais, {foreignKey:{field:'pais_id', name: 'paisId'}, onDelete:'cascade'})
    Editorial.hasMany(Libro, {foreignKey:{field:'editorial_id'}, onDelete:'cascade'})
    
}


exports.Editorial = Editorial;