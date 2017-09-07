var bindToScroll = function(func) {
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
};

$(document).ready(function() {
  // Slide splash screen up
  var slideSplash = function() {
    $('.splash').addClass('active');
  };

  $('.splash #logo').click(function() {
    slideSplash();
  });

  bindToScroll(function() {
    slideSplash();
  });
});
