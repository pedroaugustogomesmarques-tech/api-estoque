const categoriaRepository = require('../repositories/categoriaRepository');

class CategoriaService {
    async criarCategoria(dados) {
        if (!dados.nome) {
            throw new Error('O nome da categoria é obrigatório.');
        }
        return await categoriaRepository.criar(dados);
    }
    
    async listarCategorias() {
        return await categoriaRepository.listar();
    }
    
    async buscarCategoria(id) {
        const categoria = await categoriaRepository.buscarPorId(id);
        if (!categoria) {
            throw new Error('Categoria não encontrada.');
        }
        return categoria;
    }
    
    async atualizarCategoria(id, dados) {
        return await categoriaRepository.atualizar(id, dados);
    }
    
    async deletarCategoria(id) {
        return await categoriaRepository.deletar(id);
    }
}

module.exports = new CategoriaService();