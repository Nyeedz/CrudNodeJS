var express = require('express');
var passport = require('passport');
var router = express.Router();
var controllers = require('.././controllers');

var env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL || 'http://localhosto:3000/callback'
};

/* Home Page. */
router.get('/', controllers.homeController.index);

/* User Page */
// Render the login template
router.get('/login', (req, res) => {
    res.render('users/login', { env: env });
  });

// Perform session logout and redirect to homepage
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Perform the final stage of authentication and redirect to '/user'
router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }), (req, res) => {
    res.redirect(req.session.returnTo || '/user');
  });

/* Produtos Page. */
router.get('/produtos', controllers.produtosController.getProdutos);
router.get('/novo', controllers.produtosController.getNovoProduto);
router.post('/criarproduto', controllers.produtosController.postNovoProduto);
router.post('/excluirproduto', controllers.produtosController.excluirProduto);
router.get('/editarproduto/:id', controllers.produtosController.getModificarProduto);
router.post('/editar', controllers.produtosController.postEditarProduto);

module.exports = router;
