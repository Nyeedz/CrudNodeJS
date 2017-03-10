var mysql = require('mysql');

// Produtos Controller
module.exports = {
  getProdutos: (req, res, next) => {
    var config = require('.././database/config');
    var db = mysql.createConnection(config);

    db.connect();

    var produtos = null;

    db.query('SELECT * FROM produtos', function(err, rows, fields) {
      if(err) throw err;

      produtos = rows;
      db.end();

      res.render('produtos/produtos', {produtos : produtos});
    });
  }
}
