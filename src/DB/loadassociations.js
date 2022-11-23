



const loadAll = () => {
    const { Opinion } = require('../CapaDTO/opinion');
    const { Recomendacion } = require('../CapaDTO/recomendacion');
    const { Libro } = require('../CapaDTO/libro');
    const { Autor } = require('../CapaDTO/autor');
    const { Categoria } = require('../CapaDTO/categoria');
    const { Usuario } = require('../CapaDTO/usuario');
    const { Reclamo } = require('../CapaDTO/reclamo');
    const { Reserva } = require('../CapaDTO/reserva');
    const { Editorial } = require('../CapaDTO/editorial');
    const { Pais } = require('../CapaDTO/pais');

    Opinion.loadAssociations();
    Recomendacion.loadAssociations();
    Reclamo.loadAssociations();
    Reserva.loadAssociations();
    Usuario.loadAssociations();
    Libro.loadAssociations();
    Categoria.loadAssociations();
    Autor.loadAssociations();
    Pais.loadAssociations();
    Editorial.loadAssociations();

}


exports.loadAll = loadAll;





