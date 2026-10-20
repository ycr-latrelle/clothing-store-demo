import Navigation from "./Navigation";
import IconButton from "../common/IconButton";
import { SearchIcon, BagIcon } from "../common/Icons";
import "./Header.css";

export default function Header({ activeNavId = null }) {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="header__logo" aria-label="VIOLET home">
          VIOLET
        </a>

        <Navigation activeId={activeNavId} />

        <div className="header__actions">
          <span className="header__divider" aria-hidden="true" />
          <IconButton label="Search">
            <SearchIcon />
          </IconButton>
          <span className="header__divider" aria-hidden="true" />
          <IconButton label="Shopping cart">
            <BagIcon />
          </IconButton>
        </div>
      </div>
    </header>
  );
}
