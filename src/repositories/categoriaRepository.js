const Categoria = require('../models/Categoria');

class CategoriaRepository {
    async criar(dados) {
        return await Categoria.create(dados);
    }

    async listar(skip, limit) {
        return await Categoria.find()
            .sort({ _id: 1 })   // ordena pelo _id (1 = crescente, do mais antigo pro mais novo)
            .skip(skip)         // pula os documentos das páginas anteriores
            .limit(limit);      // traz no máximo "limit" documentos
    }

    async contar() {
        return await Categoria.countDocuments(); // total de categorias no banco
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