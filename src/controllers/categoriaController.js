const categoriaService = require('../services/categoriaService');

class CategoriaController {
    async criar(req, res) {
        try {
            // Repassa os dados recebidos (req.body) para o Service
            const categoria = await categoriaService.criarCategoria(req.body);
            // Retorna 201 (Created) e os dados salvos
            return res.status(201).json(categoria);
        } catch (error) {
            // Se o Service barrar alguma regra, cai aqui e retorna 400 (Bad Request)
            return res.status(400).json({ erro: error.message });
        }
    }
    
    async listar(req, res) {
        try {
            const categorias = await categoriaService.listarCategorias();
            return res.status(200).json(categorias);
        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }
    
    async buscar(req, res) {
        try {
            const categoria = await categoriaService.buscarCategoria(req.params.id);
            return res.status(200).json(categoria);
        } catch (error) {
            return res.status(404).json({ erro: error.message }); // 404 (Not Found)
        }
    }
    
    async atualizar(req, res) {
        try {
            const categoria = await categoriaService.atualizarCategoria(req.params.id, req.body);
            return res.status(200).json(categoria);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }
    
    async deletar(req, res) {
        try {
            await categoriaService.deletarCategoria(req.params.id);
            return res.status(204).send(); // 204 (No Content - sucesso sem nada para mostrar)
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }
}

module.exports = new CategoriaController();