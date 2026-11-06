const itemRepository = require('../repositories/itemRepository');

class ItemService {
    async criarItem(dados) {
        if (!dados.nome) {
            throw new Error('O nome do item é obrigatório.');
        }
        if (dados.quantidade == null || dados.quantidade < 0) {
            throw new Error('A quantidade não pode ser negativa.');
        }
        return await itemRepository.criar(dados);
    }
    
    async listarItens() {
        return await itemRepository.listar();
    }
    
    async buscarItem(id) {
        const item = await itemRepository.buscarPorId(id);
        if (!item) {
            throw new Error('Item não encontrado.');
        }
        return item;
    }
    
    async atualizarItem(id, dados) {
        return await itemRepository.atualizar(id, dados);
    }
    
    async deletarItem(id) {
        return await itemRepository.deletar(id);
    }
}

module.exports = new ItemService();