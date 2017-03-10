$(function(){
  $('.ui.form').form({
    fields: {
      name: {
        identifier: 'nome',
        rules: [
          {
            type   : 'empty',
            prompt : 'Por favor, entre com o nome do produto.'
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
      }
    }
  });
});
