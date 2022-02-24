import {addImage, addTag, addStatistic, addNewsLinkClick,addText} from "./helpers.js"

export default {
    id: "news__list",
    configCardNode,
};

function configCardNode(node,oneNews) { //выводим карточку с новостью
    const {id, tag, title, description, commentsCount, likesCount, img} = oneNews;
    node.style.display = "block";
    node.id = id;
    addNewsLinkClick(node.children[0], id);
    addImage(node.children[0], img);
    addInfo(node.children[1], tag, commentsCount, likesCount);
    addTitle(node.children[2], title)
    addText(node.children[3],description);
}

function addInfo(node, tag, commentsCount, likesCount) { //вставляем данные под картинкой
    addTag(node.children[0], tag);
    addStatistic(node.children[1], likesCount, commentsCount); 
}

function addTitle(node,title) {
    node.textContent = title;
}