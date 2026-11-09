const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
  id: { 
    type: Number, 
    unique: true, 
    index: true 
  },
  nome: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true,
  versionKey: false // Remove aquele campo __v do MongoDB que polui o JSON
});

module.exports = mongoose.model('Categoria', categoriaSchema);