var Parallax = require('./vendor/parallax.min.js');
import Pjax from "pjax";

var kepler = kepler || {};
var kepler = {
  init: function() {
    this.coverInit();
    this.navInit();
    this.parallaxInit();
  },
  coverInit: function() {
    // hide cover image when user clicks splash image
    $('.cover #splash').click(function() {
      $('.cover').hide();
      $('.index').show();
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
  },
  navInit: function() {
    // Hamburger nav function
    $('.header .hamburger').click(function(e) {
      e.preventDefault();
      if ($('.nav-container').hasClass('open')) {
        kepler.closeNav();
      } else {
        $('.hamburger').addClass('active');
        $('.nav-container').addClass('open');
        $('.overlay').addClass('active');
        kepler.parallax.disable();
      }
    });
    $('.overlay').click(function() {
      kepler.closeNav();
    });
  },
  closeNav: function() {
    $('.hamburger').removeClass('active');
    $('.nav-container').removeClass('open');
    $('.overlay').removeClass('active');
    kepler.parallax.enable();
  },
  parallaxInit: function() {
    // parallax js magic
    var scene = $('#scene').get(0);
    // mobile User Agent detection
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      // instatiate without inverting x and y axes
      // I like this better on mobile
      this.parallax = new Parallax(scene, {
        invertX: false,
        invertY: false
      });
    } else {
      // instatiate as default (x and y inverted)
      this.parallax = new Parallax(scene);
    }
  }
}

$(document).ready(function() {
  kepler.init();
  // this tells pjax what links to fire on
  var pjax = new Pjax({ selectors: ["title", ".js-Pjax"] });
  document.addEventListener("pjax:success", kepler.closeNav);
});
