const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

router.post('/', (req, res) => categoriaController.criar(req, res));
router.get('/', (req, res) => categoriaController.listar(req, res));
router.get('/:id', (req, res) => categoriaController.buscarPorId(req, res));
router.put('/:id', (req, res) => categoriaController.atualizar(req, res));
router.delete('/:id', (req, res) => categoriaController.deletar(req, res));

module.exports = router;