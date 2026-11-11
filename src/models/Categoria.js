const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const categoriaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    itens: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item' // Tem que ser exatamente o nome que você usou no module.exports do Item
    }],
    status: {
        type: String,
        enum: ['ATIVO', 'INATIVO'],
        default: 'ATIVO'
    }
}, {
    timestamps: true
});

categoriaSchema.plugin(AutoIncrement, { inc_field: 'id' });

// Garanta que está exportando o mongoose.model diretamente:
module.exports = mongoose.model('Categoria', categoriaSchema);