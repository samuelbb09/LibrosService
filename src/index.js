const express = require('express')
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');
const { crearUsuarioWeb, ingresarUsuarioWeb, crearCategoriaWeb, verCategoriasWeb, crearAutorWeb, verAutoresWeb, crearLibroWeb, obtenerLibrosWeb, crearReservaWeb, obtenerReservasWeb, obtenerReclamosWeb, crearReclamoWeb, borrarUsuarioWeb, actualizarUsuarioWeb, borrarLibroWeb, actualizarLibroWeb, borrarAutorWeb, actualizarAutorWeb, borrarCategoriaWeb, actualizarCategoriaWeb, borrarReservaWeb, actualizarReservaWeb, borrarReclamoWeb, actualizarReclamoWeb } = require('./CapaServicio/librosWebService');
require('./CapaConexion/Conexion')
require('./DB/loadassociations').loadAll();

app.use(cors())
app.use(bodyParser.json());


app.post('/usuario/crear', crearUsuarioWeb)
app.post('/usuario/ingresar', ingresarUsuarioWeb)
app.post('/usuario/borrar', borrarUsuarioWeb)
app.put('/usuario/actualizar', actualizarUsuarioWeb)
app.post('/categoria/crear', crearCategoriaWeb)
app.post('/categoria/borrar', borrarCategoriaWeb)
app.put('/categoria/actualizar', actualizarCategoriaWeb)
app.get('/categoria', verCategoriasWeb)
app.post('/autor/crear', crearAutorWeb)
app.post('/autor/borrar', borrarAutorWeb)
app.put('/autor/actualizar', actualizarAutorWeb)
app.get('/autor', verAutoresWeb)
app.post('/libro/crear', crearLibroWeb)
app.post('/libro/borrar', borrarLibroWeb)
app.put('/libro/actualizar', actualizarLibroWeb)
app.get('/libro', obtenerLibrosWeb)
app.post('/reserva/crear', crearReservaWeb)
app.post('/reserva/borrar', borrarReservaWeb)
app.put('/reserva/actualizar', actualizarReservaWeb)
app.post('/reserva', obtenerReservasWeb)
app.post('/reclamo', obtenerReclamosWeb)
app.post('/reclamo/crear', crearReclamoWeb)
app.post('/reclamo/borrar', borrarReclamoWeb)
app.put('/reclamo/actualizar', actualizarReclamoWeb)

app.listen(8000, () => {console.log('app running');})