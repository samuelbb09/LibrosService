const { DataTypes } = require("sequelize");
const { conexion } = require("../CapaConexion/Conexion");





const Libro = conexion.define('libro',{
    name: {
        type: DataTypes.STRING,
        field: 'nombre'
    },
    publisher: {
        type: DataTypes.STRING,
        field: 'editorial'
    }
}, {
    tableName: 'libros', timestamps:false
});

Libro.loadAssociations = () => {
    const { Autor } = require("./autor");
    const { Categoria } = require("./categoria");
    const { Reclamo } = require("./reclamo");
    const { Reserva } = require("./reserva");
    const { Usuario } = require("./usuario");
    Libro.belongsTo(Autor, {foreignKey:{field:'autor_id'}, onDelete:'cascade'})
    Libro.belongsTo(Categoria, {foreignKey:{field:'categoria_id'}, onDelete:'cascade'})
    Libro.belongsToMany(Usuario, { through: Reserva,onDelete:'cascade'});

    //Libro.belongsToMany(Usuario, { through: Reserva, foreignKey: {field: 'libro_id', name: 'libroId'}});
    Libro.belongsToMany(Usuario, { through: Reclamo, onDelete:'cascade'});
}


exports.Libro = Libro;