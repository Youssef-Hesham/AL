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
          <Link to="/" className="logo-link">
            <img className="nav-logo" alt="logo" src="s.png" />
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
            <Link to="/news" className="submenu-item">
              News
            </Link>
            <Link to="/partners" className="submenu-item">
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
              to="/news"
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
              <Link to="/lifeScience" className="submenu-item">
                Life Science
              </Link>
              <Link to="/pcb" className="submenu-item">
                PCB Testing
              </Link>
              <Link to="/restoration" className="submenu-item">
                Restoration & Preservation
              </Link>
              <Link to="/enviromental" className="submenu-item">
                Enviromental Equipment
              </Link>
              <Link to="/lab" className="submenu-item">
                Laboratory Equipment
              </Link>
              <Link to="/Material" className="submenu-item">
                Construction Matrial Testing
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
