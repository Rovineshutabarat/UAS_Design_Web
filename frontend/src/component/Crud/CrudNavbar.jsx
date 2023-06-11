import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Navbar/Clicked.css";

const CrudNavbar = () => {
  const [menu, setMenu] = useState(
    "https://img.icons8.com/ios/50/menu--v1.png"
  );
  const [listStyle, setListStyle] = useState("hidden");
  const [isClicked, setIsClicked] = useState(false);

  const handleMenuCLicked = () => {
    menu === "https://img.icons8.com/ios/50/menu--v1.png"
      ? setMenu("https://img.icons8.com/material-outlined/96/multiply--v1.png")
      : setMenu("https://img.icons8.com/ios/50/menu--v1.png");
    listStyle === "hidden" ? setListStyle("flex") : setListStyle("hidden");
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`fixed top-0 z-50 w-full h-20 navbarAnimation shadow-md bg-white`}
    >
      <NavbarComponent menu={menu} handleMenuCLicked={handleMenuCLicked} />
      <HamburgerClicked listStyle={listStyle} isClicked={isClicked} />
    </div>
  );
};

const NavbarComponent = ({ menu, handleMenuCLicked }) => {
  return (
    <div className="flex items-center justify-between p-5">
      <Navbarlogo />
      <Navbarlist />
      <HamburgerMenu menu={menu} handleMenuCLicked={handleMenuCLicked} />
    </div>
  );
};

const Navbarlogo = () => {
  return (
    <div className="flex items-center text-[20px] font-medium xl:ml-14 lg:ml-14 md:ml-14 sm:ml-7 ml-5">
      <img
        src="https://img.icons8.com/ios/50/shop--v1.png"
        alt=""
        className="h-8 mr-3"
      />
      <p className="tracking-widest">Prooked</p>
    </div>
  );
};

const Navbarlist = () => {
  return (
    <div className="hidden md:mr-10 xl:mr-24 lg:mr-20 lg:flex xl:flex md:flex">
      <ul className="flex mt-2 font-medium gap-x-10">
        <Link to={"/*"}>
          <li className="border-black cursor-pointer hover:border-b-2">Home</li>
        </Link>
        <Link to={"/admin"}>
          <li className="border-black cursor-pointer hover:border-b-2">
            Admin Page
          </li>
        </Link>
        <li className="border-black cursor-pointer hover:border-b-2">Cart</li>
      </ul>
    </div>
  );
};

const HamburgerMenu = ({ menu, handleMenuCLicked, fadeAnimation }) => {
  return (
    <div className="flex items-center mr-5 sm:mr-10 xl:hidden lg:hidden md:hidden">
      <img
        src={menu}
        alt=""
        onClick={handleMenuCLicked}
        className="transition-all cursor-pointer h-7 w-7"
        style={fadeAnimation}
      />
    </div>
  );
};

const HamburgerClicked = ({ listStyle, isClicked }) => {
  return (
    <div
      className={`${listStyle} xl:hidden lg:hidden md:hidden transition-all `}
    >
      <div
        className={`flex justify-center w-full text-white transition-all h-40 bg-black ${
          isClicked ? "expanded" : ""
        }`}
      >
        <ul
          className={`p-5 mb-4 text-center border-b-2 border-white ${
            isClicked ? "expanded" : ""
          }`}
        >
          <Link to={"/*"}>
            <li
              className={`mb-1 cursor-pointer ${
                isClicked ? "listAnimation" : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Link to={"/admin"}>
            <li
              className={`mb-1 cursor-pointer ${
                isClicked ? "listAnimation" : ""
              }`}
            >
              Admin Page
            </li>
          </Link>
          <li
            className={`mb-1 cursor-pointer ${
              isClicked ? "listAnimation" : ""
            }`}
          >
            Cart
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CrudNavbar;
