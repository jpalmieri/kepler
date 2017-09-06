(function() {
  var closeNav = function() {
    $('.hamburger').removeClass('active');
    $('.nav-container').removeClass('open');
    $('.overlay').removeClass('active');
    constellation.parallax.enable();
  };

  var openNav = function() {
    $('.hamburger').addClass('active');
    $('.nav-container').addClass('open');
    $('.overlay').addClass('active');
    constellation.parallax.disable();
  };

  var toggleNav = function() {
    if ($('.nav-container').hasClass('open')) {
      closeNav();
    } else {
      openNav();
    }
  };

  window.closeNav = function() {
    closeNav();
  };

  window.openNav = function() {
    openNav();
  };

  window.toggleNav = function() {
    toggleNav();
  };
})();

$(document).ready(function() {
  $('.header .hamburger').click(function() {
    toggleNav();
  });

  $('.overlay').click(function() {
    closeNav();
  });
});

// 'pjax:end' fires on back/forward browser button navigation
$(document).on('pjax:complete pjax:end', function() {
  closeNav();
});
