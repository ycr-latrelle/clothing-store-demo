import { navigationLinks } from "../../data/navigation";
import "./Navigation.css";

export default function Navigation({ activeId = null, onNavigate }) {
  return (
    <nav id="mobile-navigation" className="navigation" aria-label="Primary">
      <ul className="navigation__list">
        {navigationLinks.map(({ id, label, href }) => {
          const isActive = id === activeId;

          return (
            <li key={id}>
              <a
                href={href}
                className={`navigation__link${
                  isActive ? " navigation__link--active" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
                onClick={onNavigate}
              >
                <span>{label}</span>
                <span className="navigation__arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
