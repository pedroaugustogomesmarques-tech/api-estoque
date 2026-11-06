const itemService = require('../services/itemService');

class ItemController {
    async criar(req, res) {
        try {
            const item = await itemService.criarItem(req.body);
            return res.status(201).json(item);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }
    
    async listar(req, res) {
        try {
            const itens = await itemService.listarItens();
            return res.status(200).json(itens);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }
    
    async buscar(req, res) {
        try {
            const item = await itemService.buscarItem(req.params.id);
            return res.status(200).json(item);
        } catch (error) {
            return res.status(404).json({ erro: error.message });
        }
    }
    
    async atualizar(req, res) {
        try {
            const item = await itemService.atualizarItem(req.params.id, req.body);
            return res.status(200).json(item);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }
    
    async deletar(req, res) {
        try {
            await itemService.deletarItem(req.params.id);
            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }
}

module.exports = new ItemController();