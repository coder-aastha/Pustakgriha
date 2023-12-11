import image4 from "../images/image4.png";
import image10 from "../images/image10.png";
import image3 from "../images/image3.png";

const NewArrivals = () => {
  return (
    <>
      <h5 className="new-arrivals-title">NEW ARRIVALS</h5>
      <div className="new-arrivals-main">
        <div className="best-seller-items">
          <a href="#">
            <div className="book-img">
              <img src={image4} alt="" />
            </div>
            <div className="book-text">
              <h4>VERITY</h4>
              <p>Colleen Hoover</p>
              <p>Rs. 698</p>
              <button className="add-to-cart-btn">ADD TO CART</button>
            </div>
          </a>
        </div>

        <div className="best-seller-items">
          <a href="#">
            <div className="book-img">
              <img src={image3} alt="" />
            </div>
            <div className="book-text">
              <h4>THE CRUEL</h4>
              <h4>PRINCE</h4>
              <p>Holly Black</p>
              <p>Rs. 589</p>
              <button className="add-to-cart-btn">ADD TO CART</button>
            </div>
          </a>
        </div>

        <div className="best-seller-items">
          <a href="#">
            <div className="book-img">
              <img src={image10} alt="" />
            </div>
            <div className="book-text">
              <h4>GIRL IN PIECES</h4>
              {/* <h4>BLOOD</h4> */}
              <p>Cathleen Glasgon</p>
              <p>Rs. 638</p>
              <button className="add-to-cart-btn">ADD TO CART</button>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
