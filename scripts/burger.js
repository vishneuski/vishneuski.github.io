$(document).ready(function(){
  $('#burger').click(function(){
    $('.navigation').toggleClass('active');
    $('.burger-icon-item').toggleClass('rotate');
  })
});


// $(window).resize(function () {
//   $('.navigation.active').css('background', 'none');
// });
