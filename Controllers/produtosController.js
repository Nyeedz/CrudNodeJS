var mysql = require('mysql');
var dateFormat = require('dateFormat');
var config = require('.././Model/config');

// Produtos Controller
module.exports = {
  getProdutos: (req, res, next) => {

    var db = mysql.createConnection(config);
    db.connect();

    var produtos = null;

    db.query('SELECT * FROM produtos', (err, rows, fields) => {
      if(err) throw err;

      produtos = rows;
      db.end();

      res.render('produtos/produtos', {produtos : produtos});
    });
  },

  getNovoProduto: (req, res, next) => {
    res.render('produtos/novo');
  },

  postNovoProduto: (req, res, next) => {
    var dataAtual = new Date();
    var date = dateFormat(dataAtual, 'yyyy-mm-dd h:MM:ss');

    var produto = {
      nome : req.body.nome,
      preco : req.body.preco,
      estoque : req.body.estoque,
      data_criacao : date
    }

    var db = mysql.createConnection(config);
    db.connect();

    db.query('INSERT INTO produtos SET ?', produto, (err, rows, fields) => {
      if(err) throw err;

      db.end();
    });

    res.render('produtos/novo', {info: 'Produto criado corretamente !'});
  },

  excluirProduto: (req, res, next) => {
    var id = req.body.id;

    var db = mysql.createConnection(config);
    db.connect();

    var resposta = {res: false};
    db.query('DELETE FROM produtos WHERE id_produtos = ?', id, (err, rows, fields) => {
      if(err) throw err;

      db.end();
      resposta.res = true;

      res.json(resposta);
    });
  },

  getModificarProduto: (req, res, net) => {
    var id = req.params.id;

    var db = mysql.createConnection(config);
    db.connect();

    var produto = null;

    db.query('SELECT * FROM produtos WHERE id_produtos = ?', id, (err, rows, fields) => {
      if(err) throw err;

      produto = rows;

      db.end();

      res.render('produtos/editar', {produto: produto});
    })
  },

  postEditarProduto: (req, res, next) => {

    var produto = {
      nome : req.body.nome,
      preco : req.body.preco,
      estoque : req.body.estoque
    };

    var db = mysql.createConnection(config);
    db.connect();

    db.query('UPDATE produtos SET ? WHERE ?', [produto, {id_produtos: req.body.id_produtos}], (err, rows, fields) => {
      if(err) throw err;
      db.end();

      res.redirect('/produtos');
    });
  }
}
