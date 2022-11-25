const { crearAutor, verAutores, borrarAutor, actualizarAutor } = require("../CapaNegocio/negocioAutor")
const { crearCategoria, verCategorias, borrarCategoria, actualizarCategoria } = require("../CapaNegocio/negocioCategoria")
const { crearEditorial, verEditoriales, actualizarEditorial, borrarEditorial } = require("../CapaNegocio/negocioEditorial")
const { crearLibro, obtenerLibros, borrarLibro, actualizarLibro } = require("../CapaNegocio/negocioLibro")
const { crearOpinion, obtenerOpiniones, borrarOpinion, actualizarOpinion } = require("../CapaNegocio/negocioOpinion")
const { crearPais, actualizarPais, verPaises, borrarPais } = require("../CapaNegocio/negocioPais")
const { obtenerReclamos, crearReclamo, borrarReclamo, actualizarReclamo } = require("../CapaNegocio/negocioReclamo")
const { crearRecomendacion, obtenerRecomendaciones, borrarRecomendacion, actualizarRecomendacion } = require("../CapaNegocio/negocioRecomendacion")
const { crearReserva, obtenerReservas, borrarReserva, actualizarReserva } = require("../CapaNegocio/negocioReservar")
const { crearUsuario, ingresarUsuario, borrarUsuario, actualizarUsuario } = require("../CapaNegocio/negocioUsuario")



const crearUsuarioWeb = async (req,res) => {
    console.log('holaa');
    const usuarioCreado = await crearUsuario(req.body)
    
    res.json(usuarioCreado)
}

const ingresarUsuarioWeb = async (req,res) => {
    const resp = await ingresarUsuario(req.body)
    res.json(resp)
}

const borrarUsuarioWeb = async (req,res) => {
    const resp = await borrarUsuario(req.body)
    res.json(resp)
}

const actualizarUsuarioWeb = async (req,res) => {
    const resp = await actualizarUsuario(req.body)
    res.json(resp)
}

const crearCategoriaWeb = async (req,res) => {
    const categoria = await crearCategoria(req.body)
    res.json(categoria);
}

const borrarCategoriaWeb = async (req,res) => {
    const resp = await borrarCategoria(req.body)
    res.json(resp)
}

const actualizarCategoriaWeb = async (req,res) => {
    const resp = await actualizarCategoria(req.body)
    res.json(resp)
}

const verCategoriasWeb = async (req,res) => {
    const categorias = await verCategorias()
    res.json(categorias)
}

const crearAutorWeb = async (req,res) => {
    const autor = await crearAutor(req.body)
    res.json(autor)
}

const borrarAutorWeb = async (req,res) => {
    const resp = await borrarAutor(req.body)
    res.json(resp)
}

const actualizarAutorWeb = async (req,res) => {

    const resp = await actualizarAutor(req.body)
    res.json(resp)

}

const verAutoresWeb = async (req,res) => {
    const autores = await verAutores()
    res.json(autores)
}

const crearLibroWeb = async (req,res) => {
    try {
        const libro = await crearLibro(req.body)
        res.json(libro)
        
    } catch (error) {
        res.json({message: error.message})
    }
    
}

const borrarLibroWeb = async (req,res) => {
    const resp = await borrarLibro(req.body)
    res.json(resp)
}

const actualizarLibroWeb = async (req,res) => {

    const resp = await actualizarLibro(req.body)
    res.json(resp)

}

const obtenerLibrosWeb = async (req,res) => {
    const libros = await obtenerLibros();
    res.json(libros)
}

const crearReservaWeb = async (req,res) => {
    const reserva = await crearReserva(req.body)
    res.json(reserva)
}

const borrarReservaWeb = async (req,res) => {
    const resp = await borrarReserva(req.body)
    res.json(resp)
}

const actualizarReservaWeb = async (req,res) => {
    const resp = await actualizarReserva(req.body)
    res.json(resp)
}

const obtenerReservasWeb = async (req,res) => {
    const { usuarioId } = req.query;
    const reservas = await obtenerReservas({usuarioId})
    console.log(reservas)
    res.json(reservas)
}

const crearReclamoWeb = async (req,res) => {
    const reclamo = await crearReclamo(req.body)
    res.json(reclamo)
}

const obtenerReclamosWeb = async (req,res) => {

    const { usuarioId } = req.query;
    const reclamos = await obtenerReclamos({ usuarioId})
    res.json(reclamos)
}

const borrarReclamoWeb = async (req,res) => {
    const resp = await borrarReclamo(req.body)
    res.json(resp)
}

const actualizarReclamoWeb = async (req,res) => {
    const resp = await actualizarReclamo(req.body)
    res.json(resp)
}

const crearPaisWeb = async (req,res) => {
    const resp = await crearPais(req.body)
    res.json(resp)
}

