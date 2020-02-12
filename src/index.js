// //////
// Rehearsal
// //////

// // 1.Select the button
// const button = document.querySelector("#click-me");

// // 2. Listen to a click
// button.addEventListener("click", (event) => {
//   // 3. Change the DOM
//   event.currentTarget.classList.add("disabled");
//   event.currentTarget.innerText = "Loading...";
// });

// 1. Select elements
const input = document.querySelector("#keyword");
const button = document.querySelector("#submit");
const list = document.querySelector("#results");

const fetchAPI = (keyword) => {
  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      // console.log(data.Search[0].Title);
      // 3. Change the DOM
      list.innerHTML = "";
      data.Search.forEach((movie) => {
        list.insertAdjacentHTML("beforeend", `
          <li class='list-inline-item'>
            <img src="${movie.Poster}"/>
            <p>${movie.Title}</p>
          </li>
        `);
      });
    });
};

// 2. Listen to a click
button.addEventListener("click", (event) => {
  // 2.5. Fetch the API
  event.preventDefault();
  fetchAPI(input.value);
});


// HTTP POST request

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
search.addEventListener("keyup", searchAlgoliaPlaces);

