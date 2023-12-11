import khalti from "../images/khalti.png";
import cashOnDelivery from "../images/cashOnDelivery.png";

const FooterUI = () => {
  return (
    <>
      {/* <p>
        "buy books online in nepal, online bookstore nepal, largest online
        bookstore in Nepal, buy books nepal, buy nepali books online, online
        bookshop nepal, buy books online nepal, bookshop, Shop books"
      </p> */}

      <div className="footer-main">
        <div className="footer-titles">
          <div className="footer-left-end-section">
            <h5>Physical Location</h5>
            <p>Currently</p>
            <p>Unavailable</p>
          </div>

          <div>
            <h5>Popular Genres</h5>
            <a href="#">
              <p>Fiction</p>
            </a>
            <a href="#">
              <p>Kids & Teen</p>
            </a>
          </div>

          <div>
            <h5>Support</h5>
            <a href="#">
              <p>Mobile</p>
            </a>
            <a href="#">
              <p>Email</p>
            </a>
          </div>

          <div className="footer-right-end-section">
            <h5>About</h5>
            <a href="#">
              <p>About Us</p>
            </a>
            <a href="#">
              <p>Contact Us</p>
            </a>
          </div>
        </div>

        <div className="payment-copyright">
          <div className="payment-options">
            <h6>
              <i>Payment Options:</i>{" "}
            </h6>
            <img src={khalti} />
            <img src={cashOnDelivery} />
          </div>
          <div className="copyright">
            <p>
              <i>&copy; Copyright Protected by Pustakgriha</i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterUI;
