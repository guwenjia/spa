$(function(){
  
    $("#width").blur(function(){
       if($("#with").val()===""){
         $("#one").html("<br/>输入不能为空！");
         $("#one").css("color","red");
         $("#one").css("font-size","12px");

       }else{
         $("#one").html("");
       }
       
    });
$("#height").blur(function(){
       if($("#height").val()==""){

         $("#two").html("<br/>输入不能为空！");
         $("#two").css("color","red");  
          $("#two").css("font-size","12px");

       }else{
         $("#two").html("");
       } 
    });

  $("#perimeter").attr("disabled","false").css("background","#E0E0E0");
  $("#area").attr("disabled","false").css("background","#E0E0E0")
  $("#btn").click(function(){
     var w = $("#width").val();
     var h = $("#height").val();
     $("#perimeter").val(w*2+h*2);
     $("#area").val(w*h);


  });
});
