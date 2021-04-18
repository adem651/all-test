var username = document.getElementsByName("username"),
	name = document.getElementById("username"),
	cars = ["adem", "ferjani", "1S10"];
function username() {
	if (username.value === cars[cars.length]) {
		name.style.border = "1px solid green"
  	}
}
