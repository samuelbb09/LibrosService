const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('libros', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',

});



exports.conexion = sequelize;