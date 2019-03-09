$(document).ready(function () {

  var $item = $('.slider__list-item');
  var $next = $('.slider__button-next');
  var $prev = $('.slider__button-prev');

  $item.first().addClass('active');

  $next.click(function() {
    var index = $item.filter('.active').index();

    if (index === $item.length - 1) {
        index = -1;
    }

    $item.eq(index + 1).addClass('active').siblings().removeClass('active');
  });

  $prev.click(function() {
    var index = $item.filter('.active').index();

    if (index === 0) {
        index = $item.length;
    }

    $item.eq(index - 1).addClass('active').siblings().removeClass('active');
  });
});

