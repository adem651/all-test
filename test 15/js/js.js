var box = document.getElementById('box'),
	boxTwo = document.getElementById('boxTwo');
function move() {
	if (box.style.display === "block") {
		boxTwo.style.display = "block";
		box.style.display = "none";
	} else {
		boxTwo.style.display = "none";
		box.style.display = "block";
	}
}