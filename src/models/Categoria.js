const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

// Garanta que está exportando o mongoose.model diretamente:
module.exports = mongoose.model('Categoria', categoriaSchema);