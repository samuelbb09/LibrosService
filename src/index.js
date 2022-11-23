const express = require('express')
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');
const { crearUsuarioWeb, ingresarUsuarioWeb, crearCategoriaWeb, verCategoriasWeb, crearAutorWeb, verAutoresWeb, crearLibroWeb, obtenerLibrosWeb, crearReservaWeb, obtenerReservasWeb, obtenerReclamosWeb, crearReclamoWeb, borrarUsuarioWeb, actualizarUsuarioWeb, borrarLibroWeb, actualizarLibroWeb, borrarAutorWeb, actualizarAutorWeb, borrarCategoriaWeb, actualizarCategoriaWeb, borrarReservaWeb, actualizarReservaWeb, borrarReclamoWeb, actualizarReclamoWeb, crearPaisWeb, crearEditorialWeb, verEditorialesWeb, verPaisesWeb, borrarPaisWeb, actualiazarPaisWeb, actualizarPaisWeb, borrarEditorialeWeb, actualizarEditorialeWeb, crearOpinionWeb, obtenerOpinionesWeb, borrarOpinionWeb, actualizarOpinionWeb, crearRecomendacionWeb, obtenerRecomendacionWeb, obtenerRecomendacionesWeb, actualizarRecomendacionWeb, borrarRecomendacionWeb } = require('./CapaServicio/librosWebService');
require('./CapaConexion/Conexion')
require('./DB/loadassociations').loadAll();

app.use(cors())
app.use(bodyParser.json());


app.post('/usuario/crear', crearUsuarioWeb)
app.post('/usuario/ingresar', ingresarUsuarioWeb)
app.post('/usuario/borrar', borrarUsuarioWeb)
app.post('/usuario/actualizar', actualizarUsuarioWeb)
app.post('/categoria/crear', crearCategoriaWeb)
app.post('/categoria/borrar', borrarCategoriaWeb)
app.post('/categoria/actualizar', actualizarCategoriaWeb)
app.get('/categoria', verCategoriasWeb)
app.post('/autor/crear', crearAutorWeb)
app.post('/autor/borrar', borrarAutorWeb)
app.post('/autor/actualizar', actualizarAutorWeb)
app.get('/autor', verAutoresWeb)
app.post('/libro/crear', crearLibroWeb)
app.post('/libro/borrar', borrarLibroWeb)
app.post('/libro/actualizar', actualizarLibroWeb)
app.get('/libro', obtenerLibrosWeb)
app.post('/reserva/crear', crearReservaWeb)
app.post('/reserva/borrar', borrarReservaWeb)
app.post('/reserva/actualizar', actualizarReservaWeb)
app.get('/reserva', obtenerReservasWeb)
app.get('/reclamo', obtenerReclamosWeb)
app.post('/reclamo/crear', crearReclamoWeb)
app.post('/reclamo/borrar', borrarReclamoWeb)
app.post('/reclamo/actualizar', actualizarReclamoWeb)
app.post('/pais/crear', crearPaisWeb)
app.get('/pais', verPaisesWeb)
app.post('/pais/borrar', borrarPaisWeb)
app.post('/pais/actualizar', actualizarPaisWeb)
app.post('/editorial/crear', crearEditorialWeb)
app.get('/editorial', verEditorialesWeb)
app.post('/editorial/borrar', borrarEditorialeWeb)
app.post('/editorial/actualizar', actualizarEditorialeWeb)
app.post('/opinion/crear', crearOpinionWeb)
app.get('/opinion', obtenerOpinionesWeb)
app.post('/opinion/borrar', borrarOpinionWeb)
app.post('/opinion/actualizar', actualizarOpinionWeb)
app.post('/recomendacion/crear', crearRecomendacionWeb)
app.get('/recomendacion', obtenerRecomendacionesWeb)
app.post('/recomendacion/actualizar', actualizarRecomendacionWeb)
app.post('/recomendacion/borrar', borrarRecomendacionWeb)

app.listen(8000, () => {console.log('app running');})