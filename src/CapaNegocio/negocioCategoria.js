const { Categoria } = require("../CapaDTO/categoria")


const crearCategoria = async ({name,detail}) => {
    const newCategory = await Categoria.create({name:name, detail:detail})
    return newCategory;
}

const verCategorias = async () => {
    const categorias = await Categoria.findAll();
    return categorias
}

const borrarCategoria = async ({name}) => {
    const categoria = await Categoria.findOne({where:{name:name}})

    if(!categoria){
        return {mensaje:'categoria no existe', exito:false}
    }else {
        const resp = await Categoria.destroy({where:{name:name}})
        return resp
    }
}

const actualizarCategoria = async ({id,name,detail}) => {
    const categoria = await Categoria.findOne({where:{id:id}})
    const result = await categoria.update({name:name,detail:detail})
    return result;
}

exports.borrarCategoria = borrarCategoria;
exports.actualizarCategoria = actualizarCategoria;
exports.verCategorias = verCategorias;
exports.crearCategoria = crearCategoria;