const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    quantidade: {
        type: Number,
        required: true,
        default: 0
    },
    preco: {
        type: Number,
        required: true
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);