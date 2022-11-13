const { Categoria } = require("../CapaDTO/categoria")


const crearCategoria = async ({name,detail}) => {
    const newCategory = await Categoria.create({name:name, detail:detail})
    return newCategory;
}

const verCategorias = async () => {
    const categorias = await Categoria.findAll();
    return categorias
}

exports.verCategorias = verCategorias;

exports.crearCategoria = crearCategoria;