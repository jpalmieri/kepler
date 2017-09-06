(function() {
  var startParallax = function($sceneElement) {
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
    window.parallax = parallax;
  }

  window.startParallax = function($sceneElement) {
    startParallax($sceneElement);
  }
})();
