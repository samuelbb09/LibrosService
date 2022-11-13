const { Autor } = require("../CapaDTO/autor");
const { Categoria } = require("../CapaDTO/categoria");
const { Libro } = require("../CapaDTO/libro")



const crearLibro = async ({name,publisher,autorId, categoriaId}) => {
    try {
        console.log(categoriaId);
        const libro = await Libro.create({name:name, publisher:publisher, autorId:autorId,categoryId:categoriaId})
        return libro;
    } catch (error) {
        throw new Error('error al crear libro')
    }
    
}


const obtenerLibros = async () => {
    const libros = await Libro.findAll({include: [{model: Autor}, {model:Categoria}]})
    return libros
}

exports.obtenerLibros = obtenerLibros;
exports.crearLibro = crearLibro;