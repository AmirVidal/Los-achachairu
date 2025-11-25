const mongoose = require('mongoose');

const RangoEdadSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  edadMin: {
    type: Number,
    required: true,
    min: 0
  },
  edadMax: {
    type: Number,
    required: true,
    min: 1
  },
  estado: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('RangoEdad', RangoEdadSchema);