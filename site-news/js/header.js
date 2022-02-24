import outCards from "./outCards.js";
import newsMainCardConfig from "./newsMainCardConfig.js";
import {switchToAdd,switchToMain} from "./router.js";
import {fullNews} from "./backend.js"

/*Поиск по меню*/ 
const nav = document.getElementById("menu__list");
nav.onclick = event => {
    const target = event.target;
    activateTagCss();
    const tag = target.id;
    const tagNews = tag === "news" ? fullNews : fullNews.filter(n => n.tag === tag);
    outCards(tagNews, newsMainCardConfig);

    function activateTagCss() {
        for(let li of nav.children) {
            if(li.children[0].classList.contains("menu__link--active")) {
                li.children[0].classList.remove("menu__link--active")
            }
        }
        target.classList.add("menu__link--active");
    };
}


/*Поиск по input*/
const searchButton = document.getElementById("menu__btn");
const seacrhInput = document.getElementById("menu__input");

searchButton.onclick = () => {
    seacrhInput.style.display = seacrhInput.style.display === "none" ? "block" : "none";
};

seacrhInput.addEventListener("keyup", (event) => {
    if(event.key !== "Enter") return;
    const searchText = event.target.value;
    const resultNews = fullNews.filter(n => { 
        if(n.title.toLowerCase().indexOf(searchText.toLowerCase()) == -1) {   //можно переписать 1 строчкой ~n.title.indexOf(searchText)
            return false;   
        }
        return true;
    });
    outCards(resultNews,newsMainCardConfig);
    switchToMain();
})

const addPageLink = document.getElementById("menu__user-link");
addPageLink.onclick = () => switchToAdd();


