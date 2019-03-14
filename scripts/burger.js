$(document).ready(function(){
  $('#burger').click(function(){
    $('.navigation').toggleClass('active');
    $('.burger-icon-item').toggleClass('rotate');
  });

  $(window).scroll(function () {
      if($(document).scrollTop() > 300){
        $('.navigation').removeClass('active');
        $('.burger-icon-item').removeClass('rotate');
      }
  });

  $(window).scroll(function () {
    if($(document).scrollTop() > 300) {
      $('.loft-header').addClass('sticky');
      $('.loft-logo').addClass('sticky');

    } else {
      $('.loft-header').removeClass('sticky');
      $('.loft-logo').removeClass('sticky');
    }
  });

  $(window).scroll(function () {
    if($(document).scrollTop() > 300) {
      $('.navigation-layout').addClass('sticky');
    } else {
      $('.navigation-layout').removeClass('sticky');
    }
  });
});


