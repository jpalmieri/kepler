// removes the flash on click so the user doesn't see it when navigating back
// with browser button
$(document).on('pjax:click', function() {
  $('.flash').hide();
});
