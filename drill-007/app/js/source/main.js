(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addcolors').click(clickAddColors);
  }

  function clickAddColors(){
    var colors= $('#colors').val();
    colors = $colors.split(', ');
    for(var i = 0; i < colors.length; i++){
      var $div = $('<div>');
      $div.text(i+1);
      $div.css('background-color', colors[i]);
      $('#container'.append($div);
    }

      createSumColor(colors);
  }

  function createSumColor(colors){
    var sum = 0;
    for(var i =0; i < colors.length; i++){
      sum +=(i+1);
    }

    var rgb1 =Math.round(Math.random()*255);
    var rgb2 =Math.round(Math.random()*255);
    var rgb3 =Math.round(Math.random()*255);

    var random = 'rgb(' +rgb1 + ', ' + rgb2 + ', ' + rgb3 + ')';

    var $div = $('<div>');
    $div.text(sum);
    $div.css('background-color', random);
    $('#container').append($div);
  }

})();

