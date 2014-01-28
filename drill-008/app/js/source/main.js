/* jshint camelcase:false */

(function(){
  'use strict';
  
  $(document).ready(init);
  function init(){
    $('#get-weather').click(clickGetWeather);
  }

  function clickGetWeather(){
    var url ='http://api.wunderground.com/api/868877d8ba046eb1/conditions/q/TN/Nashville.json?callback=?';
    $.getJSON(url, receive);
  }
  
  function receive(data){
    var windDis = data.current_observation.wind_string;
    $('#windDis').text('Aeolus states the wind is coming '+ windDis);

    var windDir = data.current_observation.wind_dir;
    $('#windDir').text('Aeolus states the wind is traveling '+ windDir);

    var windDeg = data.current_observation.wind_degrees;
    $('#windDeg').text('Aeolus states the wind comes at an angle of '+windDeg+' degrees');

    var windS = data.current_observation.wind_mph;
    $('#windS').text('Aeolus states the wind is travling at '+windS+' mph');

    var windG = data.current_observation.wind_gust_mph;
    $('#windG').text('Aeolus warns you of the gust being at '+windG+' mph');
  }

})();
