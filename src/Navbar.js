import { Link, NavLink } from "react-router-dom";
import {
  faHouse,
  faAngleDown,
  faCircleQuestion,
  faBoxOpen,
  faAddressCard,
  faNewspaper,
  faHandshake,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import images from "./Images";

function toggleVisibility() {
  var x = document.getElementById("PM");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}

function Navbr() {
  let activeClassName = "nav-active";
  let notrActiveClassName = "nav-notActive";
  return (
    <nav>
      <ul className="navbar">
        <li className="logo-container">
          <Link to="/" className="logo-container">
            <img className="nav-logo" alt="logo" src={images[3].src} />
          </Link>
        </li>
        <li
          className="nav-btn phone-bars"
          onClick={() => {
            toggleVisibility();
          }}
        >
          <FontAwesomeIcon icon={faBars} />
          <div id="PM" className="phone-menu">
            <Link to="/" className="submenu-item">
              Home
            </Link>
            <Link to="/about" className="submenu-item">
              About
            </Link>
            <Link to="/contact" className="submenu-item">
              News
            </Link>
            <Link to="/contact" className="submenu-item">
              Partners
            </Link>
            <Link to="/products" className="submenu-item">
              Products
            </Link>
            <Link to="/contact" className="submenu-item">
              Contact Us
            </Link>
          </div>
        </li>
        <div className="nav-links">
          <li className="nav-btn">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : notrActiveClassName
              }
              end
              to="/"
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
          <li className="nav-btn">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : notrActiveClassName
              }
              to="/about"
            >
              <FontAwesomeIcon icon={faNewspaper} /> News
            </NavLink>{" "}
          </li>
          <li className="nav-btn">
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : notrActiveClassName
              }
              to="/partners"
            >
              <FontAwesomeIcon icon={faHandshake} /> Partners
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
                Circuit Testing
              </Link>
              <Link to="/" className="submenu-item">
                lab research
              </Link>
              <Link to="/" className="submenu-item">
                Others
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
