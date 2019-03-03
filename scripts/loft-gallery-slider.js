$(document).ready(function () {

  //Create variables

  var $item = $('.slider__list-item');
  var $next = $('.slider-button-next');
  var $prev = $('.slider-button-prev');
  var index;

  //Add class .active to first $item.
  $item.first().addClass('active');

  //Add click event to button NEXT

  $next.click(function () {
    index = $item.filter('.active').index();

  //Check index. Do loop.

    if(index == $item.length - 1){
      index = -1;
    }
    $item.eq(index + 1).addClass('active').siblings().removeClass('active');
  });

  $prev.click(function () {
    var index = $item.filter('.active').index();

    if(index == 0) {
      index = $item.length;
    }

    $item.eq(index - 1).addClass('active').siblings().removeClass('active');
  })
});