// Set aside to full height of the window
var setAsideHeight = function() {
  var window_height = $(window).height() + 'px';
  $('aside').css('min-height', window_height);
};

// Instagram Backbone Module
var Gram = Backbone.Model.extend({
  initialize: function() {
    console.log('Gram Model initialized.');
  }
});

var Grams = Backbone.Collection.extend({
  model: Gram,
  url: 'https://api.instagram.com/v1/users/11919494/media/recent',
});

// Do all the stuff on document ready
$(document).ready(function() {
  setAsideHeight();
});