import React, { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import "./Clicked.css";

const Navbar = () => {
  const [menu, setMenu] = useState(
    "https://img.icons8.com/ios/50/menu--v1.png"
  );
  const [listStyle, setListStyle] = useState("hidden");
  const [isClicked, setIsClicked] = useState(false);
  const [navbarColor, setNavbarColor] = useState("transparent");
  const [shadow, setShadow] = useState("");
  const [zIndex, setZIndex] = useState("");
  const [imageLogo, setImageLogo] = useState(
    "https://img.icons8.com/ios-filled/50/FFFFFF/shop.png"
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 0) {
        setNavbarColor("white");
        setShadow("shadow-md");
        setZIndex("z-50");
        setImageLogo("https://img.icons8.com/ios/50/shop--v1.png");
      } else {
        setNavbarColor("transparent");
        setShadow("");
        setImageLogo("https://img.icons8.com/ios-filled/50/FFFFFF/shop.png");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuCLicked = () => {
    menu === "https://img.icons8.com/ios/50/menu--v1.png"
      ? setMenu("https://img.icons8.com/material-outlined/96/multiply--v1.png")
      : setMenu("https://img.icons8.com/ios/50/menu--v1.png");
    listStyle === "hidden" ? setListStyle("flex") : setListStyle("hidden");
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`fixed top-0 ${zIndex} w-full h-20 navbarAnimation ${shadow} ${
        navbarColor === "white" ? "bg-white" : "bg-transparent"
      }`}
    >
      <NavbarComponent
        menu={menu}
        handleMenuCLicked={handleMenuCLicked}
        navbarColor={navbarColor}
        imageLogo={imageLogo}
      />
      <HamburgerClicked listStyle={listStyle} isClicked={isClicked} />
    </div>
  );
};

const NavbarComponent = ({
  menu,
  handleMenuCLicked,
  navbarColor,
  imageLogo,
}) => {
  return (
    <div className="flex items-center justify-between p-5">
      <Navbarlogo navbarColor={navbarColor} imageLogo={imageLogo} />
      <Navbarlist />
      <HamburgerMenu menu={menu} handleMenuCLicked={handleMenuCLicked} />
    </div>
  );
};

const Navbarlogo = ({ navbarColor, imageLogo }) => {
  return (
    <div
      className={`flex items-center text-[20px] font-medium xl:ml-14 lg:ml-14 md:ml-14 sm:ml-7 ml-5 ${
        navbarColor === "white" ? "text-black" : "text-white"
      }`}
    >
      <img src={imageLogo} alt="" className="h-8 mr-3" />
      <p className="tracking-widest">Prooked</p>
    </div>
  );
};

const Navbarlist = () => {
  const scrollToFooter = () => {
    animateScroll.scrollTo(3000);
  };
  const scrollToTop = () => {
    animateScroll.scrollTo(0);
  };
  const scrollToAbout = () => {
    animateScroll.scrollTo(600);
  };
  const scrollToServices = () => {
    animateScroll.scrollTo(2300);
  };

  return (
    <div className="hidden md:mr-10 xl:mr-24 lg:mr-20 lg:flex xl:flex md:flex">
      <ul className="flex mt-2 font-medium gap-x-10">
        <li
          className="border-black cursor-pointer hover:border-b-2"
          onClick={scrollToTop}
        >
          Home
        </li>
        <li
          className="border-black cursor-pointer hover:border-b-2"
          onClick={scrollToAbout}
        >
          About
        </li>
        <li
          className="border-black cursor-pointer hover:border-b-2"
          onClick={scrollToServices}
        >
          Services
        </li>
        <li
          className="border-black cursor-pointer hover:border-b-2"
          onClick={scrollToFooter}
        >
          Contact
        </li>
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
  const scrollToHome = () => {
    animateScroll.scrollTo(0);
  };
  const scrollToAbout = () => {
    animateScroll.scrollTo(350);
  };
  const scrollToServices = () => {
    animateScroll.scrollTo(2650);
  };
  const scrollToFooter = () => {
    animateScroll.scrollTo(4000);
  };

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
          <li
            className={`mb-1 cursor-pointer ${
              isClicked ? "listAnimation" : ""
            }`}
            onClick={scrollToHome}
          >
            Home
          </li>
          <li
            className={`mb-1 cursor-pointer ${
              isClicked ? "listAnimation" : ""
            }`}
            onClick={scrollToAbout}
          >
            About
          </li>
          <li
            className={`mb-1 cursor-pointer ${
              isClicked ? "listAnimation" : ""
            }`}
            onClick={scrollToServices}
          >
            Services
          </li>
          <li
            className={`mb-1 cursor-pointer ${
              isClicked ? "listAnimation" : ""
            }`}
            onClick={scrollToFooter}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;