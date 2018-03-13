window.onload=function(){
	var img=document.getElementById("img");
	var pass=document.getElementById("password")
	img.onmouseover=function(){
		pass.type="text";
	};
	img.onmouseup=img.onmouseout=function(){
		pass.type="password";
	}
}