const actualizarPaisWeb = async (req,res) => {
    const resp = await actualizarPais(req.body)
    res.json(resp)
}

const verPaisesWeb = async (req,res) => {
    const resp = await verPaises()
    res.json(resp)
}

const borrarPaisWeb = async (req,res) => {
    const resp = await borrarPais(req.body)
    res.json(resp)
}

const crearEditorialWeb = async (req,res) => {
    const resp = await crearEditorial(req.body)
    res.json(resp)
}

const verEditorialesWeb = async (req,res) => {
    const resp = await verEditoriales();
    console.log('Query editoriales,', resp)
    res.json(resp)
}

const actualizarEditorialeWeb = async (req,res) => {
    const resp = await actualizarEditorial(req.body);
    res.json(resp)
}

const borrarEditorialeWeb = async (req,res) => {
    const resp = await borrarEditorial(req.body);
    res.json(resp)
}

const crearOpinionWeb = async (req,res) => {
    const resp = await crearOpinion(req.body)
    res.json(resp)
}

const obtenerOpinionesWeb = async (req,res) => {
    const {libroId} = req.query
    const resp = await obtenerOpiniones(libroId)
    res.json(resp)
}

const borrarOpinionWeb = async (req,res) => {
    const resp = await borrarOpinion(req.body)
    res.json(resp)
}

const actualizarOpinionWeb = async (req,res) => {
    const resp = await actualizarOpinion(req.body)
    res.json(resp)
}

const crearRecomendacionWeb = async (req,res) => {
    const resp = await crearRecomendacion(req.body)
    res.json(resp)
}

const obtenerRecomendacionesWeb = async (req,res) => {
    const {autorId} = req.query
    const resp = await obtenerRecomendaciones(autorId)
    res.json(resp)
}

const borrarRecomendacionWeb = async (req,res) => {
    const resp = await borrarRecomendacion(req.body)
    res.json(resp)
}

const actualizarRecomendacionWeb = async (req,res) => {
    const resp = await actualizarRecomendacion(req.body)
    res.json(resp)
}
exports.crearRecomendacionWeb = crearRecomendacionWeb;
exports.obtenerRecomendacionesWeb = obtenerRecomendacionesWeb;
exports.borrarRecomendacionWeb = borrarRecomendacionWeb;
exports.actualizarRecomendacionWeb=actualizarRecomendacionWeb;
exports.borrarOpinionWeb = borrarOpinionWeb;
exports.actualizarOpinionWeb = actualizarOpinionWeb;
exports.obtenerOpinionesWeb = obtenerOpinionesWeb;
exports.crearOpinionWeb = crearOpinionWeb;
exports.actualizarEditorialeWeb = actualizarEditorialeWeb;
exports.borrarEditorialeWeb = borrarEditorialeWeb;
exports.verEditorialesWeb = verEditorialesWeb;
exports.crearEditorialWeb = crearEditorialWeb;
exports.verPaisesWeb = verPaisesWeb;
exports.borrarPaisWeb = borrarPaisWeb;
exports.actualizarPaisWeb = actualizarPaisWeb; 
exports.crearPaisWeb = crearPaisWeb;
exports.actualizarReclamoWeb = actualizarReclamoWeb;
exports.borrarReclamoWeb = borrarReclamoWeb;
exports.actualizarReservaWeb = actualizarReservaWeb;
exports.borrarReservaWeb = borrarReservaWeb;
exports.borrarCategoriaWeb = borrarCategoriaWeb;
exports.actualizarCategoriaWeb = actualizarCategoriaWeb;
exports.actualizarAutorWeb = actualizarAutorWeb;
exports.borrarAutorWeb = borrarAutorWeb;
exports.actualizarUsuarioWeb = actualizarUsuarioWeb;
exports.borrarUsuarioWeb = borrarUsuarioWeb;
exports.crearReclamoWeb = crearReclamoWeb;
exports.obtenerReclamosWeb = obtenerReclamosWeb;
exports.obtenerReservasWeb = obtenerReservasWeb;
exports.crearReservaWeb = crearReservaWeb;
exports.obtenerLibrosWeb = obtenerLibrosWeb;
exports.crearLibroWeb = crearLibroWeb;
exports.actualizarLibroWeb = actualizarLibroWeb;
exports.borrarLibroWeb = borrarLibroWeb;
exports.crearAutorWeb = crearAutorWeb;
exports.verAutoresWeb = verAutoresWeb;
exports.crearUsuarioWeb = crearUsuarioWeb;
exports.ingresarUsuarioWeb = ingresarUsuarioWeb;
exports.crearCategoriaWeb = crearCategoriaWeb;
exports.verCategoriasWeb = verCategoriasWeb;