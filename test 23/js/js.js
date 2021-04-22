let move = document.documentElement;

move.addEventListener("mousemove", e => {
	move.style.setProperty("--span-one-y", e.clientY + "px");
});