import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="hero__eyebrow">OUR COLLECTIONS</p>

        <h1 className="hero__title" id="hero-title">
          Wear What
          <br />
          Moves You.
        </h1>

        <p className="hero__description">Timeless pieces. Modern attitude.</p>

        <a className="hero__link" href="/collections">
          <span className="hero__link-line" aria-hidden="true" />
          <span>EXPLORE ALL COLLECTIONS</span>
          <span className="hero__link-arrow" aria-hidden="true">
            →
          </span>
        </a>
      </div>

      <div className="hero__visual">
        <div className="hero__panel">
          <p className="hero__collection-label">
            <span>VIOLET</span>
            <span>SUMMER</span>
            <span>COLLECTION</span>
          </p>
        </div>

        <img
          className="hero__image"
          src="/images/hero-fashion.png"
          alt="VIOLET summer collection fashion model"
          fetchPriority="high"
        />

        <div className="hero__pager">
          <span>01 / 04</span>
          <button type="button" aria-label="Previous collection">
            ←
          </button>
          <button type="button" aria-label="Next collection">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
