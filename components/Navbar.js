import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "../public/goldshield-logo.webp";
import NavItem from "./NavItem";
import { AiOutlineClose } from 'react-icons/ai';

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Services", href: "/services" },
  { text: "Locations", href: "/locations" },
  // { text: "Blog", href: "/blogs" },
  { text: "Contact", href: "/booking" }
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  const [navbar, setNavbar] = useState(false);

  const changeFontOnScroll = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };


  //
  useEffect(() => {
    window.addEventListener("scroll", changeFontOnScroll, true);
    return () => window.removeEventListener("scroll", changeFontOnScroll);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 750) {
      setNavActive(null);
    }
  }, []);

  return (
    <header>
      <nav className={navbar ? "test" : "naver"}>
        <Link href={"/"}>
            <h1 className="logo"><img src='/goldshield-logo.webp' alt='Brand Logo' className="nav-brand-logo"></img></h1>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          <div className="active-close-div"><AiOutlineClose className="active-close" onClick={() => setNavActive(!navActive)} /></div>
          <p className="active-header">Menu</p>
          <hr className="active-hr"></hr>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              className='nav-link'
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
          <div className="active-img-div"><img src='/goldshield-logo.webp' alt='Brand Logo' className="active-logo"></img></div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;