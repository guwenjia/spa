$(function(){
 var  $range=$('#range');  
 var $age=$('#age');
  $age.html('0');

  $('#range').change(function(){
    $age.html($range.val());
  });

});
