const { crearAutor, verAutores } = require("../CapaNegocio/negocioAutor")
const { crearCategoria, verCategorias } = require("../CapaNegocio/negocioCategoria")
const { crearLibro, obtenerLibros } = require("../CapaNegocio/negocioLibro")
const { obtenerReclamos, crearReclamo } = require("../CapaNegocio/negocioReclamo")
const { crearReserva, obtenerReservas } = require("../CapaNegocio/negocioReservar")
const { crearUsuario, ingresarUsuario } = require("../CapaNegocio/negocioUsuario")



const crearUsuarioWeb = async (req,res) => {
    const usuarioCreado = await crearUsuario(req.body)
    res.json(usuarioCreado)
}

const ingresarUsuarioWeb = async (req,res) => {
    const resp = await ingresarUsuario(req.body)
    res.json(resp)
}

const crearCategoriaWeb = async (req,res) => {
    const categoria = await crearCategoria(req.body)
    res.json(categoria);
}

const verCategoriasWeb = async (req,res) => {
    const categorias = await verCategorias()
    res.json(categorias)
}

const crearAutorWeb = async (req,res) => {
    const autor = await crearAutor(req.body)
    res.json(autor)
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

const obtenerLibrosWeb = async (req,res) => {
    const libros = await obtenerLibros();
    res.json(libros)
}

const crearReservaWeb = async (req,res) => {
    const reserva = await crearReserva(req.body)
    res.json(reserva)
}

const obtenerReservasWeb = async (req,res) => {
    const reservas = await obtenerReservas(req.body)
    res.json(reservas)
}

const crearReclamoWeb = async (req,res) => {
    const reclamo = await crearReclamo(req.body)
    res.json(reclamo)
}

const obtenerReclamosWeb = async (req,res) => {
    const reclamos = await obtenerReclamos(req.body)
    res.json(reclamos)
}

exports.crearReclamoWeb = crearReclamoWeb;
exports.obtenerReclamosWeb = obtenerReclamosWeb;
exports.obtenerReservasWeb = obtenerReservasWeb;
exports.crearReservaWeb = crearReservaWeb;
exports.obtenerLibrosWeb = obtenerLibrosWeb;
exports.crearLibroWeb = crearLibroWeb;
exports.crearAutorWeb = crearAutorWeb;
exports.verAutoresWeb = verAutoresWeb;
exports.crearUsuarioWeb = crearUsuarioWeb;
exports.ingresarUsuarioWeb = ingresarUsuarioWeb;
exports.crearCategoriaWeb = crearCategoriaWeb;
exports.verCategoriasWeb = verCategoriasWeb;