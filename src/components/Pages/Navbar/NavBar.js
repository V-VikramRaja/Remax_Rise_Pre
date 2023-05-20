import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../../images/logo.jpeg";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact="true" to="/">
            <img src={logo} alt="Logo" className="nav-main-logo" />
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact="true"
                to="/buy"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Buy
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/sell"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sell
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/Rent"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                Rent
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact="true"
                to="/about"
                activeclassname="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <button className="contact-us-btn">
              <NavLink
                exact="true"
                to="/contact"
                activeclassname="active"
                className="contact-us-nav-link"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </button>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
