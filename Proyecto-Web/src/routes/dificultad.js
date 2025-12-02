const express = require('express');
const router = express.Router();

const controller = require('../controllers/dificultad');
const { validarDificultad } = require('../validators/dificultad');
const validarCampos = require('../middlewares/validarCampos');

router.post('/', validarDificultad, validarCampos, controller.crearDificultad);
router.get('/', controller.obtenerDificultades);
router.get('/:id', controller.obtenerDificultad);
router.put('/:id', validarDificultad, validarCampos, controller.actualizarDificultad);
router.delete('/:id', controller.eliminarDificultad);

module.exports = router;
