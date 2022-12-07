/*
    Ce fichier contient le javascript exécuté sur la page du portfolio (portfolio.html).
*/

// Cette fonction gère le scroll horizontal sur la page.
const main = document.getElementsByTagName("main")[0];
main.addEventListener('wheel', (event) => {
    event.preventDefault();
    main.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
    });
});