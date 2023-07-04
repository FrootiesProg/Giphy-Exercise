// Get the form element
const form = document.getElementById("searchForm");

// Add event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // default form submission

  // search term entered by the user
  const searchTerm = document.getElementById("searchInput").value;

  // API request using Axios
  axios
    .get("http://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchTerm,
        api_key: "ooEFrkAldihIDc1BO23eYA3uczwyXkIb",
      },
    })
    .then(function (response) {
      const gifs = response.data.data; // Get  array of GIFs from the response data
      const gifContainer = document.getElementById("gifContainer"); // Get container element to append GIFs

      gifContainer.innerHTML = "";

      // Append each GIF to the container
      gifs.forEach(function (gif) {
        const gifImage = document.createElement("img");
        gifImage.src = gif.images.fixed_height.url;
        gifContainer.appendChild(gifImage);
      });
    })
    .catch(function (error) {
      console.log(error); // Log any errors to the console
    });
});

// Get remove button element
const removeButton = document.getElementById("removeButton");

// Add event listener for remove button
removeButton.addEventListener("click", function () {
  const gifContainer = document.getElementById("gifContainer");
  gifContainer.innerHTML = "";
});
