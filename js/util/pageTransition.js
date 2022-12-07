/*
    Ce fichier JS contient le script pour permettre de faire une transition entre les différentes pages du portfolio.
    Il est également stylisé dans le fichier "pageTransition.css" qui se trouve dans le dossier "css/util".
*/

/**
 * 
 * @param {String} url L'url de la page vers laquelle on veut rediriger
 * @param {String} transition La transition demandée
 * @param {String} pageClass La classe de la page vers laquelle on veut rediriger (Afin de pouvoir styliser la transition)
 */
function pageTransition(url, transition, pageClass) {
    
    // Création de l'élément qui va servir de loader
    const departDiv = document.createElement("div");
    departDiv.classList.add("loader");
    departDiv.classList.add(transition);
    departDiv.classList.add(pageClass);

    // Ajout de l'élément au DOM
    document.body.append(departDiv);

    // L'animation est gérée par le CSS, on attend donc 1.1s avant de rediriger
    setTimeout(() => {
        window.location.href = url;
    }, 1100)
}


// Récupère les boutons qui ont la classe "redirecter"
const buttons = document.getElementsByClassName("redirecter");

// Pour chaque bouton ayant cette classe, on ajoute un event listener qui va appeler la fonction pageTransition
for (const button of buttons){ 

    // Récupère les données de l'élément HTML
    const url = button.dataset.location;
    const transition = button.dataset.transition;
    const pageClass = button.dataset.pageclass;

    // Ajoute l'event listener
    button.addEventListener("click", () => {
        pageTransition(url, transition, pageClass);
    });
}