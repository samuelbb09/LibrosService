const { DataTypes } = require("sequelize");
const { conexion } = require("../CapaConexion/Conexion");





const Usuario = conexion.define('usuario',{
    user: {
        type: DataTypes.STRING,
        field: 'usuario'
    },
    password: {
        type: DataTypes.STRING,
        field: 'contraseña'
    },
    firstname: {
        type: DataTypes.STRING,
        field: 'nombre'
    },
    lastname: {
        type: DataTypes.STRING,
        field: 'apellido'
    }
}, {
    tableName: 'usuarios', timestamps:false
});

Usuario.loadAssociations = () => {
    const { Reserva } = require("./reserva");
    const { Reclamo } = require("./reclamo");
    const { Libro } = require("./libro");
    const { Opinion } = require("./opinion");
    const { Autor } = require("./autor");
    const { Recomendacion } = require("./recomendacion");
    Usuario.belongsToMany(Libro, { through: Reserva, onDelete:'cascade'});
    Usuario.belongsToMany(Autor, { through: Recomendacion, onDelete:'cascade'});
    Usuario.belongsToMany(Libro, { through: Reclamo, onDelete:'cascade'});
    Usuario.belongsToMany(Libro, { through: Opinion, onDelete:'cascade'});
    
}


exports.Usuario = Usuario;