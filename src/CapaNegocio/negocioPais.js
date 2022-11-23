const { Pais } = require("../CapaDTO/pais");



const crearPais = async ({name,abreviation}) => {
    const pais = await Pais.create({name:name, abreviation:abreviation})
    return pais;
}

const verPaises = async () => {
    const paises = await Pais.findAll()
    return paises
}

const borrarPais = async ({id}) => {
    const pais = await Pais.findOne({where:{id:id}})

    if(!pais){
        return {mensaje:'pais no existe', exito:false}
    }else {
        const resp = await Pais.destroy({where:{id:id}})
        return resp
    }
}

const actualizarPais = async ({id,abreviation,name}) => {
    const pais = await Pais.findOne({where:{id:id}})
    const result = await pais.update({abreviation:abreviation, name:name})
    return result;
}

exports.borrarPais = borrarPais;
exports.actualizarPais = actualizarPais;
exports.crearPais = crearPais;
exports.verPaises = verPaises;