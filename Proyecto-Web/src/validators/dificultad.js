const { body } = require('express-validator');

exports.validarDificultad = [
  body('nivel')
    .notEmpty().withMessage('El nivel es obligatorio').bail()
    .isIn(['Fácil', 'Medio', 'Difícil'])
    .withMessage('El nivel debe ser: Fácil, Medio o Difícil'),

  body('puntajeBase')
    .optional()
    .isNumeric().withMessage('El puntaje base debe ser numérico').bail()
    .isFloat({ min: 1 }).withMessage('El puntaje base debe ser mayor o igual a 1'),

  body('estado')
    .optional()
    .isBoolean().withMessage('El estado debe ser booleano')
];

