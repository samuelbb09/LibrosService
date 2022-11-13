const express = require('express')
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');
const { crearUsuarioWeb, ingresarUsuarioWeb, crearCategoriaWeb, verCategoriasWeb, crearAutorWeb, verAutoresWeb, crearLibroWeb, obtenerLibrosWeb, crearReservaWeb, obtenerReservasWeb, obtenerReclamosWeb, crearReclamoWeb } = require('./CapaServicio/librosWebService');
require('./CapaConexion/Conexion')
require('./DB/loadassociations').loadAll();

app.use(cors())
app.use(bodyParser.json());


app.post('/usuario/crear', crearUsuarioWeb)
app.post('/usuario/ingresar', ingresarUsuarioWeb)
app.post('/categoria/crear', crearCategoriaWeb)
app.get('/categoria', verCategoriasWeb)
app.post('/autor/crear', crearAutorWeb)
app.get('/autor', verAutoresWeb)
app.post('/libro/crear', crearLibroWeb)
app.get('/libro', obtenerLibrosWeb)
app.post('/reserva/crear', crearReservaWeb)
app.post('/reserva', obtenerReservasWeb)
app.post('/reclamo', obtenerReclamosWeb)
app.post('/reclamo/crear', crearReclamoWeb)

app.listen(8000, () => {console.log('app running');})