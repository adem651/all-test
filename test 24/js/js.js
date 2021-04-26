$(document).ready(function(){
	$("#button").onclick(function(){
		if (this.css === ("left,-9%")) {
			$(this).css("left","40%");
		}else{
			$(this).css("left","-9%")
		}
	});
	
});
