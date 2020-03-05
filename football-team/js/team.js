var players = [
    { name: "Vladimir", lastname: "Stojkovic", number: 88, img: "img/stojkovic-200.jpg" },
    { name: "Bojan", lastname: "Ostojic", number: 15, img: "img/ostojic-200.jpg" },
    { name: "Takuma", lastname: "Assano", number: 12, img: "img/asuma.jpg" },
    { name: "Lazar", lastname: "Markovic", number: 44, img: "img/lazar.jpg" },
    { name: "Milan", lastname: "Smiljanic", number: 99, img: "img/lola-200.jpg" },
    { name: "Aleksandar", lastname: "Lutovac", number: 97, img: "img/lut.jpg" },
    { name: "Nemanja", lastname: "Mileticic", number: 73, img: "img/miletic-73.jpg" },
    { name: "Ibras", lastname: "Natho", number: 6, img: "img/natho.jpg" },
    { name: "Strahinja ", lastname: "Pavlovic", number: 3, img: "img/pavlovic-200.jpg" },
    { name: "Rajko", lastname: "Brezancic", number: 31, img: "img/rajko-1.jpg" },
    { name: "Umar", lastname: "Sadik", number: 10, img: "img/sadikumar.jpg" },
    { name: "Filip", lastname: "Stevanovic", number: 80, img: "img/stevanovic-200.jpg" },
    { name: "Seydouba", lastname: "Soumah", number: 20, img: "img/suma.jpg" },
    { name: "Slobodan", lastname: "Urosevic", number: 12, img: "img/urosevic-200.jpg" },
    { name: "Sasa", lastname: "Zdjelar", number: 16, img: "img/zdjelar-200.jpg" },
];

var firstSquad = document.querySelector("header");
var substitutes = document.querySelector("main")

function getRandomNumber(limit) {
    return Math.floor((Math.random() * limit));
}

function getPlayer() {
    while (players.length) {
        var randomNumber = getRandomNumber(players.length);

        if (players.length > 4) {
            firstSquad.appendChild(createPlayer(players[randomNumber]))
        } else {
            substitutes.appendChild(createPlayer(players[randomNumber]))
        }

        players.splice(randomNumber, 1);
    }
}

function createPlayer(player) {
    var div = document.createElement("div");
    var pics = document.createElement("img");
    var body = document.querySelector("body");
    div.appendChild(pics)
    pics.setAttribute("src", player.img);
    var divname = document.createElement("div");
    var text = document.createTextNode(player.name)
    divname.appendChild(text);
    firstSquad.appendChild(divname);

    return div;
}


getPlayer();
