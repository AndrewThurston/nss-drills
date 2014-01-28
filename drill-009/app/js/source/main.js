(function(){
  'use strict';

  $(document).ready(initialize);
  function initialize(){
    $('#addButton').click(clickAddOption);
  }

  var optionCount = 0;

  function clickAddOption(){
    var $option = $('#optionAdd').val();
    $('#optionAdd').val('');
    $('#optionAdd').focus();

    var $element = $('<option>');
    $element.text($option);
    $element.val(optionCount);
    $('#options').append($element);

    optionCount +=1;

  }

})();
