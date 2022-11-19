const { DataTypes } = require("sequelize");
const { conexion } = require("../CapaConexion/Conexion");



const Categoria = conexion.define('category',{
    name: {
        type: DataTypes.STRING,
        field: 'nombre'
    },
    detail: {
        type: DataTypes.STRING,
        field: 'detalle'
    }
}, {
    tableName: 'categorias', timestamps:false
});


Categoria.loadAssociations = () => {
    const { Libro } = require("./libro");
    Categoria.hasMany(Libro, {foreignKey:{field:'categoria_id'},onDelete:'cascade'})
}


exports.Categoria = Categoria;