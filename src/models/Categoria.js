const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    itens: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item' // Tem que ser exatamente o nome que você usou no module.exports do Item
    }]
}, {
    timestamps: true
});

// Garanta que está exportando o mongoose.model diretamente:
module.exports = mongoose.model('Categoria', categoriaSchema);