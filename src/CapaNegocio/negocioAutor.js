const { Autor } = require("../CapaDTO/autor")



const crearAutor = async ({name,lastname}) => {
    const autor = await Autor.create({name:name,lastname:lastname})
    return autor;
}

const verAutores = async () => {
    const autores = await Autor.findAll()
    return autores
}


exports.crearAutor = crearAutor;
exports.verAutores = verAutores;