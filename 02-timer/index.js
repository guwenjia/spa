var time =10;
var timeset = setInterval('Countdown()',1000);

function Countdown(){
  time --;
  if(time == 0){
    $('#timer').html('同意');
    $('#timer').removeAttr('disabled');
    clearInterval(timeset);
    $('#timer').click(function(){
      alert('我知道你会同意的！')
    });
  }else{
    $('#timer').html('同意('+time+')s');
  }
}
