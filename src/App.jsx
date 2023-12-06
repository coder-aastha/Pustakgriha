import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import Genres from "./components/Genres";
import BestSellers from "./components/BestSellers";
import NewArrivals from "./components/NewArrivals";
import Author from "./components/Author";

function App() {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <Genres />
      <BestSellers />
      <NewArrivals />
      <Author />
    </>
  );
}

export default App;
