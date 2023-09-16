import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Footer from "./Footer";

function Homepage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTIzNGUxNTkzM2IzYzY5NTg3MDcyZjk0NDMzOThhYSIsInN1YiI6IjY0ZTRjMWJiNTk0Yzk0MDEzOWM2ZDJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s2_Pj18sHkIoFID-hR8OfgY48Q3xZw-YLMrc_iT6JyA",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response))
      .catch((err) => console.error(err));
  }, []);

  const moviesGrid = movies?.results?.slice(0, 10).map((movie) => {
    return (
      <Link to={`/${movie.id}`}>
        <Card
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          imdbRating={movie.vote_average}
          rtRating={movie.popularity}
          genre={movie.movieGenre}
          poster={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        />
      </Link>
    );
  });

  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center">{moviesGrid}</div>
      <Footer />;
    </>
  );
}
export default Homepage;
