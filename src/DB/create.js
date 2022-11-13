const { conexion } = require('../CapaConexion/Conexion');

require('./loadassociations').loadAll();

const updateOrCreateDatabase = async () => {

    try {
        await conexion.sync({ alter: true })
    } catch (e) {
        console.log(e)
    }


    console.log('Rinning test query...');

};

updateOrCreateDatabase();