const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

router.post('/', (req, res) => itemController.criar(req, res));
router.get('/', (req, res) => itemController.listar(req, res));
router.get('/:id', (req, res) => itemController.buscar(req, res));
router.put('/:id', (req, res) => itemController.atualizar(req, res));
router.delete('/:id', (req, res) => itemController.deletar(req, res));

module.exports = router;