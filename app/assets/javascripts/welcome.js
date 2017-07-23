// where the magic happens
var slideCoverUp =  _.once(function() {
  $('.cover').addClass('slideOutUp');
});

// bind to splash logo click
$(document).ready(function() {
  $("div#splash").click(function() {
     slideCoverUp();
  });
});

// bind to mouse scroll
var isFirefox = (/Firefox/i.test(navigator.userAgent));
var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, _.throttle(slideCoverUp, 60), false);

// bind to touchscreen scroll
window.addEventListener('touchmove', _.throttle(slideCoverUp, 60), false);
