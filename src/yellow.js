;(function(){

  $.fn.yellow = function(){
    return $(this).each(yellow)
  }

  function yellow(){
    var $slides = $(this);
    var slidesLen = $slides.find('.slide-pic li').length;
    if (slidesLen <= 0) return;

    var opHtml = '<ul class="slide-li op">'
    for (var i = 0; i < slidesLen; i++) {
      opHtml += '<li></li>';
    }
    opHtml += '</ul>';
    $slides.append(opHtml);

    var defaultOpts = { interval: 5000, fadeInTime: 300, fadeOutTime: 200 };
    var _titles = $slides.find('ul.op li');
    var _bodies = $slides.find('ul.slide-pic li');
    var _count = _titles.length;
    var _current = 0;
    var _intervalID = null;
    _titles.eq(0).addClass('cur');

    var stop = function () { window.clearInterval(_intervalID); };
    var slide = function (opts) {
      if (opts) {
        _current = opts.current || 0;
      } else {
        _current = (_current >= (_count - 1)) ? 0 : (++_current);
      };
      _bodies.filter(':visible').fadeOut(defaultOpts.fadeOutTime, function () {
        _bodies.eq(_current).fadeIn(defaultOpts.fadeInTime);
        _bodies.removeClass('cur').eq(_current).addClass('cur');
      });
      _titles.removeClass('cur').eq(_current).addClass('cur');
    };
    var go = function () {
      stop();
      _intervalID = window.setInterval(function () { slide(); }, defaultOpts.interval);
    };
    var itemMouseOver = function (target, items) {
      stop();
      var i = $.inArray(target, items);
      slide({ current: i });
    };
    _titles.hover(function () { if ($(this).attr('class') != 'cur') { itemMouseOver(this, _titles); } else { stop(); } }, go);
    _bodies.hover(stop, go);
    go();
  }

})();
