/* jshint camelcase:false */
(function(){
  'use strict';

  $(document).ready(initialize);
  function initialize(){
    $('#zipAdd').click(clickAddZip);
    $('#zipPush').click(clickZipUp);
  }
  function clickAddZip(){
    var alpha = $('#zipInput').val();
    $('#zipInput').val('');
    $('#zipInput').focus();

    var $element = $('<option>');
    $element.text(alpha);
    $element.val(alpha);
    $('#zipFolder').append($element);
  }

  function clickZipUp(){
    var zip = $('#zipFolder').val();
    var url = 'http://api.wunderground.com/api/868877d8ba046eb1/forecast/EN/q/'+zip+'.json?callback=?';
    $.getJSON( url, recieve);
  }

  function recieve(data){
    console.log(data);

    var $box= $('.weather');

    for(var i=0; i<data.forecast.simpleforecast.forecastday.length; i++){
      var day= data.forecast.simpleforecast.forecastday[i].date.weekday;
      var conditions= data.forecast.simpleforecast.forecastday[i].conditions;
      var icon = data.forecast.simpleforecast.forecastday[i].icon_url;

      $($box[i]).find('h1').text(day);
      $($box[i]).find('h1').text(conditions);
      $($box[i]).find('h1').attr('src', icon);
    }
  }

})();
