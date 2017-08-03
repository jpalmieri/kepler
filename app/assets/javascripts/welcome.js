var slideCoverUp = function() {
  // Preventing default action of the event
  event.preventDefault();
  // Getting the height of the document
  var n = $(document).height();
  $('html, body').animate({ scrollTop: n }, 1000, 'swing');
};

var slideCoverDown = function() {
  // Preventing default action of the event
  event.preventDefault();
  // Getting the height of the document
  var n = $(document).height();
  $('html, body').animate({ scrollTop: 0 }, 1000, 'swing', function(){
    backToNav();
  });
};

var showButtonGroup = function(e) {
  var clickTarget = e.target;
  var targetButtonGroup = $(clickTarget).data('target');
  $('#' + targetButtonGroup).show();
  $('.category-layer').hide();
  $('.main-content').show();
};

var toggleBio = function(e) {
  var clickTarget = e.target;
  var targetBio = $(clickTarget).data('target');
  $('#' + targetBio).slideToggle();
};

// function to show and hide main nav buttons
var backToNav = function() {
  $.each(['.team-view', '.music-view', '.performance-view'], function(view) {
    $(view).hide();
  });
  $('.category-layer').show();
  $('.main-content').hide();
};

$(document).ready(function() {
  // bind to splash logo click
  $("div#splash").click(function() {
    slideCoverUp();
  });

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

  // temporary action to show body content
  $('.category-link').click(function(e) {
    showButtonGroup(e);
  });

  // back to main nav area
  $('.back-button').click(function() {
    backToNav();
  });

  // clicking logo goes back to cover and resets the view below
  $('.header .logo').click(function() {
    slideCoverDown();
  })

  // toggle slide bios
  $('.bio-button').click(function(e) {
    toggleBio(e);
  });
});
