import { addNews} from "./backend.js";

const imageContainer = document.querySelector(".addnews__add");
const file = document.getElementById("file");
const cancel = document.querySelector(".savenews__btn--cancel");
const form = document.querySelector(".addnews__form");
const fullText = document.querySelector(".addnews__content");
const save = document.querySelector(".savenews__btn--accept");

file.addEventListener("change", () => {  //добавляем выбранную картинку в бэкграунд 
    imageContainer.style.background= `url('../images/img/news-img1.jpg') no-repeat center/cover`; 
});

cancel.onclick = event => {  // очищаем форму
    resetform()
}

save.onclick = event => {
    const newArcticle = {
        tag: form.elements[0].value,
        title: form.elements[1].value,
        text: fullText.textContent,
        description: form.elements[1].value.slice(0,100),
        img: "images/img/news-img1.jpg",
        likesCount: 11500,
        commentsCount:1500
    };
    addNews(newArcticle);
    resetform();
}

function resetform(){
    event.preventDefault();
    form.reset();
    imageContainer.style.background = '';
    fullText.textContent = '';
}