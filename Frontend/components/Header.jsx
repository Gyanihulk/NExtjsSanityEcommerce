import React, { useEffect } from "react";

const Header = ({ categories }) => {
 useEffect(()=>{},[categories])
  return (
    <div id="header_content">
      <div className="first_h">
        <p>⚡️ Next JS ⚡️ Sanity ⚡️</p>
      </div>
      <div className="second_h">
        <nav className="nav_f">
          {categories?categories.map((category)=>(
            <a href="" className="link" key={category.title}>
            {category.title}
          </a>
          )):""}
        </nav>
        <div className="logo_area">
          <a href="" className="logo_link">
            <h2 className="logo">E-commerce.</h2>
          </a>
        </div>
        <div className="drawer_icon">
          <a href="">
            <span className="dot">
              <i className="fa-solid fa-bars"></i>
            </span>
          </a>
        </div>

        <div className="icons">
          <ul>
            <li className="list">
              <i className="fa-solid fa-magnifying-glass"></i>
            </li>
            <li className="list">
              <i className="fa-regular fa-user"></i>
            </li>
            <li className="list">
              <i className="fa-regular fa-heart"></i>
            </li>
            <li className="list">
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
