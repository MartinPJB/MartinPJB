// Horizontal scroll
const main = document.getElementsByTagName("main")[0];
main.addEventListener('wheel', (event) => {
    event.preventDefault();

    main.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
    });
});