import logo1 from "../images/logo1.png";
import logo2 from "../images/logo2.webp";
import logo3 from "../images/logo3.jpeg";
import logo4 from "../images/logo4.webp";
import logo9 from "../images/logo9.jpeg";
import logo6 from "../images/logo6.png";
import logo7 from "../images/logo7.jpeg";

const Genres = () => {
  return (
    <>
    <h5 className="genre-title">GENRES</h5>
      <div className="main-genre-container">
        <div className="logo-and-text">
          <a href="#">
            <img src={logo1} />
            <div className="logo-text">Fiction</div>
          </a>
        </div>

        <div className="logo-and-text">
          <a href="#">
            <img src={logo2} />
            <div className="logo-text">Biography</div>
          </a>
        </div>

        <div className="logo-and-text">
          <a href="#">
            <img src={logo3} />
            <div className="logo-text">Historical</div>
          </a>
        </div>
        <div className="logo-and-text">
          <a href="#">
            <img src={logo4} />
            <div className="logo-text">Kids & Teen</div>
          </a>
        </div>
        <div className="logo-and-text">
          <a href="#">
            <img src={logo9} />
            <div className="logo-text">Photography</div>
          </a>
        </div>
        <div className="logo-and-text">
          <a href="#">
            <img src={logo6} />
            <div className="logo-text">Inventory</div>
          </a>
        </div>
        <div className="logo-and-text">
          <a href="#">
            <img src={logo7} />
            <div className="logo-text">Improvement</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Genres;
