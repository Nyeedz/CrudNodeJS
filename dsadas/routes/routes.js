var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');

/* GET home page. */
router.get('/', controllers.homeController.index);
router.get('/produtos', controllers.produtosController.getProdutos);

module.exports = router;
