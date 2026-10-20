import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import IconButton from "../common/IconButton";
import { SearchIcon, BagIcon } from "../common/Icons";
import "./Header.css";

const MOBILE_BREAKPOINT = 760;

function MenuIcon({ isOpen }) {
  return (
    <svg
      className={`menu-icon${isOpen ? " menu-icon--open" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path className="menu-icon__line menu-icon__line--top" d="M4 7h16" />
      <path className="menu-icon__line menu-icon__line--middle" d="M4 12h16" />
      <path className="menu-icon__line menu-icon__line--bottom" d="M4 17h16" />
    </svg>
  );
}

export default function Header({ activeNavId = null }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  // Close on Esc, lock page scroll while the menu is open
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  // Close if the window grows to desktop size
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > MOBILE_BREAKPOINT) setIsMenuOpen(false);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header__inner">
        <a
          href="/"
          className="header__logo"
          aria-label="VIOLET home"
          onClick={closeMenu}
        >
          VIOLET
        </a>

        <div
          className={`header__navigation${
            isMenuOpen ? " header__navigation--open" : ""
          }`}
        >
          <Navigation activeId={activeNavId} onNavigate={closeMenu} />
        </div>

        <div className="header__actions">
          <span className="header__divider" aria-hidden="true" />

          <IconButton label="Search">
            <SearchIcon />
          </IconButton>

          <span className="header__divider" aria-hidden="true" />

          <IconButton label="Shopping cart">
            <BagIcon />
          </IconButton>

          <button
            type="button"
            className="header__menu-toggle"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </div>

      <div
        className={`header__backdrop${
          isMenuOpen ? " header__backdrop--visible" : ""
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </header>
  );
}
