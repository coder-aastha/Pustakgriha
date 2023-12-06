import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import main_logo from "../images/main_logo.png";
import { TbWorld } from "react-icons/tb";

const Navbar = () => {
  return (
    <>
      <header className="main-container">
        <div className="logo-div">
          <img className="logo-img" src={main_logo} alt="Pustakgriha" />
        </div>

        <div className="search-bar">
          <div className="search-input">
            <input
              type="text"
              placeholder="&nbsp; Search for books you love and explore our extensive collection..."
              className="search-input"
            />
          </div>
          <span className="search-icon">
            <IoSearchOutline />
          </span>
        </div>

        <div className="icon-right">
          <a href="#"><span className="icon"><LuUser /></span></a>
          <a href="#"><span className="icon"><PiShoppingCartSimpleBold /></span></a>
          <a href="#"><span className="icon"><MdOutlineLightMode /></span></a>
          <a href="#">
          <span className="icon"><TbWorld /></span></a>
          </div>
          
          
          
      </header>
    </>
  );
};

export default Navbar;
