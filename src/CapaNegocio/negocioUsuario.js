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
            return {mensaje:'ingreso correcto', exito:true}
        }else {
            return {mensaje:'contraseña incorrecta', exito:false}
        }
    }
}

exports.crearUsuario = crearUsuario;
exports.ingresarUsuario = ingresarUsuario;