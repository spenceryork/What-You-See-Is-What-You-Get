let celebs = [
    {
        title: "Samurai",
        name: "Tomoe Gozen",
        bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg',
        lifespan: {
            birth: 1747,
            death: 1797
        }
    },
    {
        title: "Photographer",
        name: "Ansel Adams",
        bio: "Ansel was an American photographer and environmentalist. His black and white landscape photographs of the American West, especially Yosemite National Park, have been widely reproduced on calendars, posters, books, and the internet.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ansel_Adams_and_camera.jpg/1024px-Ansel_Adams_and_camera.jpg",
        lifespan: {
            birth: 1902,
            death: 1984
        }
    },
    {
        title: "Painter",
        name: "Vincent van Gogh",
        bio: "van Gogh was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1024px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
        lifespan: {
            birth: 1853,
            death: 1890
        }
    },
    {
        title: "Chef",
        name: "Gordon Ramsey",
        bio: "Ramsey is a British celebrity chef, restaurateur, and television personality. Born in Scotland, Ramsay grew up in Stratford-upon-Avon. His restaurants have been awarded 16 Michelin stars in total.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Gordon_Ramsay.jpg/800px-Gordon_Ramsay.jpg",
        lifespan: {
            birth: 1966,
            death: 2017
        }
    },
    {
        title: "Pilot",
        name: "Manfred von Richthofen",
        bio: "von Richthofen, also known as the 'Red Baron', was a fighter pilot with the German Air Force during World War I. He is considered the ace-of-aces of the war, being officially credited with 80 air combat victories.",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Manfred_von_Richthofen.jpg",
        lifespan: {
            birth: 1892,
            death: 1918
        }
    }
]


function celebrities() {
    let celebCard = "";
    for (let i = 0; i < celebs.length; i++) {
        let celebsVa = `<div class="celcards"><header> ${celebs[i].name} ${celebs[i].title} </header><section>${celebs[i].bio}</section><img src=${celebs[i].image}><footer>${celebs[i].lifespan}</footer></div>`
        celebCard += celebsVa;
    };
    document.getElementById("person").innerHTML = celebCard;
};
    // document.getElementById("person").innerHTML = celebCard;


celebrities();
