export default {
    id: "last-news__list",
    configCardNode
}

export function configCardNode(node,oneNews) { //выводим карточку с новостью
    const {id, title} = oneNews;
    node.innerHTML = '';
    node.style.display = 'block';
    node.id = id;
    node.append(title);
}

