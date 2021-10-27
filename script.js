const btn = document.getElementById("new-gif");
btn.addEventListener("click", () => {
  getGif("cats");
});

const img = document.querySelector("img");

const searchInput = document.getElementById("search-gif");
searchInput.addEventListener("click", function () {
  this.select();
});

const searchBtn = document.getElementById("search-submit");
searchBtn.addEventListener("click", () => {
  getInput();
});

function getInput() {
  const inputSearch = searchInput.value;
  getGif(inputSearch);
}

//Refactor to async function:

async function getGif(input) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=4UaTtBYWSgSVXhSCb4hBlDLlgHQrfZ2M&s=${input}`,
    { mode: "cors" }
  )
  const gifData = await response.json();
  img.src = gifData.data.images.original.url;
}

//Promise:

// function getGif(input){
//   fetch(
//       `https://api.giphy.com/v1/gifs/translate?api_key=4UaTtBYWSgSVXhSCb4hBlDLlgHQrfZ2M&s=${input}`,
//       { mode: "cors" }
//     )
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (response) {
//         img.src = response.data.images.original.url;
//       })
//       .catch(function () {
//           alert(`It was impossible to find a gif with the word "${input}"!`)
//       });
// }

getGif("cats");
