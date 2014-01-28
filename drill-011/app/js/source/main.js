(function(){
  'use strict';

  $(document).ready(initialize);
  function initialize(){
    $('#zipAdd').click(clickAddZip);
    $('#forGo').click(clickForGo);
  }

  function clickAddZip(){
    var option = $('#inputZip').val();
    $('#inputZip').val('');
    $('#inputZip').focus();

    var $element = $('<option>');
    $element.text(option);
    $element.val(option);
    $('#zipFold').append($element);
  }

  function clickForGo(){
    var zipCast = $('#zipFold').val();
    var url = 'http://api.wunderground.com/api/868877d8ba046eb1/forecast/EN/q/'+zipCast+'.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    console.log(data);
  }


})();
