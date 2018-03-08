window.onload=function(){
  var width=document.getElementById('width');
  width.focus();

};

function calc(){
  var width=document.getElementById('width').value;
  var height=document.getElementById('height').value;
  document.getElementById('perimeter').value=2*parseInt(width)+2*parseInt(height);
  document.getElementById('area').value=width*height;
};
