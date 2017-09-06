$(document).ready(function() {
  constellation.initParallax($('#scene'));
  constellation.moveLinks($('.constellation-index').children(), $('.link-layer'));

  // Hamburger nav function
  $('.header .hamburger').click(function(e) {
    e.preventDefault();
    if ($('.nav-container').hasClass('open')) {
      closeNav();
    } else {
      $('.hamburger').addClass('active');
      $('.nav-container').addClass('open');
      $('.overlay').addClass('active');
      constellation.parallax.disable();
    }
  });
  $('.overlay').click(function() {
    closeNav();
  });
  var closeNav = function() {
    $('.hamburger').removeClass('active');
    $('.nav-container').removeClass('open');
    $('.overlay').removeClass('active');
    constellation.parallax.enable();
  };

  // 'pjax:end' fires on back/forward browser button navigation
  $(document).on('pjax:complete pjax:end', function() {
    closeNav();
    constellation.moveLinks($('.constellation-index').children(), $('.link-layer'));
  });

  // removes the flash on click so the user doesn't see it when navigating back
  // with browser button
  $(document).on('pjax:click', function() {
    $('.flash').hide();
  });

  $('.splash #logo').click(function() {
    slideSplash();
  });

  // Slide splash screen up
  var slideSplash = function() {
    $('.splash').addClass('active');
  };

  // bind to mouse scroll
  var isFirefox = (/Firefox/i.test(navigator.userAgent));
  var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
  window.addEventListener(mousewheelEvent, _.throttle(slideSplash, 60), false);
  // bind to touchscreen scroll
  window.addEventListener('touchmove', _.throttle(slideSplash, 60), false);
});
