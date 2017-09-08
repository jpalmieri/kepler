var constellation = {
  init: function(settings) {
    constellation.config = {
      $scene: $('#scene').get(0),
      $links: $('.constellation-index').children(),
      $destinationContainers: $('.link-layer'),
      mobileRegex: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    };
    // Allow overriding the default config
    $.extend(constellation.config, settings);

    constellation.setup();
  },

  refreshSelectors: function() {
    constellation.config.$links = $('.constellation-index').children();
    constellation.config.$destinationContainers = $('.link-layer');
  },

  setup: function() {
    if(constellation.isMobile()) {
      // instatiate without inverting x and y axes
      // I like this better on mobile
      constellation.parallax = new Parallax(constellation.config.$scene, {
        invertX: false,
        invertY: false
      });
    } else {
      // instatiate as default (x and y inverted)
      constellation.parallax = new Parallax(constellation.config.$scene);
    }
    constellation.moveLinksIntoConstellation();
  },

  isMobile: function() {
    constellation.config.mobileRegex.test(navigator.userAgent);
  },

  disable: function() {
    constellation.parallax.disable();
  },

  enable: function() {
    constellation.parallax.enable();
  },

  // kind of a hack to move elements rendered via pjax into the parallax.js layers.
  // since one pjax link can only be associated with updating one pjax container,
  // and the parallax.js layers need to remain in the document,
  // this seems like the best way to update the links in the parallax.js layers
  // (by moving them into those layers after the pjax is done).
  // I guess another option would be to try to add a multiple container feature
  // to pjax...but I'm not trying to do that right now.
  moveLinksIntoConstellation: function(options = {}) {
    if (options.refreshSelectors) { constellation.refreshSelectors(); }
    // clear the div of any previous links
    constellation.config.$destinationContainers.each(function(i, el) { $(el).empty(); });
    constellation.config.$links.each(function(i, link) {
      var $destination = $(link).data('destination');
      // copy them to the new div instead of moving them
      $(link).clone().appendTo('.' + $destination);
    });
  }
};

$(document).ready(function() {
  constellation.init();
});

// 'pjax:end' fires on back/forward browser button navigation
$(document).on('pjax:complete pjax:end', function() {
  constellation.moveLinksIntoConstellation({ refreshSelectors: true });
});
