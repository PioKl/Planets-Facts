import React, { useRef, useEffect, useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import "../styles/Header.scss";
import hamburgerMenuIcon from "../assets/icon-hamburger.svg";
import { Planet } from "../types/types";

interface PlanetFactsProps {
  planets: Planet[];
}

interface HeaderProps {
  mainRef: React.RefObject<HTMLDivElement>;
  setPlanetIndex: React.Dispatch<React.SetStateAction<number>>;
}

type CombinedProps = HeaderProps & PlanetFactsProps;

const Header: React.FC<CombinedProps> = ({
  mainRef,
  planets,
  setPlanetIndex,
}) => {
  const bodyRef = useRef<HTMLBodyElement>(document.body as HTMLBodyElement);
  const btnOpen = useRef<HTMLButtonElement>(null);
  const btnClose = useRef<HTMLButtonElement>(null);
  const topNavMenu = useRef<HTMLDivElement>(null);

  const [activeButton, setActiveButton] = useState<number>(0);

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

  const handleButtonLink = (id: number) => {
    closeMobileMenu();
    topNavMenu.current && topNavMenu.current.removeAttribute("inert");

    const media = window.matchMedia("(max-width: 48em)");
    if (media.matches) {
      //mobile
      setTimeout(() => {
        setPlanetIndex(id);
      }, 500);
    } else {
      //desktop
      setActiveButton(id);
      setPlanetIndex(id);
    }
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
            className="topnav__open topnav__button"
            aria-expanded="false"
            aria-labelledby="nav-label"
            onClick={handleBtnOpen}
            ref={btnOpen}
          >
            <img src={hamburgerMenuIcon} alt="" width="24" height="17" />
          </button>
          <button
            className="topnav__close topnav__button"
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
              {planets.map((planet, id) => (
                <li
                  className="topnav__item"
                  key={planet.name}
                  onClick={() => handleButtonLink(id)}
                >
                  <button
                    type="button"
                    className={`topnav__link --${planet.name.toLowerCase()} ${
                      activeButton === id ? "--active" : ""
                    }`}
                  >
                    {planet.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
