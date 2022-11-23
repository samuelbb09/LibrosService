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
    const { Recomendacion } = require("./recomendacion");
    const { Usuario } = require("./usuario");
    Autor.hasMany(Libro, {foreignKey:{field:'autor_id'},onDelete:'cascade', hooks:true})
    Autor.belongsToMany(Usuario, { through: Recomendacion, onDelete:'cascade'});

}


exports.Autor = Autor;