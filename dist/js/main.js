$(document).ready(function() {
 
  $('.header-burger').click(function(e) {
    $('.header-burger, .header-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  
});

