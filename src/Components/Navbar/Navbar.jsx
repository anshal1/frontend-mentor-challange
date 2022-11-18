import React from "react";
import "./Navbar.css";
import "../Home/Home.css";
import logo from "../../images/logo.svg";
import menu from "../../images/icon-menu.svg";
import coss from "../../images/icon-menu-close.svg";
import { useState } from "react";
const Navbar = () => {
  const [ShowNav, setShowNav] = useState("menu_box");
  return (
    <>
      <div className="main_navbar_container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu_btn_for_smaller_devices">
          <img
            src={menu}
            onClick={() => {
              if (ShowNav === "menu_box") {
                setShowNav("menu_box_show");
              } else {
                setShowNav("menu_box");
              }
            }}
            alt=""
          />
          <div className={ShowNav}>
            <div className="cross_btn">
              <img
                src={coss}
                onClick={() => {
                  if (ShowNav === "menu_box") {
                    setShowNav("menu_box_show");
                  } else {
                    setShowNav("menu_box");
                  }
                }}
                alt=""
              />
            </div>
            <div className="options">
              <p className="desktop_menu_options">Home</p>
              <p className="desktop_menu_options">New</p>
              <p className="desktop_menu_options">Popular</p>
              <p className="desktop_menu_options">Trending</p>
              <p className="desktop_menu_options">Categories</p>
            </div>
          </div>
        </div>
        <div className="menu_for_desktop">
          <p className="desktop_menu_options">Home</p>
          <p className="desktop_menu_options">New</p>
          <p className="desktop_menu_options">Popular</p>
          <p className="desktop_menu_options">Trending</p>
          <p className="desktop_menu_options">Categories</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
