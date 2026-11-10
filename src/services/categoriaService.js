const categoriaRepository = require('../repositories/categoriaRepository');

class CategoriaService {
    async criarCategoria(dados) {
        if (!dados.nome) {
            throw new Error('O nome da categoria é obrigatório.');
        }
        return await categoriaRepository.criar(dados);
    }

    async listarCategorias(page, limit, id, nome, data) {
        // . Valores padrão: se não vier nada na URL, usa página 1 e 10 por página
        const pagina = page === undefined ? 1 : Number(page);
        const limite = limit === undefined ? 10 : Number(limit);

        // . Validações (regras de negócio)
        if (!Number.isInteger(pagina) || pagina < 1) {
            throw new Error('O parâmetro page deve ser um número inteiro maior ou igual a 1.');
        }
        if (!Number.isInteger(limite) || limite < 1 || limite > 100) {
            throw new Error('O parâmetro limit deve ser um número inteiro entre 1 e 100.');
        }

        const filtros = {};

        // Regra do ID (Exato)
        if (id) {
            filtros._id = id;
        }

        // Regra do Nome (Busca parcial com Regex)
        if (nome) {
            filtros.nome = { $regex: nome, $options: 'i' };
        }

        // Regra da Data (Cria a janela de 24 horas para aquele dia)
        if (data) {
            const dataInicio = new Date(`${data}T00:00:00.000Z`);
            const dataFim = new Date(`${data}T23:59:59.999Z`);
            filtros.createdAt = { $gte: dataInicio, $lte: dataFim };
        }

        // . Conta de quantos documentos pular
        const skip = (pagina - 1) * limite;

        // . Busca a página e o total
        const dados = await categoriaRepository.listar(skip, limite, filtros);
        const total = await categoriaRepository.contar(filtros);

        // . Monta a resposta
        return {
            dados,
            pagina,
            limite,
            total,
            totalPaginas: Math.ceil(total / limite)
        };
    }

    async buscarPorId(id) {
    if (id.length !== 24) {
        throw new Error('Formato de ID inválido.');
    }

    //  Busca no repositório
    const categoria = await categoriaRepository.buscarPorId(id);

    // 3. Retorna a categoria (se não achar, vai retornar null e o Controller lida com o 404)
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