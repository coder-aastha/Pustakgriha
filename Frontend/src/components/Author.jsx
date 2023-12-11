import author_img1 from "../images/author_img1.jpeg";
import author_img2 from "../images/author_img2.jpeg";
import author_img3 from "../images/author_img3.webp";
import author_img4 from "../images/author_img4.jpeg";
import author_img8 from "../images/author_img8.jpeg";
import author_img6 from "../images/author_img6.jpeg";
import author_img7 from "../images/author_img7.jpeg";

const Author = () => {
  return (
    <>
      <h5 className="author-title">AUTHOR</h5>
      <div className="main-author-container">
        <div className="logo-and-text">
          <a href="#">
            <img src={author_img1} />
            <div className="logo-text">Colleen Hoover</div>
          </a>
        </div>

        <div className="logo-and-text">
          <a href="#">
            <img src={author_img2} />
            <div className="logo-text">Holly Jackson</div>
          </a>
        </div>

        <div className="logo-and-text">
          <a href="#">
            <img src={author_img3} />
            <div className="logo-text">John Green</div>
          </a>
        </div>
        <div className="logo-and-text">
          <a href="#">
            <img src={author_img4} />
            <div className="logo-text">Tahereh Mafi</div>
          </a>
        </div>
        <div className="logo-and-text">
          <a href="#">
            <img src={author_img8} />
            <div className="logo-text">Kathleen Glasgow</div>
          </a>
        </div>
        <div className="logo-and-text">
          <a href="#">
            <img src={author_img6} />
            <div className="logo-text">Naomi Alderman</div>
          </a>
        </div>
        <div className="logo-and-text">
          <a href="#">
            <img src={author_img7} />
            <div className="logo-text">Adam Silvera</div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Author;
