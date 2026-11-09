const Categoria = require('../models/Categoria');

class CategoriaRepository {
    async criar(dados) {
        const ultimaCategoria = await Categoria.findOne().sort({ id: -1 });

        let proximoId = 1;
        if (ultimaCategoria && !isNaN(ultimaCategoria.id)) {
            proximoId = ultimaCategoria.id + 1;
        }

        const novaCategoria = await Categoria.create({
            id: proximoId,
            nome: dados.nome
        });

        return novaCategoria;
    }

    async listar(skip, limit) {
        return await Categoria.find()
            .select('-_id -__v')
            .sort({ id: 1 })   // ordena pelo _id (1 = crescente, do mais antigo pro mais novo)
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