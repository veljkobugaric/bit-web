var input = document.querySelector('input');

(function getSearchData() {
    var newXHR = new XMLHttpRequest();
    newXHR.open("GET", 'http://api.tvmaze.com/shows&maxResults=50');
    newXHR.onload = function (data) {
        presentSearchResult(data);
    }
    newXHR.send();
})();

function presentSearchResult(data) {
    var jsonObject = JSON.parse(data.target.responseText);
    console.log(jsonObject);
}

//input.addEventListener('change', getSearchData);

