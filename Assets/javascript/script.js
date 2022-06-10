// jp-will create and append the information from the api and place it in their 2 containers
// let youtube = {
//     "apiKey": 
// }

// jp-will create and append the information from the api and place it in their 2 containers

// jp-will create and append the information from the api and place it in their 2 containersgit p
var searchBarEl;
var rawgAPI = '4195cc8002804467be513fd2af860f7e';
// var youTubeAPI =
// rawg link - https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
// rawg link - https://api.rawg.io/api/games?key=4195cc8002804467be513fd2af860f7e&dates=2019-09-01,2019-09-30&platforms=18,1,7
// onclick function to intiate the data pull from rawg and youtube
// https://api.rawg.io/api/games
// stores link https://api.rawg.io/api/games/{game_pk}/stores

// get game game name on click


document.getElementById('search-button').addEventListener('click', function () {
    console.log('click');
    searchBarEl = $(this).parent().parent().val();
    console.log(searchBarEl);
    rawgPull()

});



// leon-you count potentially gull you top games and screenshots from here
function rawgPull() {
    // will fetch ALL the games
    fetch('https://api.rawg.io/api/games?key=' + rawgAPI + '&dates=2019-09-01,2019-09-30&platforms=18,1,7')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })

};




function youTubePull() {


};

function rawgCont() {


};