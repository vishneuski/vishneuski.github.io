$(document).ready(function () {
  $('#burger').click(function () {
    $('.navigation').toggleClass('active');
    $('.burger-icon-item').toggleClass('rotate');
    $('.loader').toggleClass('unseen');
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 300) {
      $('.navigation').removeClass('active');
      $('.burger-icon-item').removeClass('rotate');
      $('.loft-header, .loft-logo, .navigation-layout').addClass('sticky');
    } else {
      $('.loft-header, .loft-logo, .navigation-layout').removeClass('sticky');
    }
  });
});