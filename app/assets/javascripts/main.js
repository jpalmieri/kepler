$(document).ready(function() {
  constellation.initParallax($('#scene'));
  constellation.moveLinks($('.constellation-index').children(), $('.link-layer'));
});

// 'pjax:end' fires on back/forward browser button navigation
$(document).on('pjax:complete pjax:end', function() {
  constellation.moveLinks($('.constellation-index').children(), $('.link-layer'));
});

// removes the flash on click so the user doesn't see it when navigating back
// with browser button
$(document).on('pjax:click', function() {
  $('.flash').hide();
});
