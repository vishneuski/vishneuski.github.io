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

  $(window).scroll(function () {
    if($(document).scrollTop() > 100) {
      $('.navigation-layout').addClass('sticky');
      $('.burger-icon-item, .navigation__link').addClass('recolored');
    } else {
      $('.navigation-layout').removeClass('sticky');
      $('.burger-icon-item, .navigation__link').removeClass('recolored');
    }
  });
});


