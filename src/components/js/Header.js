import React from "react";
import "../css/Header.css";

const Header = () => {
  return (
    <section>
      <div className="Header-container">
        <header className="Navigation">
          <a href="/">Why Github? </a>
          <a href="/">Team </a>
          <a href="/">Enterprise </a>
          <a href="/">Explore </a>
          <a href="/">Marketplace </a>
          <a href="/">Pricing </a>
        </header>
        <header className="Searchbar-container">
          <input className="Searchbar" type="text" placeholder="Search" />
          <button className="Searchbutton">Enter</button>
        </header>
      </div>
    </section>
  );
};

export default Header;
