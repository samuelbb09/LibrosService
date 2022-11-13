

const loadAll = () => {
    const { Libro } = require('../CapaDTO/libro');
    const { Autor } = require('../CapaDTO/autor');
    const { Categoria } = require('../CapaDTO/categoria');
    const { Usuario } = require('../CapaDTO/usuario');
    const { Reclamo } = require('../CapaDTO/reclamo');
    const { Reserva } = require('../CapaDTO/reserva');

    Reclamo.loadAssociations();
    Reserva.loadAssociations();
    Usuario.loadAssociations();
    Libro.loadAssociations();
    Categoria.loadAssociations();
    Autor.loadAssociations();

}


exports.loadAll = loadAll;





