(function () {
  'use strict';

  var i,
  initFn = [
    function scrollEvent() {
      var $sidebar = $('.ss-sidebar'),
      sidebarOffsetTop = 0;

      if ($sidebar.length) {
        sidebarOffsetTop = $sidebar.offset().top;
        $(window).on('scroll', function () {
          if ($(window).scrollTop() >= sidebarOffsetTop - 70) {
            $sidebar.addClass('ss-affix');
          } else {
            $sidebar.removeClass('ss-affix');
          }
        });
      }
    }
  ];

  for (i = 0; i < initFn.length; i++) {
    initFn[i]();
  }
})();
