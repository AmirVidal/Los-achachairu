const express = require('express');
const router = express.Router();
const controller = require('../controllers/subcategoria');

router.post('/', (req, res) => {
  console.log("➡️ Entró a POST /api/subcategorias");
  res.send("OK");
});
router.get('/', controller.obtenerSubcategorias);
router.get('/:id', controller.obtenerSubcategoria);
router.put('/:id', controller.actualizarSubcategoria);
router.delete('/:id', controller.eliminarSubcategoria);

module.exports = router;