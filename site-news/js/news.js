import { fullNews } from "./backend.js";
import { addStatistic, addTag } from "./helpers.js";
import { switchToNews } from "./router.js"
import outCards from "./outCards.js";
import { configCardNode }  from "./lastNewsCardConfig.js"

const newsPage = document.querySelector(".main__inner--onenews");

export default function outNews(newsId) {
    newsPage.id = newsId;
    outCards(fullNews,{configCardNode, id: "last-news__container--newspage"}); // заполняем правую колонку
    const oneNews = fullNews.find(n => n.id === newsId);
    addStatistic(newsPage.children[0], oneNews.likesCount, oneNews.commentsCount); //заполняем статистику
    outOneNews(newsPage.children[1], oneNews);
    switchToNews();
}

function outOneNews(newsContainer, {tag, title, img, text}) { //заполняем страницу контентом
    const infoContainer = newsContainer.children[0];
    addTag(infoContainer.children[0], tag);
    infoContainer.children[1].textContent = title;
    infoContainer.children[2].src = img;
    infoContainer.children[3].textContent = text;
}

