$(document).ready(function () {

  var $item = $('.slider__list-item');
  var $next = $('.slider__button-next');
  var $prev = $('.slider__button-prev');
  var $show = $('.slider__button-slide-show');

  $item.first().addClass('visible');

  $next.click(function() {

    var index = $item.filter('.visible').index();

    if (index === $item.length - 1) {
        index = -1;
    }

    $item.eq(index + 1).addClass('visible').fadeIn().siblings().removeClass('visible').fadeOut();
  });

  $prev.click(function() {
    var index = $item.filter('.visible').index();

    if (index === 0) {
        index = $item.length;
    }

    $item.eq(index - 1).addClass('visible').fadeIn().siblings().removeClass('visible').fadeOut();
  });
  
  // $show.click(function () {
  //   setInterval(function () {
  //     $next.click()
  //   }, 2000)
  // })
});

