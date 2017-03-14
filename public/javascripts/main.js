$(document).ready(function() {
  var url = window.location.pathname;
    $('.item').removeClass('active');
    $('.item[href="'+ url +'"]').addClass('active');

    $('.message .close').click(function(){
      $(this).closest('.message').fadeOut();
    });

    if (url === '/novo' || url === '/' || url === '/auth/signup' || url === '/auth/signin') {
      $('.sair').remove();
    }

    $('.special.cards .image').dimmer({
      on: 'hover'
    });
});
