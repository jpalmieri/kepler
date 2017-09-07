var splash = {
  init: function() {
    splash.$el = $('.splash');
    splash.$cta = $('.splash #logo');

    splash.setup();
  },

  setup: function() {
    splash.$cta.click(function() {
      splash.slideUp();
    });

    splash.bindToScroll(function() {
      splash.slideUp();
    });
  },

  slideUp: function() {
    splash.$el.addClass('active');
  },

  bindToScroll: function(func) {
    // bind to mouse scroll
    var isFirefox = (/Firefox/i.test(navigator.userAgent));
    var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
    window.addEventListener(mousewheelEvent, _.throttle(function() {
      func();
    }, 60), false);
    // bind to touchscreen scroll
    window.addEventListener('touchmove', _.throttle(function() {
      func();
    }, 60), false);
  }
};

$(document).ready(function() {
  splash.init();
});
