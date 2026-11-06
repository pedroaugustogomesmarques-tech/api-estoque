const Categoria = require('../models/Categoria');

class CategoriaRepository {
    async criar(dados) {
        return await Categoria.create(dados);
    }
    
    async listar() {
        return await Categoria.find();
    }
    
    async buscarPorId(id) {
        return await Categoria.findById(id);
    }
    
    async atualizar(id, dados) {
        return await Categoria.findByIdAndUpdate(id, dados, { new: true });
    }
    
    async deletar(id) {
        return await Categoria.findByIdAndDelete(id);
    }
}

module.exports = new CategoriaRepository();