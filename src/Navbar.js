import { Link, NavLink } from "react-router-dom";
import {
  faHouse,
  faAngleDown,
  faCircleQuestion,
  faBoxOpen,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from "./Images";

function Navbr() {
  let activeClassName = "nav-active";
  let notrActiveClassName = "nav-notActive";
  return (
    <nav>
      <ul className="navbar">
        <li className="logo-container">
          <Link to="/" className="logo-container">
            <img className="nav-logo" alt="logo" src={images[2].src} />
            <h1 className="logo-name">Al-Sharief</h1>
          </Link>
        </li>
        <div className="nav-links">
          <li className="nav-btn">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : notrActiveClassName
              }
              to="/home"
            >
              <FontAwesomeIcon icon={faHouse} /> Home
            </NavLink>{" "}
          </li>
          <li className="nav-btn">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : notrActiveClassName
              }
              to="/about"
            >
              <FontAwesomeIcon icon={faCircleQuestion} /> About
            </NavLink>{" "}
          </li>
          <li className="nav-btn products">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : notrActiveClassName
              }
              to="/Products"
            >
              <FontAwesomeIcon icon={faBoxOpen} /> Products{" "}
              <FontAwesomeIcon icon={faAngleDown} />
            </NavLink>{" "}
            <div className="submenu">
              <Link to="/" className="submenu-item">
                ddfdf
              </Link>
              <Link to="/" className="submenu-item">
                ddfdf
              </Link>
              <Link to="/" className="submenu-item">
                ddfdf
              </Link>
            </div>
          </li>
          <li className="nav-btn">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : notrActiveClassName
              }
              to="/contact"
            >
              <FontAwesomeIcon icon={faAddressCard} /> Contact Us{" "}
            </NavLink>{" "}
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbr;
