import React from "react";
import "./navbar.scss";
function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__logo">
          <img src="./assets/images/logo.svg" alt="logo" />
        </div>
        <ul class="navbar__links">
          <li><a href="#">Home</a></li>
          <li><a href="#">New</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Categories</a></li>
        </ul>
        <div class="toggle_btn">
          <img src="./assets/images/icon-menu.svg" alt="icon-menu"/>
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
