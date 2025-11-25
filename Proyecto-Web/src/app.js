const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/categorias', require('./routes/categorias'));
app.use('/api/subcategorias', require('./routes/subcategorias'));
app.use('/api/dificultades', require('./routes/dificultades'));
app.use('/api/rangos-edad', require('./routes/rangosEdad'));

module.exports = app;
