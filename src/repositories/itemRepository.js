const Item = require('../models/Item');

class ItemRepository {
    async criar(dados) {
        return await Item.create(dados);
    }
    
    async listar() {
        return await Item.find().populate('categoria');
    }
    
    async buscarPorId(id) {
        return await Item.findById(id).populate('categoria');
    }
    
    async atualizar(id, dados) {
        return await Item.findByIdAndUpdate(id, dados, { new: true });
    }
    
    async deletar(id) {
        return await Item.findByIdAndDelete(id);
    }
}

module.exports = new ItemRepository();