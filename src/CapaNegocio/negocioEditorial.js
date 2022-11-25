const { Editorial } = require("../CapaDTO/editorial");
const { Pais } = require("../CapaDTO/pais");



const crearEditorial = async ({name,paisId}) => {
    const editorial = await Editorial.create({name:name, paiId:paisId})
    return editorial;
}

const verEditoriales = async () => {
    const editoriales = await Editorial.findAll({include:{model:Pais}})
    //editoriales.nombrePais = editoriales.pai.name;
    editoriales.forEach(e => {
        e.setDataValue('nombrePais',e.pai.name);
    });
    return editoriales
}

const borrarEditorial = async ({id}) => {
    const editorial = await Editorial.findOne({where:{id:id}})

    if(!editorial){
        return {mensaje:'editorial no existe', exito:false}
    }else {
        const resp = await Editorial.destroy({where:{id:id}})
        return resp
    }
}

const actualizarEditorial = async ({id,name, paisId}) => {
    const editorial = await Editorial.findOne({where:{id:id}})
    const result = await editorial.update({name:name, paiId:paisId})
    return result;
}

exports.borrarEditorial = borrarEditorial;
exports.actualizarEditorial = actualizarEditorial;
exports.crearEditorial = crearEditorial;
exports.verEditoriales = verEditoriales;