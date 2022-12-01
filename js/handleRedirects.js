function handleRedirects(url) {
    const departDiv = document.createElement("div");
    departDiv.classList.add("loader");
    
    document.body.append(departDiv);
}


// Init buttons of current page
const buttons = document.getElementsByClassName("redirecter");
for (const button of buttons){ 
    const url = button.dataset.location;
    button.addEventListener("click", () => {
        handleRedirects(url);
    });
}