const { body } = require('express-validator');

exports.validarSubcategoria = [
  body('nombre')
    .notEmpty().withMessage('El nombre es obligatorio').bail()
    .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),

  body('descripcion')
    .optional()
    .isString().withMessage('La descripción debe ser un texto'),

  body('categoria')
    .notEmpty().withMessage('La categoría es obligatoria').bail()
    .isMongoId().withMessage('El ID de categoría no es válido'),

  body('estado')
    .optional()
    .isBoolean().withMessage('El estado debe ser booleano')
];

