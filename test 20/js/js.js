var span = document.getElementById("span"),
	box = document.getElementById("box");
function move() {
	if (span.style.left === "10px") {
		span.style.left = "160px";
		document.body.style.backgroundColor = "#fff";
		box.style.backgroundColor = "#eee";
		box.style.border = "1px solid rgba(0,0,0,.1)";
		span.style.backgroundColor ="#DDD";
		span.style.boxShadow ="inset 0px 0px 4px rgb(0 0 0 / 30%)"
		
	}else{
		span.style.left = "10px";
		document.body.style.backgroundColor = "#141414";
		box.style.backgroundColor = "#0000007d";
		span.style.backgroundColor ="#151515";
		span.style.boxShadow ="inset 0px 0px 4px #DDD"
	}
}