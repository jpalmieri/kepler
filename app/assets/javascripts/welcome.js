var slideCoverUp = function() {
  // Preventing default action of the event
  event.preventDefault();
  // Getting the height of the document
  var n = $(document).height();
  $('html, body').animate({ scrollTop: n }, 1000, 'swing');
};

var bioViewHack = function() {
  // disable scrolling up to show the cover
  // as this will interfere with scrolling through the bio content
  $('.cover').hide();
  $('.container').css('height','100vh');
}

var hideMainContent = function() {
  $('.bio-item').hide();
  $('.main-content').hide();
};


var disableBioViewHack = function() {
  // the below settings are what they should be in views other than bio
  // the bio view disables them so that the user can't scroll up to show the cover

  // make container height twice viewport height (this is the default)
  $('.container').css('height','200vh');
  //scroll to bottom of page (so cover is above viewport)
  $(window).scrollTop($(document).height());
  $('.cover').show();
};

var showButtonGroup = function(e) {
  var clickTarget = e.target;
  var targetButtonGroup = $(clickTarget).data('target');
  $('.' + targetButtonGroup + '-links').show();
  $('.category-link').hide();
};

var toggleBio = function(e) {
  var clickTarget = e.target;
  var targetBio = $(clickTarget).data('target');
  $('.group-links').hide();
  $('#' + targetBio).show();
  $('.main-content').show();
  bioViewHack();
};

// function to show and hide main nav buttons
var backToNav = function() {
  $.each(['.team-links', '.music-links', '.performance-links'], function(i, links) {
    $(links).hide();
  });
  hideMainContent();
  $('.category-link').show();
};

$(document).ready(function() {
  $('.header .hamburger').click(function(e) {
    e.preventDefault();
    if ($('.nav-container').hasClass('open')) {
      closeNav();
    } else {
      $('.hamburger').addClass('active');
      $('.nav-container').addClass('open');
      $('.overlay').addClass('active');
      parallax.disable();
    }
  });
  $('.overlay').click(function() {
    closeNav();
  });

  var closeNav = function() {
    $('.hamburger').removeClass('active');
    $('.nav-container').removeClass('open');
    $('.overlay').removeClass('active');
    parallax.enable();
  };

  var slideCoverDown = function() {
    event.preventDefault();
    disableBioViewHack();
    closeNav();
    $('html, body').animate({ scrollTop: 0 }, 1000, 'swing', function(){
      backToNav();
    });
  };

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
  $('.group-back-button').click(function() {
    backToNav();
  });
  $('.home-link').click(function() {
    backToNav();
    closeNav();
  });

  $('.bio-back-button').click(function(e) {
    var clickTarget = e.target;
    var targetGroup = $(clickTarget).data('target');
    $('.group-links').hide();
    $('.' + targetGroup + '-links').show();
    disableBioViewHack();
    hideMainContent();
  });

  // clicking logo goes back to cover and resets the view below
  $('.header .logo').click(function() {
    slideCoverDown();
  })

  // toggle slide bios
  $('.bio-link').click(function(e) {
    toggleBio(e);
  });
});
