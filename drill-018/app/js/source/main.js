(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    $('#add').click(clickAddZip);
    $('#getCam').click(clickGetCam);
    $('#clear').click(clickClear);
  }

  function clickAddZip(){
    var zipCode = $('#zip').val();
    var $option = $('<option>');
    $option.text(zipCode);
    $option.val(zipCode);
    $('#selector').append($option);
  }

  function clickGetCam(){
    var zip = $('#selector').val();
    var url = 'http://api.wunderground.com/api/868877d8ba046eb1/webcams/q/'+zip+'.json?callback=?';
    $.getJSON(url, recieve);
  }

  function recieve(data){
    for(var i = 0; i < data.webcams.length; i++){
      var url = 'url(' + data.webcams[i].WIDGETCURRENTIMAGEURL+ ')';
      var neighbor = data.webcams[i].neighborhood;
      var $div = $('<div>');
      $div = $div.addClass('box');
      $div.css('background', url);
      $div.text(neighbor);
      $('#container').append($div);
    }
  }

  function clickClear(){
    $('#container').empty();
  }

})();
