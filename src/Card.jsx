import heart from "./assets/Heart.svg";
import imdb from "./assets/imdb.svg";
import rt from "./assets/rotten-tomatoes.svg";

function Card(props) {
  return (
    <div className="w-[250px]" data-testid:movie-card>
      <div className="flex items-center justify-between relative top-14 p-3">
        <p className="text-[12px] bold bg-[#F3F4F650] py-1 px-4 rounded-2xl">
          TV SERIES
        </p>
        <div className="bg-[#F3F4F650] p-1 rounded-[50%]">
          <img src={heart} alt="love-icon" />
        </div>
      </div>
      <div className="mb-2">
        <img data-testid:movie-poster src={props.poster} alt="movie-poster" />
      </div>
      <p className="text-[12px] text-[#9CA3AF]" data-testid:movie-release-date>
        {props.releaseDate}
      </p>
      <h2 className="text-[18px] bold w-[100%] my-1" data-testid:movie-title>
        {props.title}
      </h2>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center">
          <div className="mr-2">
            <img src={imdb} alt="IMDB Logo" />
          </div>
          <p className="text-[12px]">{props.imdbRating}</p>
        </div>
        <div className="flex items-center invisible">
          <div className="mr-2 ">
            <img src={rt} alt="Rotten Tomatoes Logo" />
          </div>
          <p className="text-[12px]">{props.rtRating}</p>
        </div>
      </div>
      <p className="text-[#9CA3AF] bold text-[12px] mt-2">{props.genre}</p>
    </div>
  );
}

export default Card;
