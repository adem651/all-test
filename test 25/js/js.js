var box = document.getElementById("box"),
	span = [document.getElementById("spanOne"),document.getElementById("spanTwo"),document.getElementById("spanThree")] 

function move() {
	if (box.style.transform === "translate(-100%)") {
		box.style.transform = "translate(0)";
		span[0].style.background = "#141414";
		span[1].style.display = "none";
		span[2].style.background = "#141414";
		span[0].style.transform = "translateY(11.4px) rotate(130deg)";
		span[2].style.transform = "rotate(-130deg)";
	} else {
		box.style.transform = "translate(-100%)";
		span[0].style.background = "#eee";
		span[1].style.display = "block";
		span[2].style.background ="#eee";
		span[0].style.transform = "translateY(0px) rotate(0deg)";
		span[2].style.transform = "rotate(0deg)";
	}
}