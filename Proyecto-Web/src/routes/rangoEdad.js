const express = require('express');
const router = express.Router();

const controller = require('../controllers/rangoEdad');
const { validarRangoEdad } = require('../validators/rangoEdad');
const validarCampos = require('../middlewares/validarCampos');

router.post('/', validarRangoEdad, validarCampos, controller.crearRangoEdad);
router.get('/', controller.obtenerRangosEdad);
router.get('/:id', controller.obtenerRangoEdad);
router.put('/:id', validarRangoEdad, validarCampos, controller.actualizarRangoEdad);
router.delete('/:id', controller.eliminarRangoEdad);

module.exports = router;
