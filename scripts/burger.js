$(document).ready(function(){
  $('#burger').click(function(){
    $('.navigation').toggleClass('active');
    $('.burger-icon-item').toggleClass('rotate');
  })
});
