const { Usuario } = require("../CapaDTO/usuario")


const crearUsuario = async ({username,password,firstname,lastname}) => {
    const newUser = await Usuario.create({user:username, password:password, firstname:firstname, lastname:lastname})
    return newUser;

    
}

const ingresarUsuario = async ({username,password}) => {
    const user = await Usuario.findOne({where:{user:username}})

    if(!user){
        return {mensaje:'usuario no existe', exito:false}
    }else {
        if(user.password == password){
            return {mensaje:'ingreso correcto', userId: user.id,exito:true}
        }else {
            return {mensaje:'contraseña incorrecta', exito:false}
        }
    }
}

const borrarUsuario = async ({username}) => {
    const user = await Usuario.findOne({where:{user:username}})

    if(!user){
        return {mensaje:'usuario no existe', exito:false}
    }else {
        const resp = await Usuario.destroy({where:{user:username}})
        return resp
    }
}

const actualizarUsuario = async ({id,username,password,firstname,lastname}) => {
    const user = await Usuario.findOne({where:{id:id}})
    const result = await user.update({user:username,password:password,firstname:firstname, lastname:lastname})
    return result;
}

exports.actualizarUsuario =  actualizarUsuario;
exports.borrarUsuario = borrarUsuario;
exports.crearUsuario = crearUsuario;
exports.ingresarUsuario = ingresarUsuario;