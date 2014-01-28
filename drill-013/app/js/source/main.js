(function(){
  'use strict';

  $(document).ready(initialize);
  function initialize(){
    $('#button').click(clickButtonGo);
  }

  function clickButtonGo(){
    var alpha = $('#number').val() * 1;
    var $seed = $('#seed');

    for(var i = 0; i < alpha; i++){
      var $div = createDiv();
      $seed.wrap($div);
      $seed = $('#container > div');
    }
  }

  function createDiv(){
    var $div = $('<div>');
    var border = 1px solid' +randomColor();
    $div.css('border' ,border);
    
    return $div;
  }

  function randomColor(){
    var red=Math.round(Math.random()*255);
    var green=Math.round(Math.random()*255);
    var blue=Math.round(Math.random()*255);
    var alp = Math.random();

    return 'rgba('+red+','+green+','+blue+','+alp+')';
    }
  }

})();
