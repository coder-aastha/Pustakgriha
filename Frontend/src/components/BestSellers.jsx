import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpeg";
import image13 from "../images/image13.jpeg";
import image14 from "../images/image14.jpeg";
import image15 from "../images/image15.jpeg";
import image6 from "../images/image6.png";

const BestSellers = () => {
  return (
    <>
      <h5 className="best-seller-title">BEST SELLER</h5>
      <div className="best-seller-main">
        <div className="best-seller-items">
          <a href="#">
            <div className="book-img">
              <img src={image1} alt="" />
            </div>
            <div className="book-text">
              <h4>SHATTER ME</h4>
              <p>Tahereh Mafi</p>
              <p>Rs. 798</p>
              <button className="add-to-cart-btn">ADD TO CART</button>
            </div>
          </a>
        </div>

        <div className="best-seller-items">
          <a href="#">
            <div className="book-img">
              <img src={image2} alt="" />
            </div>
            <div className="book-text">
              <h4>I FELL IN LOVE</h4>
              <h4>WITH HOPE</h4>
              <p>Lancali</p>
              <p>Rs. 589</p>
              <button className="add-to-cart-btn">ADD TO CART</button>
            </div>
          </a>
        </div>

        <div className="best-seller-items">
          <a href="#">
            <div className="book-img">
              <img src={image13} alt="" />
            </div>
            <div className="book-text">
            <h4>THE FUTURE</h4>
            {/* <h4>BLOOD</h4> */}
              <p>Naomi Alderman</p>
              <p>Rs. 589</p>
              <button className="add-to-cart-btn">ADD TO CART</button>
            </div>
          </a>
        </div>

        <div className="best-seller-items">
          <a href="#">
            <div className="book-img">
              <img src={image14} alt="" />
            </div>
            <div className="book-text">
              <h4>HEAT WAVES</h4>
              <p>Richard Castle</p>
              <p>Rs. 589</p>
              <button className="add-to-cart-btn">ADD TO CART</button>
            </div>
          </a>
        </div>

        <div className="best-seller-items">
          <a href="#">
            <div className="book-img">
              <img src={image15} alt="" />
            </div>
            <div className="book-text">
              <h4>THE FAULT IN </h4>
              <h4>OUR STARS</h4>
              <p>John Green</p>
              <p>Rs. 879</p>
              <button className="add-to-cart-btn">ADD TO CART</button>
            </div>
          </a>
        </div>

        <div className="best-seller-items for-fixing">
          <a href="#">
            <div className="book-img">
              <img src={image6} alt="" />
            </div>
            <div className="book-text">
            <h4>REGRETTING</h4>
            <h4>YOU</h4>
              <p>Colleen Hoover</p>
              <p>Rs. 589</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default BestSellers;
