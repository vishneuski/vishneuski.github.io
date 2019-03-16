$(document).ready(function () {
  $('#burger').click(function () {
    $('.navigation').toggleClass('active');
    $('.burger-icon-item').toggleClass('rotate');
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 300) {
      $('.navigation').removeClass('active');
      $('.burger-icon-item').removeClass('rotate');
    }
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 300) {
      $('.loft-header, .loft-logo, .navigation-layout').addClass('sticky');

    } else {
      $('.loft-header, .loft-logo, .navigation-layout').removeClass('sticky');
    }
  });
});




