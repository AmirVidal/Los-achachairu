const { body } = require('express-validator');

exports.validarCategoria = [
  body('nombre')
  .notEmpty().withMessage('El nombre es obligatorio')
  .bail()
  .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),


  body('descripcion')
    .optional()
    .isString().withMessage('La descripción debe ser texto'),

  body('estado')
    .optional()
    .isBoolean().withMessage('El estado debe ser booleano')
];
