(function(){
  'use strict';

  function initialize(){
    $('#add-color').click(clickAddColor);
  }
  $(document).ready(initialize);

  function clickAddColor(){
    var color = $('#color-text').val();
    $('#color-text').val('');
    $('#color-text').focus();

    var $box = $('<div>');

    $box.addClass('color');
    $box.css('background-color', color);

    $('#colors').prepend($box);
  }
})();
