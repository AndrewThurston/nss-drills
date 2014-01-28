(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#alpha').click(makeTwoButtons);
    $('#beta').hide();
    $('#omega').hide();
    $('#beta').click(destroyAlpha);
    $('#omega').click(destroyBeta);
  }

  //function addButtons(){
    //for(var i=0, i<2; i++)
      //$input = input(type='button', value=i);
  //}

  function makeTwoButtons(){
    $('#beta').show();
    $('#omega').show();
  }

  function destroyAlpha(){
    $('#alpha').hide();
  }
  function destroyBeta(){
    $('#beta').hide();
  }


})();
