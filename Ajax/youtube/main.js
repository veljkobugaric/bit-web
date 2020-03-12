var body = document.querySelector("body");
var div = document.querySelector(".search");
var input = document.querySelector("input");
var button = document.querySelector("button")

function handler1() {
    var inputValue = input.value;
    var tokken = "AIzaSyDGawZ7r6LILjKZzw5_-oSCn2GMQmqML6M";
    var url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + inputValue + "&key=" + tokken;


    var request = $.ajax({
        url: url,
        method: "GET"
    });
    request.done(function (data) {
        for (var i = 0; i < data.items.length; i++) {
            var someDiv = document.querySelector(".main");
            var img1 = document.createElement("img");
            var p = document.createElement("h2");
            var des = document.createElement("p");
            $(img1).attr("src", data.items[i].snippet.thumbnails.default.url);
            $(p).text(data.items[i].snippet.title)
            $(des).text(data.items[i].snippet.description)
            var divInMain = document.createElement("div")
            $(divInMain).attr("data-id", data.items[i].id.videoId);
            $(divInMain).append(img1);
            $(divInMain).append(p);
            $(divInMain).append(des);
            $(someDiv).append(divInMain);


            divInMain.addEventListener("click", function (event) {
                var dataEv = event.currentTarget.dataset.id;
                var article = document.querySelector("article");
                var iframe = document.querySelector("iframe");
                $(iframe).attr("src", "https://www.youtube.com/embed/" + dataEv);
                $(article).append(iframe)



            });


        }
    });

}

button.addEventListener("click", handler1);