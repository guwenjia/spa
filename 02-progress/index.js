var run;
function begin(){
	var pg=document.getElementById('pg');
	 run=setInterval(function(e){
	      if(pg.value!=100) pg.value++;
	      else pg.value=0;
	},100);
}

function reset(){
  var pg=document.getElementById('pg');
  pg.value = 0;
  run=setInterval(function(e){
   pg.value++;
  },100);
}

function end(){
	var pg= document.getElementById('pg');
  	var stop = (pg.value-100)>0?run-100:0;
    for(var i = stop;i<=run;i++){
  		clearInterval(i); 
	}
  
}
