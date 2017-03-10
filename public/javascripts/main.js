$(document).ready(function(){
  var link = location.href.substring(location.href.lastIndexOf('/'));
    $('.item').removeClass('active');
    $('.item[href="'+ link +'"]').addClass('active');

    $('.right a').removeClass('active');
    $('.right a[href="'+ link +'"]').addClass('active');

    $('.message .close').click(function(){
      $(this).closest('.message').fadeOut();
    });
});
