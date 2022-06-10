// jp-will create and append the information from the api and place it in their 2 containers
let youtube = {
    "apiKey": null

};

// jp-will create and append the information from the api and place it in their 2 containers

// jp-will create and append the information from the api and place it in their 2 containersgit p

var rawgAPI = '4195cc8002804467be513fd2af860f7e';
var youTubeAPI = "AIzaSyCKEJL7QBlhCvJotb_E4HkcyPhBFwFO2WU";
// rawg link - https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
// rawg link - https://api.rawg.io/api/games?key=4195cc8002804467be513fd2af860f7e&dates=2019-09-01,2019-09-30&platforms=18,1,7
// onclick function to intiate the data pull from rawg and youtube
// https://api.rawg.io/api/games
// stores link https://api.rawg.io/api/games/{game_pk}/stores

// get game game name on click
var searchBarEl;
$("button").on('click', function () {
    console.log('button');
    searchBarEl = $(this).siblings().val();
    console.log(searchBarEl);
    rawgPull();
    youTubePull();

})

function rawgPull() {
    fetch('https://api.rawg.io/api/games?key=' + rawgAPI + '&dates=2019-09-01,2019-09-30&platforms=18,1,7')
        .then(response => response.json())
        .then(data => {
            console.log(data)

        })
};

function youTubePull() {


};