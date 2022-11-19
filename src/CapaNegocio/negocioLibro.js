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

const borrarLibro = async ({name}) => {
    const libro = await Libro.findOne({where:{name:name}})

    if(!libro){
        return {mensaje:'libro no existe', exito:false}
    }else {
        const resp = await Libro.destroy({where:{name:name}})
        return resp
    }
}

const actualizarLibro = async ({id,name,publisher,autorId,categoriaId}) => {
    const libro = await Libro.findOne({where:{id:id}})
    const result = await libro.update({name:name,publisher:publisher,autorId:autorId, categoryId:categoriaId})
    return result;
}

exports.borrarLibro = borrarLibro;
exports.actualizarLibro = actualizarLibro;
exports.obtenerLibros = obtenerLibros;
exports.crearLibro = crearLibro;