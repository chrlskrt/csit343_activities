const moviesDiv = document.querySelector("#movies-div");

fetch("https://movieapp-api-lms1.onrender.com/movies/getMovies")
  .then(function (response) {
    console.log(response);
    if (!response.ok) {
      return response.json().then((errorData) => {
        throw new Error(
          errorData.message || "Unexpected error: " + response.status
        );
      });
    }

    return response.json();
  })
  .then(function (data) {
    console.log(data);
    showMovies(data.movies);
  })
  .catch(function (error) {
    console.log(error);
    moviesDiv.innerHTML = "No movies found.";
  });

function showMovies(movies) {
  moviesDiv.innerHTML = ""; // clear movie div

  movies.forEach((movie) => {
    let movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.id = movie.id;
    movieCard.innerHTML = `
      <img src="./images/movie-icon.png" alt="Movie Poster">
      <div class="movie-details">
        <p class="movie-title">${movie.title}</p>
        <p class="movie-genre">${movie.genre}</p>
      </div> 
    `;

    moviesDiv.appendChild(movieCard);
  });
}
