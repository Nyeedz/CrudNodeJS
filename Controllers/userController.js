var mysql = require('mysql');
var bcrypt = require('bcryptjs');
var config = require('.././Model/config');

module.exports = {
  login: (email, password, callback) => {
    var connection = mysql({
      config
    });

    connection.connect();

    var query = "SELECT id, nickname, email, password FROM users WHERE email = ?";

    connection.query(query, [email], function (err, results) {
      if (err) return callback(err);
      if (results.length === 0) return callback(new WrongUsernameOrPasswordError(email));
      var user = results[0];

      bcrypt.compare(password, user.password, function (err, isValid) {
        if (err) {
          callback(err);
        } else if (!isValid) {
          callback(new WrongUsernameOrPasswordError(email));
        } else {
          callback(null, {
            id: user.id.toString(),
            nickname: user.nickname,
            email: user.email
          });
        }
      });
    });
  },

  create: (user, callback) => {
    var connection = mysql({
      config
    });

    connection.connect();

    var query = "INSERT INTO users SET ?";

    bcrypt.hash(user.password, 10, function (err, hash) {
      if (err) { return callback(err); }
      var insert = {
        password: hash,
        email: user.email
      };
      connection.query(query, insert, function (err, results) {
        if (err) return callback(err);
        if (results.length === 0) return callback();
        callback(null);
      });
    });
  }
}
