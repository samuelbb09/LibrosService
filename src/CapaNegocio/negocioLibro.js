const { Autor } = require("../CapaDTO/autor");
const { Categoria } = require("../CapaDTO/categoria");
const { Editorial } = require("../CapaDTO/editorial");
const { Libro } = require("../CapaDTO/libro")



const crearLibro = async ({name,editorialId,autorId, categoriaId}) => {
    try {
        console.log(categoriaId);
        const libro = await Libro.create({name:name, editorialId:editorialId, autorId:autorId,categoryId:categoriaId})
        return libro;
    } catch (error) {
        throw new Error('error al crear libro')
    }
    
}


const obtenerLibros = async () => {
    const libros = await Libro.findAll({include: [{model: Autor}, {model:Categoria}, {model:Editorial}]})
    const data = libros.map( l => {
        console.log(l)
        return {
            id: l.id,
            name: l.name,
            autorId: l.autorId,
            publisher: l.editorial ? l.editorial.id : 'NULL',
            categoryId: l.category.id,
            nombreAutor: l.autor.name,
            nombreCategoria: l.category.name,
            nombreEditorial: l.editorial.name
        }
    })
    return data
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

const actualizarLibro = async ({id,name,editorialId,autorId,categoriaId}) => {
    const libro = await Libro.findOne({where:{id:id}})
    const result = await libro.update({name:name,editorialId:editorialId,autorId:autorId, categoryId:categoriaId})
    return result;
}

exports.borrarLibro = borrarLibro;
exports.actualizarLibro = actualizarLibro;
exports.obtenerLibros = obtenerLibros;
exports.crearLibro = crearLibro;