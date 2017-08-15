$(document).on('turbolinks:load', function() {

  // hide cover image when user clicks splash image
  $('.cover #splash').click(function() {
    $('.cover').hide();
    $('.index').show();
  });

});
