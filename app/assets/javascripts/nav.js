var keplerNav = {
  init: function() {
    keplerNav.config = {
      hamburger: $('.hamburger'),
      navContainer: $('.nav-container'),
      overlay: $('.overlay'),
      navOpenCallback: function() {
        constellation.parallax.disable();
      },
      navCloseCallback: function() {
        constellation.parallax.enable();
      }
    };
    keplerNav.setup();
  },

  setup: function() {
    keplerNav.config.hamburger.click(function() {
      keplerNav.toggleNav();
    });
    keplerNav.config.overlay.click(function() {
      keplerNav.closeNav();
    });
  },

  closeNav: function() {
    keplerNav.config.hamburger.removeClass('active');
    keplerNav.config.navContainer.removeClass('open');
    keplerNav.config.overlay.removeClass('active');
    keplerNav.config.navOpenCallback();
  },

  openNav: function() {
    keplerNav.config.hamburger.addClass('active');
    keplerNav.config.navContainer.addClass('open');
    keplerNav.config.overlay.addClass('active');
    keplerNav.config.navCloseCallback();
  },

  toggleNav: function() {
    if (keplerNav.config.navContainer.hasClass('open')) {
      keplerNav.closeNav();
    } else {
      keplerNav.openNav();
    }
  }
}

$(document).ready(function() {
  keplerNav.init();
});

// 'pjax:end' fires on back/forward browser button navigation
$(document).on('pjax:complete pjax:end', function() {
  keplerNav.closeNav();
});
