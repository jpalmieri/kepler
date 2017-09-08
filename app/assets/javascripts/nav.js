var keplerNav = {
  init: function() {
    keplerNav.elements = {
      hamburger: $('.hamburger'),
      navContainer: $('.nav-container'),
      overlay: $('.overlay')
    };
    keplerNav.callbacks = {
      open: function() {
        constellation.disable();
      },
      close: function() {
        constellation.enable();
      }
    };
    keplerNav.setup();
  },

  setup: function() {
    keplerNav.elements.hamburger.click(function() {
      keplerNav.toggleNav();
    });
    keplerNav.elements.overlay.click(function() {
      keplerNav.closeNav();
    });
  },

  closeNav: function() {
    Object.values(keplerNav.elements).forEach(function($el) {
      $el.removeClass('active');
    });
    keplerNav.callbacks.close();
  },

  openNav: function() {
    Object.values(keplerNav.elements).forEach(function($el) {
      $el.addClass('active');
    });
    keplerNav.callbacks.open();
  },

  toggleNav: function() {
    if (keplerNav.elements.navContainer.hasClass('active')) {
      keplerNav.closeNav();
    } else {
      keplerNav.openNav();
    }
  }
};

$(document).ready(function() {
  keplerNav.init();
});

// 'pjax:end' fires on back/forward browser button navigation
$(document).on('pjax:complete pjax:end', function() {
  keplerNav.closeNav();
});
