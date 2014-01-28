(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addImage').click(clickAddImage);
  }

  function clickAddImage(){
    var $image = $('#webphoto').val();
    var img = 'url(' +$image + ')';
    var $div = $('<div>');

    $div.css('background-image', img);
    $div.css('height', '100px');
    $div.css('width', '100px');
    $div.css('background-size', 'cover');
    $div.css('float', 'left');

    $('#container').append($div);

  }
})();
