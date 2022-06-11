// jp-will create and append the information from the api and place it in their 2 containers

// jp-will create and append the information from the api and place it in their 2 containers

// jp-will create and append the information from the api and place it in their 2 containersgit p
var rawgAPI = '4195cc8002804467be513fd2af860f7e';
var youtubeAPI = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=";
var youtubeAPIKey = "&key=AIzaSyCKEJL7QBlhCvJotb_E4HkcyPhBFwFO2WU";
// rawg link - https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
// rawg link - https://api.rawg.io/api/games?key=4195cc8002804467be513fd2af860f7e&dates=2019-09-01,2019-09-30&platforms=18,1,7
// onclick function to intiate the data pull from rawg and youtube
// https://api.rawg.io/api/games
// stores link https://api.rawg.io/api/games/{game_pk}/stores

// get game game name on clickbar searchBarEl = "";
$("button").on('click', function () {
    console.log('button');
    searchBarEl = $('#search-input').val().trim();
    var searchVal = searchBarEl.split(" ").join("%20");
    console.log(searchVal);
    rawgPull(searchVal);
    youTubePull(searchVal);
    $('#search-input').val("");

});

var rawgDataCont = '<div class="column is-3-tablet is-5-desktop">' +
    '<div class="card">' +
    '<div class="card-image.has-text-centred.px-5">' +
    '<img src="assets/imgs/Switch_Sports.jpg" alt="wii">' +
    '</div>' +
    '<div class="card-content">' +
    '<p class="title is-size-5">Top 2</p>' +
    '<p>$xx.xx</p>' +
    '</div>' +
    '<footer class="card-footer">' +
    '<p class="card-footer-item">' +
    '<a href="" class="has-text-grey">Review</a>' +
    '</p>' +
    '<p class="card-footer-item">' +
    '<a href="" class="has-text-grey">Purchase</a>' +
    '</p>' +
    '</footer>' +
    '</div>' +
    '</div>';
var testEl = document.querySelector('.test')

// leon-you count potentially gull you top games and screenshots from here
var $newdiv1 = $("<div id='object1'></div>"),
    newdiv2 = document.createElement("div"),
    existingdiv1 = document.getElementById("footer");

function rawgPull(gameName) {
    // will fetch ALL the games
    fetch('https://api.rawg.io/api/games?key=' + rawgAPI + '&search=' + gameName)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.results[0].name);
            console.log(data.results[0].esrb_rating.name);
            console.log(data.results[0].metacritic);
            console.log(data.results[0].background_image);
            // console.log(data.results[0].stores);
            testEl.innerHTML = "";
            for (var i = 0; i < 1; i++)
                var title = data.results[i].name;
            var rating = data.results[i].esrb_rating.name;
            var rating = data.results[i].metacritic;
            var rating = data.results[i].background_image;
            $(".test").append(rawgDataCont);
        })

};




function youTubePull(gameName) {
    fetch(youtubeAPI + gameName + youtubeAPIKey)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.items[0].snippet.title);
            console.log(data.items[0].snippet.thumbnails.default.url);

        })

};

