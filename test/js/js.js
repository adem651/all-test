var box = document.getElementById("box");
function fun() {
	/*if (box.style.display == "block" ) {
		box.style.display = "none"
	} else {
		box.style.display = "block"
	}*/
	if (box.style.transform == "scale(0)") {
		box.style.transform = "scale(1)"
	} else {
		box.style.transform = "scale(0)"
	}
}

