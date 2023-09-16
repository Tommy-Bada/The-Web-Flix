import tv from "./assets/tv.svg";
import play from "./assets/Play.svg";
import imdb from "./assets/imdb.svg";
import rt from "./assets/rotten-Tomatoes.svg";
function Header() {
  console.log("akin");
  return (
    <div className="bg-hero-poster text-white">
      <div className="flex items-center justify-between py-[30px] px-[50px]  max-[720px]:p-[20px]">
        <div className="flex items-center">
          <div className="mr-4">
            <img src={tv} alt="Webflix Logo" />
          </div>
          <h1 className="text-[24px] max-[720px]:hidden">Webflix</h1>
        </div>
        <div className="w-[50%] max-[720px]:w-[100%]">
          <input
            className="bg-transparent border-solid border-white border-2 p-2 rounded-xl w-[100%]"
            type="text"
            placeholder="What do you want to watch?"
          />
        </div>
        <div className="flex items-center max-[720px]:hidden ">
          <p className="mr-2 text-[16px]">Sign in</p>
          <div className=" bg-red-700 rounded-[50%] py-4 px-[13px]">
            <div className="w-[15px] bg-white  h-[2px]"></div>
            <div className="w-[15px] bg-white  h-[2px] mt-1"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pl-[50px] pt-[60px] pb-[100px] max-[720px]:p-[20px]">
        <div className="w-[30%]  max-[720px]:w-[100%]">
          <h1 className="text-[48px] leading-[56px]">
            John Wick 3 : Parabellum
          </h1>
          <div className="flex items-center mt-2">
            <div className="flex items-center mr-10">
              <div className="mr-2">
                <img src={imdb} alt="IMDB Logo" />
              </div>
              <p className="text-[12px]">860/100</p>
            </div>
            <div className="flex items-center">
              <div className="mr-2">
                <img src={rt} alt="Rotten Tomatoes Logo" />
              </div>
              <p className="text-[12px]">97%</p>
            </div>
          </div>
          <p className="text-[14px] py-4">
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <a href="#">
            <div className="flex items-center bg-red-600 py-2 px-4 rounded w-[fit-content]">
              <div className="mr-2">
                <img src={play} alt="play icon" />
              </div>
              <p className="text-[14px]">WATCH TRAILER</p>
            </div>
          </a>
        </div>
        <div className=" pr-4 max-[720px]:invisible">
          <div className="flex items-center">
            <div className="w-[25px] h-[2px] bg-white mr-2 invisible"></div>
            <p>1</p>
          </div>
          <div className="flex items-center">
            <div className="w-[25px] h-[2px] bg-white mr-2 invisible"></div>
            <p>2</p>
          </div>
          <div className="flex items-center">
            <div className="w-[25px] h-[2px] bg-white mr-2"></div>
            <p>3</p>
          </div>
          <div className="flex items-center">
            <div className="w-[25px] h-[2px] bg-white mr-2 invisible"></div>
            <p>4</p>
          </div>
          <div className="flex items-center">
            <div className="w-[25px] h-[2px] bg-white mr-2 invisible"></div>
            <p>5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
