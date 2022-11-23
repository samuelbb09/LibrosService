const { DataTypes } = require("sequelize");
const { conexion } = require("../CapaConexion/Conexion");
const { Editorial } = require("./editorial");





const Pais = conexion.define('pais',{
    name: {
        type: DataTypes.STRING,
        field: 'nombre'
    },
    abreviation: {
        type: DataTypes.STRING,
        field: 'abreviatura'
    }
}, {
    tableName: 'paises', timestamps:false
});

Pais.loadAssociations = () => {
    Pais.hasMany(Editorial, {foreignKey:{field:'pais_id'}, onDelete:'cascade'})
    
}


exports.Pais = Pais;