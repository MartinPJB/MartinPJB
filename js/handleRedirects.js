// Function
function handleRedirects(url, transition, bgColor) {
    const departDiv = document.createElement("div");
    departDiv.classList.add("loader");
    departDiv.classList.add(transition);
    departDiv.style.backgroundColor = bgColor;

    document.body.append(departDiv);
    setTimeout(() => {
        window.location.href = url;
    }, 1100)
}


// Init buttons of current page
const buttons = document.getElementsByClassName("redirecter");
for (const button of buttons){ 
    const url = button.dataset.location;
    const transition = button.dataset.transition;
    const bgColor = button.dataset.bgColor;

    button.addEventListener("click", () => {
        handleRedirects(url, transition, bgColor);
    });
}