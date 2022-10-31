import React from "react";
import { NavLink } from "react-router-dom";
function Navbr() {
  return (
    <nav>
      <ul className="navbar">
        <li className="nav-btn">
          <NavLink classname="nav-link" to="/">
            Home
          </NavLink>{" "}
        </li>
        <li className="nav-btn">
          <NavLink classname="nav-link" to="/About">
            About
          </NavLink>{" "}
        </li>
        <li className="nav-btn">
          <NavLink classname="nav-link" to="/Products">
            Products
          </NavLink>{" "}
        </li>
        <li className="nav-btn">
          <NavLink classname="nav-link" to="/contact">
            Contact Us{" "}
          </NavLink>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default Navbr;
