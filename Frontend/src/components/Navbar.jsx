import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import main_logo from "../images/main_logo.png";
import { TbWorld } from "react-icons/tb";
import UserLogin from "./UserLogin";

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
          <button onClick={UserLogin}>
            <span className="icon">
              <LuUser />
            </span>
          </button>

          <button>
            <span className="icon">
              <PiShoppingCartSimpleBold />
            </span>
          </button>

          <button>
            <span className="icon">
              <MdOutlineLightMode />
            </span>
          </button>

          <button>
            <span className="icon">
              <TbWorld />
            </span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
