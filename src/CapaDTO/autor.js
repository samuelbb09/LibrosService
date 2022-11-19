const { DataTypes } = require("sequelize");
const { conexion } = require("../CapaConexion/Conexion");



const Autor = conexion.define('autor',{
    name: {
        type: DataTypes.STRING,
        field: 'nombre'
    },
    lastname: {
        type: DataTypes.STRING,
        field: 'apellido'
    }
}, {
    tableName: 'autores', timestamps:false
});

Autor.loadAssociations = () => {
    const { Libro } = require("./libro");
    Autor.hasMany(Libro, {foreignKey:{field:'autor_id'},onDelete:'cascade', hooks:true})
}


exports.Autor = Autor;