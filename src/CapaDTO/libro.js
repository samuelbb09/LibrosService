const { DataTypes } = require("sequelize");
const { conexion } = require("../CapaConexion/Conexion");





const Libro = conexion.define('libro',{
    name: {
        type: DataTypes.STRING,
        field: 'nombre'
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
    const { Editorial } = require("./editorial");
    const { Opinion } = require("./opinion");

    Libro.belongsTo(Autor, {foreignKey:{field:'autor_id'}, onDelete:'cascade'})
    Libro.belongsTo(Categoria, {foreignKey:{field:'categoria_id'}, onDelete:'cascade'})
    Libro.belongsToMany(Usuario, { through: Reserva,onDelete:'cascade'});
    Libro.belongsToMany(Usuario, { through: Opinion,onDelete:'cascade'});
    Libro.belongsTo(Editorial, {foreignKey:{field:'editorial_id'}, onDelete:'cascade'})
    //Libro.belongsToMany(Usuario, { through: Reserva, foreignKey: {field: 'libro_id', name: 'libroId'}});
    Libro.belongsToMany(Usuario, { through: Reclamo, onDelete:'cascade'});
}


exports.Libro = Libro;