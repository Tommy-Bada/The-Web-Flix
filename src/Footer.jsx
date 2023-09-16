import faceboook from "./assets/facebooksquare.svg";
import IG from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";
import youtube from "./assets/youtube.svg";

function Footer() {
  return (
    <div className="w-[fit-content] mx-[auto] text-center py-10">
      <div className="flex items-center gap-8 w-[fit-content] mx-[auto] ">
        <div>
          <img src={faceboook} alt="facebook logo" />
        </div>
        <div>
          <img src={IG} alt="IG logo" />
        </div>
        <div>
          <img src={twitter} alt="Twitter logo" />
        </div>
        <div>
          <img src={youtube} alt="Youtube logo" />
        </div>
      </div>
      <div className="flex items-center gap-8 flex-wrap my-[20px]">
        <p>
          <a href="#">Conditions of Use</a>
        </p>
        <p>
          <a href="#">Privacy & Policy</a>
        </p>
        <p>
          <a href="#">Press Room</a>
        </p>
      </div>
      <p>© 2023 Webflix by BadaScript</p>
    </div>
  );
}
export default Footer;
