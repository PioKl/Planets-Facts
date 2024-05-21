import React, { useRef, useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import "../styles/Header.scss";
import hamburgerMenuIcon from "../assets/icon-hamburger.svg";

interface HeaderProps {
  mainRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({ mainRef }) => {
  const bodyRef = useRef<HTMLBodyElement>(document.body as HTMLBodyElement);
  const btnOpen = useRef<HTMLButtonElement>(null);
  const btnClose = useRef<HTMLButtonElement>(null);
  const topNavMenu = useRef<HTMLDivElement>(null);

  const handleBtnOpen = () => {
    btnOpen.current && btnOpen.current.setAttribute("aria-expanded", "true");

    topNavMenu.current && topNavMenu.current.removeAttribute("inert");
    topNavMenu.current && topNavMenu.current.removeAttribute("style");
    mainRef.current && mainRef.current.setAttribute("inert", "");

    bodyRef.current && disableBodyScroll(bodyRef.current);
    btnClose.current && btnClose.current.focus();
  };

  function closeMobileMenu() {
    btnOpen.current && btnOpen.current.setAttribute("aria-expanded", "false");
    topNavMenu.current && topNavMenu.current.setAttribute("inert", "");
    mainRef.current && mainRef.current.removeAttribute("inert");
    bodyRef.current && enableBodyScroll(bodyRef.current);
    btnOpen.current && btnOpen.current.focus();

    setTimeout(() => {
      topNavMenu.current && (topNavMenu.current.style.transition = "none");
    }, 500);
  }
  const handleBtnClose = () => {
    closeMobileMenu();
  };

  useEffect(() => {
    const media = window.matchMedia("(max-width: 48em)");
    const setupTopNav = () => {
      if (media.matches) {
        //mobile
        topNavMenu.current && topNavMenu.current.setAttribute("inert", "");
        topNavMenu.current && (topNavMenu.current.style.transition = "none");
      } else {
        //desktop
        closeMobileMenu();
        topNavMenu.current && topNavMenu.current.removeAttribute("inert");
      }
    };
    setupTopNav();
    media.addEventListener("change", setupTopNav);
    return () => media.removeEventListener("change", setupTopNav);
  });

  return (
    <div className="header">
      <div className="topnav">
        <h2 className="topnav__logo">THE PLANETS</h2>
        <nav>
          <span id="nav-label" hidden>
            Navigation
          </span>

          <button
            id="btnOpen"
            className="topnav__open"
            aria-expanded="false"
            aria-labelledby="nav-label"
            onClick={handleBtnOpen}
            ref={btnOpen}
          >
            <img src={hamburgerMenuIcon} alt="" width="24" height="17" />
          </button>
          <button
            className="topnav__close"
            id="btnClose"
            aria-label="Close"
            onClick={handleBtnClose}
            ref={btnClose}
          >
            <img src={hamburgerMenuIcon} alt="" width="24" height="17" />
          </button>

          <div
            className="topnav__menu"
            role="dialog"
            aria-labelledby="nav-label"
            ref={topNavMenu}
          >
            <ul className="topnav__links">
              <li className="topnav__item">
                <a href="" className="topnav__link --mercury">
                  Mercury
                </a>
              </li>
              <li className="topnav__item">
                <a href="" className="topnav__link --venus">
                  Venus
                </a>
              </li>
              <li className="topnav__item">
                <a href="" className="topnav__link --earth">
                  Earth
                </a>
              </li>
              <li className="topnav__item">
                <a href="" className="topnav__link --mars">
                  Mars
                </a>
              </li>
              <li className="topnav__item">
                <a href="" className="topnav__link --jupiter">
                  Jupiter
                </a>
              </li>
              <li className="topnav__item">
                <a href="" className="topnav__link --saturn">
                  Saturn
                </a>
              </li>
              <li className="topnav__item">
                <a href="" className="topnav__link --uranus">
                  Uranus
                </a>
              </li>
              <li className="topnav__item">
                <a href="" className="topnav__link --neptune">
                  Neptune
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
