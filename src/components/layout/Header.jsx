import { useState } from "react";
import Navigation from "./Navigation";
import IconButton from "../common/IconButton";
import { SearchIcon, BagIcon } from "../common/Icons";
import "./Header.css";

function MenuIcon({ isOpen }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
    >
      {isOpen ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

export default function Header({ activeNavId = null }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

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
    </header>
  );
}
