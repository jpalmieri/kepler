var splash = {
  init: function() {
    splash.$document = $(document);
    splash.$el = $('.splash');
    splash.$cta = $('.splash #logo');

    splash.setup();
  },

  setup: function() {
    splash.setupCustomScrollEvent();

    splash.$cta.click(function() {
      splash.slideUp();
    });

    splash.$document.on('scroll.splash', splash.handleScroll);
  },

  slideUp: function() {
    splash.$el.addClass('active');
    splash.$document.off('scroll.splash', splash.handleScroll);
  },

  handleScroll: function() {
    _.throttle(function() {
      splash.slideUp();
    }, 60)();
  },

  // capture various device scroll events under one custom jQuery event
  setupCustomScrollEvent: function() {
    // mouse scroll event
    var isFirefox = (/Firefox/i.test(navigator.userAgent));
    var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
    window.addEventListener(mousewheelEvent, function() {
      splash.$document.trigger("scroll.splash");
    }, false);
    // touchscreen scroll event
    window.addEventListener('touchmove', function() {
      splash.$document.trigger("scroll.splash");
    }, false);
  }
};

$(document).ready(function() {
  splash.init();
});
