// Set aside to full height of the window
var setAsideHeight = function() {
  var window_height = $(window).height() + 'px';
  $('aside').css('min-height', window_height);
};

// Do all the stuff on document ready
$(document).ready(function() {
  setAsideHeight();
});