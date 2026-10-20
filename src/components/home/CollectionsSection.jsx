import { useState } from "react";
import "./CollectionsSection.css";

const FILTERS = [
  "ALL",
  "TOPS",
  "BOTTOMS",
  "OUTERWEAR",
  "ACCESSORIES",
  "FEATURED",
];

const COLLECTIONS = [
  {
    id: "tops",
    title: "TOPS",
    text: ["Essential layers", "for every fit."],
    image: "/images/tops-fashion.png",
    href: "/collections/tops",
    theme: "lilac",
  },
  {
    id: "bottoms",
    title: "BOTTOMS",
    text: ["Comfort meets", "function."],
    image: "/images/bottoms-fashion.png",
    href: "/collections/bottoms",
    theme: "yellow",
  },
  {
    id: "outerwear",
    title: "OUTERWEAR",
    text: ["Layer up in", "style."],
    image: "/images/outerwear-fashion.png",
    href: "/collections/outerwear",
    theme: "lilac",
  },
  {
    id: "accessories",
    title: "ACCESSORIES",
    text: ["Small details.", "Big impact."],
    image: "/images/accessories-fashion.png",
    href: "/collections/accessories",
    theme: "violet",
  },
];

export default function CollectionsSection() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [sortBy, setSortBy] = useState("latest");

  const visibleCollections =
    activeFilter === "ALL" || activeFilter === "FEATURED"
      ? COLLECTIONS
      : COLLECTIONS.filter((item) => item.title === activeFilter);

  return (
    <section className="collections" aria-label="Shop by collection">
      <div className="collections__bar">
        <ul className="collections__filters" role="tablist">
          {FILTERS.map((filter) => (
            <li key={filter} role="presentation">
              <button
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                className={`collections__filter ${
                  activeFilter === filter ? "is-active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>

        <label className="collections__sort">
          <span>SORT BY:</span>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="latest">LATEST</option>
            <option value="popular">POPULAR</option>
            <option value="price-low">PRICE: LOW</option>
            <option value="price-high">PRICE: HIGH</option>
          </select>
        </label>
      </div>

      <div className="collections__grid">
        {visibleCollections.map((item) => (
          <article
            key={item.id}
            className={`collection-card collection-card--${item.theme}`}
          >
            <div className="collection-card__text">
              <h3 className="collection-card__title">{item.title}</h3>
              <p className="collection-card__desc">
                {item.text[0]}
                <br />
                {item.text[1]}
              </p>
              <span className="collection-card__line" aria-hidden="true" />
            </div>

            <img
              className="collection-card__image"
              src={item.image}
              alt={`${item.title.toLowerCase()} collection`}
              loading="lazy"
            />

            <a className="collection-card__link" href={item.href}>
              <span>VIEW COLLECTION</span>
              <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
