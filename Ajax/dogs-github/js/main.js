// var body = document.querySelector("body")
// function handler1() {
//     var input = document.querySelector('input').value;
//     var value = input.value;
//     console.log(input);
//     var someurl = 'http://www.geoplugin.net/xml.gp?ip=' + input;
//     var eventhttp = new XMLHttpRequest();
//     eventhttp.open("GET", someurl);
//     eventhttp.send();
//     eventhttp.onload = function () {
//         var xmlDoc = eventhttp.responseXML;
//         var from = xmlDoc.querySelector("geoplugin_countryName").textContent;
//         var money = xmlDoc.querySelector("geoplugin_currencySymbol_UTF8").textContent;
//         var p = document.createElement("p");
//         var genga = document.createElement("h1")
//         p.textContent = 'IP from : ' + from;
//         genga.textContent = 'Zvanicna valuta je : ' + money;
//         body.appendChild(p);
//         body.appendChild(genga);
//     }
// }
// var button = document.querySelector('button');
// button.addEventListener('click', handler1)

// var xmlhttp = new XMLHttpRequest();
// xmlhttp.open("GET", "http://www.geoplugin.net/xml.gp?ip=109.122.89.100");
// xmlhttp.send();

// xmlhttp.onload = function () {
//     var xmlDoc = xmlhttp.responseXML;
//     var from = xmlDoc.querySelector("geoplugin_countryName").textContent;
//     var money = xmlDoc.querySelector("geoplugin_currencySymbol_UTF8").textContent;
//     var p = document.createElement("p");
//     var genga = document.createElement("h1")
//     p.textContent = 'IP from : ' + from;
//     genga.textContent = 'Zvanicna valuta je : ' + money;
//     body.appendChild(p);
//     body.appendChild(genga);

// }


// var body = document.querySelector("body");
// var select = document.querySelector("select");
// select.addEventListener("change", fetch1);
// setInterval(fetch1, 3000);
// function fetch1() {


//     var request = new XMLHttpRequest();
//     request.open("GET", "https://dog.ceo/api/breed/" + select.value + "/images/random");

//     request.onload = function () {
//         var dog = JSON.parse(request.responseText);
//         dog1(dog.message);

//     }

//     request.send();
// }
// function dog1(url) {
//     var div = document.querySelector("div");
//     var img = document.createElement("img");
//     img.setAttribute("src", url);
//     body.append(div)
//     $("div").html(img);



// }
var body = document.querySelector("body");
var div = document.querySelector(".search");
var input = document.querySelector("input");
var button = document.querySelector("button");

function handler1() {
    var inputValue = input.value;
    var urlGit = "https://api.github.com/search/users?q=" + inputValue;


    var request = $.ajax({
        url: urlGit,
        method: "GET"
    });
    request.done(function (data) {
        for (var i = 0; i < data.items.length; i++) {
            var someDiv = document.querySelector(".main");
            var img = document.createElement("img");
            var p = document.createElement("p");
            $(img).attr("src", data.items[i].avatar_url);
            $(p).text(data.items[i].login);
            var imgPDiv = document.createElement("div");
            $(imgPDiv).addClass("imgP");
            $(imgPDiv).append(img)
            $(imgPDiv).append(p);
            $(someDiv).append(imgPDiv);
        }
        console.log(data);
        onClick();
    });
}

function handler2(event) {
    console.log(event.currentTarget);
    var temp = event.currentTarget;
    console.log($(temp).find('p').text());
    var username = $(temp).find('p').text()
    var urlRepos = "https://api.github.com/users/" + username + '/repos';

    var user = $.ajax({
        url: urlRepos,
        method: "GET"
    });
    user.done(function (data) {
        console.log(data);



    })

}

button.addEventListener("click", handler1);
function onClick() {

    var clickDiv = $('.imgP');

    $(clickDiv).on("click", handler2);
}
