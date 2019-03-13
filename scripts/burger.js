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

  // $(window).resize(function () {
  //   $('.navigation.active').css('background', 'none');
  // });
});


