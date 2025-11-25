const express = require('express');
const router = express.Router();
const controller = require('../controllers/categoria');

router.post('/', controller.crearCategoria);
router.get('/', controller.obtenerCategorias);
router.get('/:id', controller.obtenerCategoria);
router.put('/:id', controller.actualizarCategoria);
router.delete('/:id', controller.eliminarCategoria);

module.exports = router;