import outNews from "./news.js";
import {TAG_NAMES} from "./options.js"

export function addImage(node,src) { //вставляем картинку
    node.children[0].src = src;
}

export function addTag(node, tag) { //добавляем тег
    node.className = `tag tag--${tag}`;
    node.innerHTML = TAG_NAMES[tag];
}

export function addStatistic(node, likesCount, commentsCount) { //добавляем лайки и комментарии
    const likes = makeFriendlyNumber(likesCount);
    node.children[0].style.backgroundImage = `<img src="../public/heart.svg" alt=""> ${likes}`;
    const comments = makeFriendlyNumber(commentsCount);
    node.children[1].style.backgroundImage = `<img src="../public/comments.svg" alt=""> ${comments}`;
}

function makeFriendlyNumber(num) {
    if(num >= 1000000) {
        return intlFormat(num/1000000) + ' млн';
    }
    if(num >= 1000) {
        return intlFormat(num/1000) + 'тыс';
    }
    return intlFormat(num);

    function intlFormat(num) {
        return new Intl.NumberFormat().format(num);
    }
}

export function addNewsLinkClick(node, id) {
    node.onclick = event => {
        event.preventDefault();
        outNews(id);
    }
}

export function addText(node, text) {
    node.textContent = text;
}