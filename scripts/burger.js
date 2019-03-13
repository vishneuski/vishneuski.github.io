$(document).ready(function(){
  $('#burger').click(function(){
    $('.navigation').toggleClass('active');
    $('.burger-icon-item').toggleClass('rotate');
  });

  $(window).scroll(function () {
      if($(document).scrollTop() > 100){
        $('.navigation').removeClass('active');
        $('.burger-icon-item').removeClass('rotate');
      }
  });

  $(window).scroll(function () {
    if($(document).scrollTop() > 100) {
      $('.loft-header').addClass('sticky');
      $('.loft-logo').addClass('sticky');

    } else {
      $('.loft-header').removeClass('sticky');
      $('.loft-logo').removeClass('sticky');
    }
  });
});


