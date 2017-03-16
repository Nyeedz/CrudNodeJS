$(document).ready(function() {
  var url = window.location.pathname;
  $('.item').removeClass('active');
  $('.item[href="'+ url +'"]').addClass('active');

  $('.message .close').click(function(){
    $(this).closest('.message').fadeOut();
  });

  if (url === '/novo' || url === '/' || url === '/auth/signup' || url === '/auth/signin' || url === '/editarproduto/:id') {
    $('.sair').remove();
  }

// Cards
  $('.special.cards .image').dimmer({
    on: 'hover'
  });

  $('.ui.card .image').dimmer({on: 'hover'});
  $('.ui.rating').rating({maxRating: 5});
  $('.ui.button').popup();

  $('.button.view').on('click', (function() {
    $('#album').fadeOut("slow", function () {
      $('#album_items').fadeIn("slow");
    });
  }));

  $('.button.back').on('click', (function() {
    $('#album_items').fadeOut("slow", function () {
      $('#album').fadeIn("slow");
    });
  }));
});
