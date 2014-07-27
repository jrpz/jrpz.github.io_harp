(function(){
  var window_height = window.innerHeight + 'px',
      aside = document.getElementsByTagName('aside');

  aside[0].setAttribute('style', 'min-height:' + window_height);
})();