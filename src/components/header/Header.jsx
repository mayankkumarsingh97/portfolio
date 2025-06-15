import React from "react";
import LOGO from "../../assets/icons/logo.png";
import "./index.css";
//
const Header = () => {
  //
  //

  return (
    <header className="header">
      <div className="logo">
        <img src={LOGO} alt="Brand Logo" />
      </div>

      <nav className="nav">
        <a href="#" className="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="hire-button">
        <a href="#">Hire Me</a>
      </div>
    </header>
  );
};
export default Header;
