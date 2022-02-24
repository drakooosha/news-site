const mainPage = document.querySelector(".main--page");
const addPage = document.querySelector(".add--page");
const newsPage = document.querySelector(".news--page");

export function switchToAdd() {
    addPage.style.display = "block";
    mainPage.style.display = "none";
    newsPage.style.display = "none";
}

export function switchToMain() {
    mainPage.style.display = "block";
    addPage.style.display = "none";
    newsPage.style.display = "none";
}

export function switchToNews() {
    newsPage.style.display = "block";
    mainPage.style.display = "none";
    addPage.style.display = "none";
}