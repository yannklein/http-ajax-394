// //////////////////////
// Rehearsal
// //////////////////////

// // 1.Select the button
// const button = document.querySelector("#click-me");
// // 2. Listen to a click
// button.addEventListener("click", (event) => {
//   // 3. Change the DOM (add disabled class and change innerText to loading)
//   event.currentTarget.classList.add("disabled");
//   event.currentTarget.innerText = "Loading...";
// });



// //////////////////////
// HTTP GET request
// //////////////////////

// 1. Select elements
const input = document.querySelector('#keyword');
const button = document.querySelector('#submit');
const list = document.querySelector('#results');

const fetchMovie = (keyword) => {
  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data.Search[0]);
      // 3. Change the DOM
      data.Search.forEach((movie) => {
        list.insertAdjacentHTML(
          "beforeend",
          `<li list-inline-item><img src="${movie.Poster}"><p>${movie.Title}</p></li>`
        );
      });
    });
};

// 2. Listen to a click
button.addEventListener("click", (event) => {
  event.preventDefault();
  list.innerHTML = "";
  // 2.5. Fetch the API
  fetchMovie(input.value);
});



// //////////////////////
// HTTP POST request
// //////////////////////

const searchAlgoliaPlaces = (event) => {
  // 2.5 Fetch API
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: event.currentTarget.value })
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data.hits); // Look at local_names.default
    });
};

// 1. Select an element
const search = document.querySelector("#search");
// 2. Add event listener
input.addEventListener("keyup", searchAlgoliaPlaces);
