import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Footer from "./Footer";

function MovieDetails() {
  const { id } = useParams();
  console.log(id);

  const [dets, setDets] = useState({});
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTIzNGUxNTkzM2IzYzY5NTg3MDcyZjk0NDMzOThhYSIsInN1YiI6IjY0ZTRjMWJiNTk0Yzk0MDEzOWM2ZDJkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s2_Pj18sHkIoFID-hR8OfgY48Q3xZw-YLMrc_iT6JyA",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then((response) => response.json())
      .then((response) => setDets(response))
      .catch((err) => console.error(err));
  }, []);

  console.log(dets);
  return (
    <>
      <div className="flex">
        {/* <SideBar /> */}
        <div className="p-8">
          <div>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${dets.backdrop_path}`}
                alt="Trailer Thumbnail"
              />
            </div>
            <div>
              <div>
                <p className="text-[28px]" data-testid="movie-title">
                  {dets.title}
                </p>
                <p className="text-[20px]" data-testid="movie-release-date">
                  {dets.release_date}
                </p>
                <p className="text-[18px]" data-testid="movie-runtime">
                  {dets.runtime}
                </p>
              </div>
            </div>
            <p data-testid="movie-overview">{dets.overview}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default MovieDetails;
