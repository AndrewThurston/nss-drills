/* jshint camelcase:false */
(function(){
  'use strict';

  $(document).ready(initialize);
  function initialize(){
    $('#zipGrab').click(clickZipGrab);
  }

  function clickZipGrab(){
    var zip = $('#zipInput').val();
    var url ='http://api.wunderground.com/api/868877d8ba046eb1/satellite/q/'+zip+'.json?callback=?';
    $.getJSON(url, receive);
  }

  function receive(data){
    console.log(data);
    var apollo = data.satellite;
    var sat1 = apollo.image_url;
    $('#alpha').attr('src', sat1);
    var sat2 = apollo.image_url_ir4;
    $('#beta').attr('src', sat2);
    var sat3 = apollo.image_url_vis;
    $('#omega').attr('src', sat3);
    console.log(sat1);
  }

})();
