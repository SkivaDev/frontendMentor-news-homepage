import React, { useState } from "react";
import "./navbar.scss";
function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
  }

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
        <button class="toggle_btn" onClick={handleToggleClick}>
          <img src="./assets/images/icon-menu.svg" alt="icon-menu"/>
        </button>
      </nav>
      <div class={`dropdown_menu ${isOpen ? "open" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">New</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Categories</a></li>
          <button className="icon-close" onClick={handleToggleClick}>
            <img src="./assets/images/icon-menu-close.svg" alt="icon-close"/>
          </button>
      </div>
    </header>
  );
}

export default Navbar;
