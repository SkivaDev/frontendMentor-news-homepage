import React from "react";
import "./navbar.scss";
import { GiHamburgerMenu } from 'react-icons/gi'
function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__logo"><a href="#">Web.</a></div>
        <ul class="navbar__links">
          <li><a href="#">Home</a></li>
          <li><a href="#">New</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Categories</a></li>
        </ul>
        <div class="toggle_btn">
          <GiHamburgerMenu/>
        </div>
      </nav>
      <div class="dropdown_menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">New</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Categories</a></li>
      </div>
    </header>
  );
}

export default Navbar;
