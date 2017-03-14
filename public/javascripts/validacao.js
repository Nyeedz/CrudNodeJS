$(function(){
  $('.ui.form').form({
    fields: {
      nameproduto: {
        identifier: 'nomeproduto',
        rules: [
          {
            type   : 'empty',
            prompt : 'Por favor, entre com o nome do produto.'
          }
        ]
      },
      name: {
        identifier: 'nome',
        rules: [
          {
            type   : 'empty',
            prompt : 'Por favor, entre com seu nome.'
          }
        ]
      },
      preco : {
        identifier : 'preco',
        rules : [
          {
            type : 'empty',
            prompt : 'Por favor, entre com o preço do produto.'
          },
          {
            type : 'number',
            prompt : 'Campo preço deve ser do tipo numérico'
          }
        ]
      },
      estoque : {
        identifier : 'estoque',
        rules : [
          {
            type : 'empty',
            prompt : 'Por favor, entre com o número de estoque.'
          },
          {
            type : 'integer',
            prompt : 'Campo estoque deve ser do tipo numérico'
          }
        ]
      },
      email : {
        identifier : 'email',
        rules : [
          {
            type : 'empty',
            prompt : 'Por favor, entre com o seu email.'
          },
          {
            type   : 'email',
           prompt : 'Por favor, entre com um email valido'
          }
        ]
      },
      password : {
        identifier : 'password',
        rules : [
          {
            type : 'empty',
            prompt : 'Por favor, entre com o sua senha.'
          },
          {
            type : 'minLength[6]',
            prompt : 'Sua senha deve ter {ruleValue} caracteres'
          }
        ]
      },
      repeatpassword : {
        identifier  : 'repeatpassword',
        rules: [
          {
            type : 'empty',
            prompt : 'Por favor, repita sua senha.'
          },
          {
            type   : 'match[password]',
            prompt : 'Por favor, coloque senhas iguais nos dos campos.'
          }
        ]
      }
    }
  });
});
