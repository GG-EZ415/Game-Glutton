//navbar
$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});
// JP-commented out YouTube stuff because I used up all out YouTube api fetches

var rawgAPI = "4195cc8002804467be513fd2af860f7e";
var youtubeAPI =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=";
var youtubeAPIKey = "&key=AIzaSyCKEJL7QBlhCvJotb_E4HkcyPhBFwFO2WU";

// get game game name on clickbar searchBarEl = "";
$("#search-button").on("click", function () {
  console.log("button");
  searchBarEl = $("#search-input").val().trim();
  var searchVal = searchBarEl.split(" ").join("%20");
  console.log(searchVal);
  rawgPull(searchVal);
  $("#search-input").val("");
  // moved youtube pull to rawg to account for mature game content
});


$(window).on('load', function () {
    rawgPush("");
});

function createCard(title, rating, meta, img) {
  // this return is handing off the rest of the entire string
  return (
    '<div class="column is-3-tablet is-5-desktop">' +
    '<div class="card">' +
    '<div class="card-image" id="rawg-image">' +
    '<img src="' +
    img +
    '" alt="' +
    title +
    '">' +
    "</div>" +
    '<div class="card-content">' +
    '<p class="title is-size-5">' +
    '<h1 class="has-text-centered" id="rawg-game-title">' +
    title +
    "</h1>" +
    "</p>" +
    "</div>" +
    '<footer class="card-footer">' +
    '<p class="card-footer-item has-text-danger-dark title has-text-weight-bold" id="rawg-esrb-rating">' +
    rating +
    "</p>" +
    '<p class="card-footer-item has-text-warning-dark title has-text-weight-bold">' +
    meta +
    "</p>" +
    "</footer>" +
    "</div>" +
    "</div>"
  );
}
var testEl = document.querySelector(".test");

// if else condtional for games not found
function rawgPull(gameName) {
  fetch("https://api.rawg.io/api/games?key=" + rawgAPI + "&search=" + gameName)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.results[0].name);
      console.log(data.results[0].esrb_rating.name);
      console.log(data.results[0].metacritic);
      console.log(data.results[0].background_image);
      testEl.innerHTML = "";
      // doesn't need for loop
      for (var i = 0; i < 1; i++) {
        var title = data.results[i].name;
        var rating = data.results[i].esrb_rating.name;
        var metacritic = data.results[i].metacritic;
        var rawgPic = data.results[i].background_image;
        $("#rawg-cont").append(createCard(title, rating, metacritic, rawgPic));
      }
      //coditional to determine wiether or not youtube api is called no if mature
      if (
        rating === "Mature" &&
        localStorage.getItem("modalAnswer") === "false"
      ) {
        console.log("you cant see that");
        // perhaps add a photo
      } else {
        // youTubePull(gameName);
      }
    });
}

// check query parameters to see top games (possibly game of the year titles)

// function youTubePull(gameName) {
//     fetch(youtubeAPI + gameName + youtubeAPIKey)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             console.log(data.items[0].snippet.title);
//             console.log(data.items[0].snippet.thumbnails.default.url);

//         })

// };

// modal
var modalBackgroundEl = document.querySelector(".modal-background");
var modalEl = document.querySelector(".modal");

$(function () {
  console.log("ready!");
  $(modalEl).addClass("is-active");
});
// true & false easier and better practice
$("#modal-yes").on("click", function () {
  console.log("modal");
  $(modalEl).removeClass("is-active");
  localStorage.setItem("modalAnswer", "true");
});

$("#modal-no").on("click", function () {
  console.log("modal");
  $(modalEl).removeClass("is-active");
  localStorage.setItem("modalAnswer", "false");
});

function createCardsOnLoad(title, rating, meta, img) {
    return '<div class="column is-3-tablet is-2-desktop">' +
        '<div class="card">' +
        '<div class="card-image has-text-centred.px-4" id="rawg-image">' +
        '<img src="' + img + '" alt="'+title+'">' +
        '</div>' +
        '<div class="card-content">' +
        '<p class="is-size-4">' +
        '<h5 id="rawg-game-title">' + title + '</h5>' +
        '</p>' +
        '</div>' +
        '<footer class="card-footer">' +
        '<p class="card-footer-item">' +
        '<h5 id="rawg-esrb-rating" class="has-text-danger-dark ">' + rating + '</h5>' +
        '</p>' +
        '<p class="card-footer-item">' +
        '<h8 id="rawg-meta" class="has-text-warning-dark">' + meta + '</h8>' +
        '</p>' +
        '</footer>' +
        '</div>' +
        '</div>';
}

function rawgPush() {
    fetch('https://api.rawg.io/api/games?key=' + rawgAPI)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.results[0].name);
            console.log(data.results[0].esrb_rating.name);
            console.log(data.results[0].metacritic);
            console.log(data.results[0].background_image); 
            testEl.innerHTML = "";
            for (var i = 0; i < 5; i++) {
                var title = data.results[i].name;
                var rating = data.results[i].esrb_rating.name;
                var metacritic = data.results[i].metacritic;
                var rawgPic = data.results[i].background_image;
                $("#top-games").append(createCardsOnLoad(title, rating, metacritic, rawgPic));
            }
        })
};

