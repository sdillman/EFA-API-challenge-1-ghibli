const baseURL = 'https://ghibliapi.herokuapp.com/films';

const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');

const posters = {
    // Castle in the Sky
    "2baf70d1-42bb-4437-b551-e5fed5a87abe": "https://www.ghibli.jp/images/laputa.jpg",
    // Grave of the Fireflies
    "12cfb892-aac0-4c5b-94af-521852e46d6a": "https://www.ghibli.jp/images/hotarunohaka.jpg",
    // My Neighbor Totoro
    "58611129-2dbc-4a81-a72f-77ddfc1b1b49": "https://www.ghibli.jp/images/totoro.jpg",
    // Kiki's Delivery Service
    "ea660b10-85c4-4ae3-8a5f-41cea3648e3e": "https://www.ghibli.jp/images/majo.jpg",
    // Only Yesterday
    "4e236f34-b981-41c3-8c65-f8c9000b94e7": "https://www.ghibli.jp/images/omoide.jpg",
    // Porco Rosso
    "ebbb6b7c-945c-41ee-a792-de0e43191bd8": "https://www.ghibli.jp/images/porco.jpg",
    // Pom Poko
    "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c": "https://www.ghibli.jp/images/tanuki.jpg",
    // Whisper of the Heart
    "ff24da26-a969-4f0e-ba1e-a122ead6c6e3": "https://www.ghibli.jp/images/mimi.jpg",
    // Princess Mononuke
    "0440483e-ca0e-4120-8c50-4c8cd9b965d6": "https://www.ghibli.jp/images/mononoke.jpg?20201016",
    // My Neighbors the Yamadas
    "45204234-adfd-45cb-a505-a8e7a676b114": "https://www.ghibli.jp/images/yamada.jpg?20201016",
    // Spirited Away
    "dc2e6bd1-8156-4886-adff-b39e6043af0c": "https://www.ghibli.jp/images/chihiro.jpg",
    // The Cat Returns
    "90b72513-afd4-4570-84de-a56c312fdf81": "https://www.ghibli.jp/images/baron.jpg?20201016",
    // Howl's Moving Castle
    "cd3d059c-09f4-4ff3-8d63-bc765a5184fa": "https://www.ghibli.jp/images/howl.jpg?20201016",
    // Tales from Earthsea
    "112c1e67-726f-40b1-ac17-6974127bb9b9": "https://www.ghibli.jp/images/ged.jpg",
    // Ponyo
    "758bf02e-3122-46e0-884e-67cf83df1786": "https://www.ghibli.jp/images/ponyo.jpg",
    // Arrietty
    "2de9426b-914a-4a06-a3a0-5e6d9d3886f6": "https://www.ghibli.jp/images/karigurashi.jpg", // 400x566
    // From Up on Poppy Hill
    "45db04e4-304a-4933-9823-33f389e8d74d": "https://www.ghibli.jp/images/kokurikozaka.jpg", // 400x566
    // The Wind Rises
    "67405111-37a5-438f-81cc-4666af60c800": "https://www.ghibli.jp/images/kazetachinu.jpg", // 400x566
    // The Tale of the Princess Kaguya
    "578ae244-7750-4d9f-867b-f3cd3d6fecf4": "https://www.ghibli.jp/images/kaguyahime.jpg", // 400x566
    // When Marnie Was There
    "5fdfb320-2a02-49a7-94ff-5ca418cae602": "https://www.ghibli.jp/images/marnie.jpg", // 400x566
    // The Red Turtle
    "d868e6ec-c44a-405b-8fa6-f7f0f8cfb500": "https://www.ghibli.jp/images/red-turtle.jpg?20201218"
}

fetchResults();

// searchForm.addEventListener('submit', fetchResults);

function fetchResults() {
    // e.preventDefault();

    url = baseURL;

    fetch(url).then(function (result) {
        return result.json();
    }).then(function (json) {
        displayResults(json);
    });
}

function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    console.log("json in displayResults ", json);
    let films = json;
    console.log("FILMS.LENGTH: " + films.length);


    if (films.length === 0) {
        console.log("No results");
    } else {
        for (let i = 0; i < films.length; i++) {
            let current = films[i];
            console.log("Current:", current);

            let card = document.createElement('article');
            card.classList.add('card', 'col-md-4');
            let title = document.createElement('h2');
            title.classList.add('text-center')
            let director = document.createElement('h3');
            let img = document.createElement('img');
            img.setAttribute('alt', `poster image for ${current.title}`);
            let description = document.createElement('p');
            let clearfix = document.createElement('div');
            let cardEnd = document.createElement('br');

            title.textContent = current.title;
            director.textContent = `Directed by: ${current.director}`;
            img.src = posters[current.id];
            description.textContent = current.description;


            clearfix.setAttribute('class', 'clearfix');
            
            
            card.appendChild(title);
            card.appendChild(director);
            card.appendChild(img);
            card.appendChild(description);
            card.appendChild(cardEnd);
            card.appendChild(clearfix);
            section.appendChild(card);
        }
    }
};