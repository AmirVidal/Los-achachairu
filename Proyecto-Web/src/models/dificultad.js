const mongoose = require('mongoose');

const DificultadSchema = new mongoose.Schema({
  nivel: {
    type: String,
    required: true,
    enum: ['Fácil', 'Medio', 'Difícil']
  },
  estado: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Dificultad', DificultadSchema);