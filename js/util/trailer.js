/*
	Ce fichier JS contient le script pour le "cursor trailer" qui suit la souris.
	Il est également stylisé dans le fichier "trailer.css" qui se trouve dans le dossier "css/util".
*/
const trailer = document.createElement("div");
trailer.id = "trailer";
document.body.append(trailer);


/**
 * Cette fonction permet à l'élément "trailer" de suivre la souris.
 * @param {*} e Event e de la souris lors d'un mouvement
 */
function followMice(e) {

	// Initialise la taille du trailer en fonction de l'élément survolé
	let scale = 1;

	// Si l'élément suivant est défini comme "interactif" dans le HTML, la taille du trailer est augmentée
	if (e.target.dataset.interactif == "true" || (e.target.parentElement && e.target.parentElement.dataset.interactif == "true")) {
		scale = 2;
	}

	// Définit la position du trailer en fonction de la position de la souris
	const x = e.clientX - trailer.offsetWidth / 2,
		y = e.clientY - trailer.offsetHeight / 2;

	// Définit les keyframes de l'animation du trailer
	const keyframes = {
		transform: `translate(${x}px, ${y}px) scale(${scale})`
	}

	// Anime enfin le trailer
	trailer.animate(keyframes, {
		duration: 400,
		fill: "forwards"
	});
}
window.onmousemove = e => followMice(e);