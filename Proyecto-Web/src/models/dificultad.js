const mongoose = require('mongoose');

const DificultadSchema = new mongoose.Schema({
  nivel: {
    type: String,
    required: true,
    enum: ['Fácil', 'Medio', 'Difícil']
  },
  puntajeBase: {
    type: Number,
    default: 1
  },
  estado: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Dificultad', DificultadSchema);