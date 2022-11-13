const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('libros', 'root', 'Humano12', {
    host: 'localhost',
    dialect: 'mysql',

});



exports.conexion = sequelize;