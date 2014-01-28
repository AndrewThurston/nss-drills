(function(){
  'use strict';

  $(document).ready(initialize);
  function initialize(){
    $('#addButton').click(clickAddOption);
    $('#options').change(changeColor);
  }

  function clickAddOption(){
    var $option = $('#optionAdd').val();
    $('#optionAdd').val('');
    $('#optionAdd').focus();

    var $element = $('<option>');
    $element.text($option.toUpperCase());
    $element.val($option.toLowerCase());
    $('#options').append($element);

  }
  function changeColor(){
    var x = $('#options').val();
    $('#paint').css('background', x );
  }

})();
