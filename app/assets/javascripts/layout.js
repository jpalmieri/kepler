$(document).ready(function() {
  // parallax js magic
  var scene = $('#scene').get(0);
  // mobile User Agent detection
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
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
  moveLinksIntoConstellation($('.constellation-link-group'), $('.link-layer'));
});

// 'pjax:end' fires on back/forward browser button navigation
$(document).on('pjax:complete pjax:end', function() {
  moveLinksIntoConstellation($('.constellation-link-group'), $('.link-layer'));
});

// kind of a hack to move elements rendered via pjax into the parallax.js layers.
// since one pjax link can only be associated with updating one pjax container,
// and the parallax.js layers need to remain in the document,
// this seems like the best way to update the links in the parallax.js layers
// (by moving them into those layers after the pjax is done).
// I guess another option would be to try to add a multiple container feature
// to pjax...but I'm not trying to do that right now.
var moveLinksIntoConstellation = function($sourceContainers, $destinationContainers) {
  // clear the div of any previous links
  $destinationContainers.each(function(i, el) { $(el).empty(); });
  $sourceContainers.each(function(i, linkGroup) {
    var $destination = $('.' + $(linkGroup).data('destination'));
    $(linkGroup).children().each(function(i, link) {
      // copy them to the new div instead of moving them
      $(link).clone().appendTo($destination);
    });
  });
};
