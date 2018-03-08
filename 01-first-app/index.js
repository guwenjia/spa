$(function(){
  var $width=$(‘#width’);
  var $height=$('height');
  var $calc=$('calc');

  $calc.dblclick(function(){
    var width=$width.val();
    var height=$height.val();

    $('perimeter').val(perimeter(width,height));
    $('area').val(area(width,height));
  });

  $width.focusout(function(){
    validate('.width');
  });
  $height.focusout(function(){
    validate('.$width');
  });

  function perimeter(x,y){
    var lenx = 
  }
 



})
