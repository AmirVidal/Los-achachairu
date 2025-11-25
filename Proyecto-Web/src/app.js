const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/categorias', require('./routes/categoria'));
app.use('/api/subcategorias', require('./routes/subcategoria'));
app.use('/api/dificultades', require('./routes/dificultad'));
app.use('/api/rangos-edad', require('./routes/rangoEdad'));

app.get('/', (req, res) => {
    res.send('api funcionando');
});
module.exports = app;