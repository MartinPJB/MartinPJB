//Import
import colors from "./languages.js";

//Functions
//--Get github repos
async function getRepos(username){
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await res.json();

    data.forEach(element => {
        const { name, html_url, fork, description, language, owner } = element;
        const forked = fork ? `<span class="repo_detail">(<b>Forked</b>)</span>` : "";
        const lang = language != null ? language : "";
        const desc = description != null ? description : "This repo doesn't have any description. 😶";

        document.getElementById("grid").innerHTML += 
        `<div class="element">
            <span class="repo_name"><a href="${html_url}">${name} ${forked}</a></span>
            <span class="repo_detail">${desc}</span>
            <span class="repo_detail repo_language"><span class="repo_lang" style="background: ${colors[lang]}"></span> ${lang}</span>
        </div>`;

        //Display github avatar
        document.getElementById("githubAvatar").src = `https://avatars3.githubusercontent.com/u/${owner.id}`;
    });
}
//--Smooth scroll
function smoothScroll(e){
    console.log(e.dataset);
    const offsetTop = document.querySelector(e.dataset.scrollto).offsetTop;
    scroll({
        top: offsetTop,
        behavior: "smooth"
    })
}

//Dom content loaded
document.addEventListener("DOMContentLoaded", () => {
    getRepos("Cozax"); //Display my repos in the page

    //Smooth scrolling
    const buttons = document.querySelectorAll("button");
    buttons.forEach(e => {
        e.addEventListener("click", () => {smoothScroll(e)});
    });
})
