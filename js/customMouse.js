// Init
const trailer = document.createElement("div");
trailer.id = "trailer";
document.body.append(trailer);

// Follow mouse
function followMice(e) {

	let scale = 1;
	if (e.target.dataset.interactif == "true" || (e.target.ParentNode && e.target.ParentNode.dataset.interactif == "true")) {
		scale = 2;
	}

	const x = e.clientX - trailer.offsetWidth / 2,
		y = e.clientY - trailer.offsetHeight / 2;

	const keyframes = {
		transform: `translate(${x}px, ${y}px) scale(${scale})`
	}

	trailer.animate(keyframes, {
		duration: 800,
		fill: "forwards"
	});
}
window.onmousemove = e => followMice(e);