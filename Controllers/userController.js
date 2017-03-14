var mysql = require('mysql');
var bcrypt = require('bcryptjs');
var config = require('.././Model/config');

module.exports = {
  getSignUp: (req, res, next) => {
    return res.render('users/signup');
  },

  postSignUp: (req, res, next) => {
    var salt = bcrypt.genSaltSync(12);
    var password = bcrypt.hashSync(req.body.password, salt);

    var user = {
      nome : req.body.nome,
      email : req.body.email,
      password : password
    };

    var db = mysql.createConnection(config);

    db.connect();

    db.query('INSERT INTO users SET ?', user, (err, rows, fields) => {
      if(err) throw err;

      db.end();
    });

    return res.redirect('/auth/signin');
  },

  getSignIn: (req, res, next) => {
    return res.render('users/signin');
  }
}
