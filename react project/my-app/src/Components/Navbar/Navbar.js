import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header-main">
      <div className="header-container">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="logo">
          <img src="assets/logo.png" alt="" />
        </div>
        <div className="header-section3">
          <Link to="/cart"> Cart </Link>
          <Link to="/sign-in">Sign Out</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
