const { body } = require('express-validator');

exports.validarRangoEdad = [
  body('nombre')
    .notEmpty().withMessage('El nombre del rango es obligatorio').bail()
    .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),

  body('edadMin')
    .notEmpty().withMessage('La edad mínima es obligatoria').bail()
    .isInt({ min: 0 }).withMessage('La edad mínima debe ser un número mayor o igual a 0'),

  body('edadMax')
    .notEmpty().withMessage('La edad máxima es obligatoria').bail()
    .isInt({ min: 1 }).withMessage('La edad máxima debe ser un número mayor o igual a 1'),

  body('estado')
    .optional()
    .isBoolean().withMessage('El estado debe ser booleano')
];

