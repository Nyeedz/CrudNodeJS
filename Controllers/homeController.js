// Home Controller
module.exports = {
  index: (req, res, next) => {
    res.render('home', {title: 'Bem vindo ao crud com nodeJS'});
  }
}
