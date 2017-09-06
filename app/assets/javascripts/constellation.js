var constellation = constellation || {};
this.constellation = constellation;

(function() {
  var initParallax = function($sceneElement) {
    // parallax js magic
    var scene = $sceneElement.get(0);
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if(isMobile) {
      // instatiate without inverting x and y axes
      // I like this better on mobile
      var parallax = new Parallax(scene, {
        invertX: false,
        invertY: false
      });
    } else {
      // instatiate as default (x and y inverted)
      var parallax = new Parallax(scene);
    }
    constellation.parallax = parallax;
  }

  constellation.initParallax = function($sceneElement) {
    initParallax($sceneElement);
  }

  // kind of a hack to move elements rendered via pjax into the parallax.js layers.
  // since one pjax link can only be associated with updating one pjax container,
  // and the parallax.js layers need to remain in the document,
  // this seems like the best way to update the links in the parallax.js layers
  // (by moving them into those layers after the pjax is done).
  // I guess another option would be to try to add a multiple container feature
  // to pjax...but I'm not trying to do that right now.
  var moveLinks = function($links, $destinationContainers) {
    // clear the div of any previous links
    $destinationContainers.each(function(i, el) { $(el).empty(); });
    $links.each(function(i, link) {
      var $destination = $(link).data('destination');
      // copy them to the new div instead of moving them
      $(link).clone().appendTo('.' + $destination);
    });
  };

  constellation.moveLinks = function($links, $destinationContainers) {
    moveLinks($links, $destinationContainers);
  };
})();

$(document).ready(function() {
  constellation.initParallax($('#scene'));
  constellation.moveLinks($('.constellation-index').children(), $('.link-layer'));
});

// 'pjax:end' fires on back/forward browser button navigation
$(document).on('pjax:complete pjax:end', function() {
  constellation.moveLinks($('.constellation-index').children(), $('.link-layer'));
});
