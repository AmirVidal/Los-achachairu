const { body } = require('express-validator');

exports.validarUsuario = [

  body('nombre')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres'),

  body('correo')
    .notEmpty().withMessage('El correo es obligatorio')
    .isEmail().withMessage('Debe ser un correo válido'),

  body('password')
    .notEmpty().withMessage('La contraseña es obligatoria')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener mínimo 6 caracteres'),

  body('rol')
    .notEmpty().withMessage('El rol es obligatorio')
    .isIn(['gestor', 'editor', 'encuestado'])
    .withMessage('Rol inválido: debe ser gestor, editor o encuestado'),

  body('autorizadoPorGestor')
    .optional()
    .isBoolean().withMessage('autorizadoPorGestor debe ser booleano'),

  body('activo')
    .optional()
    .isBoolean().withMessage('activo debe ser booleano')

];