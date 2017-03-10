$(function(){
  //funçao ajax eliminar produto
  $('#tbl-produtos #btn_exlcuir').click(function(e){
    e.preventDefault();
    var elemento = $(this);
    var id = elemento.parent().parent().find('#id_produto').text();

    var confirmar = confirm('Deseja excluir o produto ?');

    if (confirmar) {
      $.ajax({
        url : '/excluirproduto',
        method : 'post',
        data: {id : id},
        success : function(res) {
          if(res.res) {
            elemento.parent().parent().remove();
          }
        }
      });
    }
  });
});
