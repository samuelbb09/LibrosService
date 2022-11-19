const { Autor } = require("../CapaDTO/autor")



const crearAutor = async ({name,lastname}) => {
    const autor = await Autor.create({name:name,lastname:lastname})
    return autor;
}

const verAutores = async () => {
    const autores = await Autor.findAll()
    return autores
}

const borrarAutor = async ({name}) => {
    const autor = await Autor.findOne({where:{name:name}})

    if(!autor){
        return {mensaje:'libro no existe', exito:false}
    }else {
        const resp = await Autor.destroy({where:{name:name}})
        return resp
    }
}

const actualizarAutor = async ({id,name,lastname}) => {
    const autor = await Autor.findOne({where:{id:id}})
    const result = await autor.update({name:name,lastname:lastname})
    return result;
}

exports.borrarAutor = borrarAutor;
exports.actualizarAutor = actualizarAutor;
exports.crearAutor = crearAutor;
exports.verAutores = verAutores;