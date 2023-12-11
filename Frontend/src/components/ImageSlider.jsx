import React from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import image7 from "../images/image7.jpg";
import image10 from "../images/image10.png";
import image11 from "../images/image11.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

const ImageSlider = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval={1000}
        data-bs-pause="hover"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={image11}
              className="d-block w-100 slider-image"
              alt="..."
            />
          </div>
          <div className="carousel-item" style={{ backgroundColor: "green" }}>
            {/* Replace the "..." with the actual source of your image */}
            <img
              src="path/to/your/image2.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" style={{ backgroundColor: "yellow" }}>
            {/* Replace the "..." with the actual source of your image */}
            <img
              src="path/to/your/image3.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleSlidesOnly"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleSlidesOnly"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default ImageSlider;
