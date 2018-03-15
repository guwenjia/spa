$(function(){
  $("form").submit(function(){
        event.preventDefault();
  });
  $('#width').blur(function(){
    $('#imgone').html('<img src="https://raw.githubusercontent.com/shichenxiao/spa/master/06-check/04-h5check/error.png">');
    var reg = /^\d+(\.{0,1}\d+){0,1}$/;
    if(!reg.test($('#width').val())){
    $('#imgone').html('<img src="https://raw.githubusercontent.com/shichenxiao/spa/master/06-check/04-h5check/error.png">');
    }else{
    $('#imgone').html('<img src="https://raw.githubusercontent.com/shichenxiao/spa/master/06-check/04-h5check/yes.png">');
    }
    
});
  $('#height').blur(function(){
    var reg = /^\d+(\.{0,1}\d+){0,1}$/;
  if(!reg.test($('#height').val())){
    $('#imgtwo').html('<img src="https://raw.githubusercontent.com/shichenxiao/spa/master/06-check/04-h5check/error.png">');
    $('#imgtwo').html('<img src="https://raw.githubusercontent.com/shichenxiao/spa/master/06-check/04-h5check/error.png">');
    }else{
    $('#imgtwo').html('<img src="https://raw.githubusercontent.com/shichenxiao/spa/master/06-check/04-h5check/yes.png">');
    }
  });
  $("#add").attr("disabled","false").css("background","#E0E0E0");
  $("#mutiply").attr("disabled","false").css("background","#E0E0E0")
  $("#btn").click(function(){
     var w = $("#width").val();
     var h = $("#height").val();
     $("#add").val(w*2+h*2);
     $("#mutiply").val(w*h);
  });
});
