import {activeMainPage} from './main.js'
import {switchToMain} from './router.js'

getNewsFrombase();

export var fullNews = []; 
let lastId = 0;

export function addNewsToBase(method,news) {
    const headers = {
        'Content-Type': 'application/json'
    }

    return fetch("https://news-4638d-default-rtdb.europe-west1.firebasedatabase.app/news.json" , {
        method: method,
        body: JSON.stringify(news),
        headers: headers
    })
    .then(responce => responce.json())
}

export function getNewsFrombase() {
    fetch("https://news-4638d-default-rtdb.europe-west1.firebasedatabase.app/news.json")
    .then(responce => responce.json())
    .then(data => {
        for(let key in data) {
            fullNews.push(data[key]);
    }
    activeMainPage(fullNews);
    lastId = fullNews.length;
})};

export function addNews(newArticle) {
    lastId++;
    const article = {
        id:lastId,
        ...newArticle
    };
    addNewsToBase("POST",article);
    fullNews.push(article);
    activeMainPage(fullNews);
    switchToMain();
}



// export const fullNews = [
//     {
//         id: 1,
//         tag: 'finance',
//         img: './public/news1.jpg',
//         title: 'Требониан Галл происходил из старинного этрусского рода. В конце правления императора ' +
//         'Деция Траяна он занимал должность легата',
//         description: 'Будущий император Гай Вибий Требониан Галл родился около 206 года. Эта датировка основана на сообщении Псевдо-Аврелия Виктора, который в своей «Эпитоме» пишет, что на момент смерти Гаю было примерно сорок семь лет.',
//         text: `По приказу министра, с 1 октября TUT.BY утратит статус СМИ. При этом мы по-прежнему будем работать как интернет-ресурс без статуса СМИ.
        
//         Напомним, что регистрация интернет-ресурсов в качестве сетевых изданий в Беларуси носит добровольный характер. Статус СМИ дает некоторые преимущества, в частности возможность на законных основаниях присутствовать в порядке, определенном законодательством Республики Беларусь, в районах вооруженных конфликтов или чрезвычайных ситуаций, на массовых мероприятиях, в местах других общественно важных событий и передавать оттуда информацию. Однако TUT.BY был зарегистрирован как СМИ лишь в январе 2019 года, до этого — с момента основания в 2000 году — портал работал без этого статуса.

//         По приказу министра, с 1 октября TUT.BY утратит статус СМИ. При этом мы по-прежнему будем работать как интернет-ресурс без статуса СМИ.
        
//         Напомним, что регистрация интернет-ресурсов в качестве сетевых изданий в Беларуси носит добровольный характер. Статус СМИ дает некоторые преимущества, в частности возможность на законных основаниях присутствовать в порядке, определенном законодательством Республики Беларусь, в районах вооруженных конфликтов или чрезвычайных ситуаций, на массовых мероприятиях, в местах других общественно важных событий и передавать оттуда информацию. Однако TUT.BY был зарегистрирован как СМИ лишь в январе 2019 года, до этого — с момента основания в 2000 году — портал работал без этого статуса.`,
//         likesCount: 11500,
//         commentsCount: 1500,
//     },
// ];


// export const news = [
//         {
//                 id : 1,
//                 tag : 'sport',
//                 date: new Date(2020, 10, 4, 11, 58),
//                 img: '../public/news1.jpg',
//                 title: 'Требониан Галл происходил из старинного этрусского рода. В конце правления императора Деция Траяна он занимал должность легата',
//         description: 'Будущий император Гай Вибий Требониан Галл родился около 206 года. Эта датировка основана на сообщении Псевдо-Аврелия Виктора, который в своей «Эпитоме» пишет, что на момент смерти Гаю было примерно сорок семь лет.',
//         likesCount: 11500,
//         commentsCount: 1500,
//     },

//     {
//         id : 2,
//         tag : 'real estate',
//         date: new Date(2020, 10, 4, 11, 58),
//         img: '../public/news1.jpg',
//         title: 'Требониан Галл происходил из старинного этрусского рода. В конце правления императора Деция Траяна он занимал должность легата',
//         description: 'Будущий император Гай Вибий Требониан Галл родился около 206 года. Эта датировка основана на сообщении Псевдо-Аврелия Виктора, который в своей «Эпитоме» пишет, что на момент смерти Гаю было примерно сорок семь лет.',
//         likesCount: 11500,
//         commentsCount: 1500,
//     },
    
//     {
//         id : 3,
//         tag : 'sport',
//         date: new Date(2020, 10, 4, 11, 58),
//         img: '../public/news1.jpg',
//         title: 'Требониан Галл происходил из старинного этрусского рода. В конце правления императора Деция Траяна он занимал должность легата',
//         description: 'Будущий император Гай Вибий Требониан Галл родился около 206 года. Эта датировка основана на сообщении Псевдо-Аврелия Виктора, который в своей «Эпитоме» пишет, что на момент смерти Гаю было примерно сорок семь лет.',
//         likesCount: 11500,
//         commentsCount: 1500,

//     }
// ]