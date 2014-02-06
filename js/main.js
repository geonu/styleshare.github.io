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
    },

    function contentMinHeight() {
      var windowHeight = $(window).height(),
      $contentBody = $('.body-bg-color'),
      contentBodyOffsetTop = $contentBody.offset().top,
      minHeight = windowHeight - contentBodyOffsetTop - 50;

      $contentBody.css('min-height', minHeight < 0 ? 0 : minHeight);
    },

    function attachMobileNaveEvent() {
      var re = new RegExp("MSIE");

      if (re.test(navigator.userAgent)) { return false; }

      $('.ss-mobile-nav button').on('click', function (event) {
        var $button = $(event.currentTarget),
        $targetEl = $($button.data('target-id'));

        $targetEl.siblings().each(function (i, el) {
          $(el).addClass('ss-disappear');
        });
        $targetEl.toggleClass('ss-disappear');
      });
    }
  ];

  for (i = 0; i < initFn.length; i++) {
    initFn[i]();
  }
})();
