var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');

/* Home Page. */
router.get('/', controllers.homeController.index);

/* Produtos Page. */
router.get('/produtos', controllers.produtosController.getProdutos);
router.get('/novo', controllers.produtosController.getNovoProduto);
router.post('/criarproduto', controllers.produtosController.postNovoProduto);
router.post('/excluirproduto', controllers.produtosController.excluirProduto);
router.get('/editarproduto/:id', controllers.produtosController.getModificarProduto);
router.post('/editar', controllers.produtosController.postEditarProduto);

module.exports = router;
