const mongoose = require('mongoose');

const SubcategoriaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    default: ''
  },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
    required: true
  },
  estado: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('subcategoria', SubcategoriaSchema);