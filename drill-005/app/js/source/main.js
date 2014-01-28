(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#addLis').click(clickAddLi);
  }

  function clickAddLi(){
    var number= $('#number').val() *1;
    for(var i = 1; i <= number; i++){
      var li = '<li>' + i + '</li>';
      $('#container').append(li);
    }
  }

})();
