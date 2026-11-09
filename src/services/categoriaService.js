const categoriaRepository = require('../repositories/categoriaRepository');

class CategoriaService {
    async criarCategoria(dados) {
        if (!dados.nome) {
            throw new Error('O nome da categoria é obrigatório.');
        }
        return await categoriaRepository.criar(dados);
    }

    async listarCategorias(page, limit) {
        // 1. Valores padrão: se não vier nada na URL, usa página 1 e 10 por página
        const pagina = page === undefined ? 1 : Number(page);
        const limite = limit === undefined ? 10 : Number(limit);

        // 2. Validações (regras de negócio)
        if (!Number.isInteger(pagina) || pagina < 1) {
            throw new Error('O parâmetro page deve ser um número inteiro maior ou igual a 1.');
        }
        if (!Number.isInteger(limite) || limite < 1 || limite > 100) {
            throw new Error('O parâmetro limit deve ser um número inteiro entre 1 e 100.');
        }

        // 3. Conta de quantos documentos pular
        const skip = (pagina - 1) * limite;

        // 4. Busca a página e o total
        const dados = await categoriaRepository.listar(skip, limite);
        const total = await categoriaRepository.contar();

        // 5. Monta a resposta
        return {
            dados,
            pagina,
            limite,
            total,
            totalPaginas: Math.ceil(total / limite)
        };
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