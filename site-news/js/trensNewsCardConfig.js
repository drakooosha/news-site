import {addImage, addTag, addStatistic,addText} from "./helpers.js";

export default {
    id: "hot-news__list",
    configCardNode,
}

function configCardNode(node,oneNews) { //выводим карточку с новостью
    const {id, tag, title, commentsCount, likesCount, img} = oneNews;
    node.style.display = "block";
    node.id = id;
    addImage(node.children[0], img);
    addTag(node.children[1], tag);
    addText(node.children[2], title);
    addStatistic(node.children[3], likesCount, commentsCount);
    console.log(img);
}