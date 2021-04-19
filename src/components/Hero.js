const Hero = () => (
  <div className="hero">
    <div className="hero__image-section">
      <img src="hero-image.png" alt="hero" className="hero__main-image" />
      <div className="hero__button-wrapper -first">
        <div className="hero__button-wrapper -second">
          <button className="hero__button">
            <img src="play-icon.svg" className="hero__button-icon" />
          </button>
        </div>
      </div>
    </div>
    <div className="hero__text-section">
      <h1 className="hero__title">
        Communicate. <br /> Collaborate. Complete.
      </h1>
      <h2 className="hero__subtitle">
        The remote collaboration tool to help you communicate effectively & work
        productively
      </h2>
      <form className="hero__form">
        <label htmlFor="email-input" className="hero__form-label">
          Email address
        </label>
        <input type="text" className="hero__form-input" />
        <div className="hero__form-footer">
          <div className="hero__form-info">
            <div>
              Try Droplr <strong>PRO free for 30 days.</strong>
            </div>
            <div>
              No credit card needed.{" "}
              <a href="/privacy-policy">Privacy Policy</a>
            </div>
          </div>
          <button type="submit" className="hero__form-button">
            Get started
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Hero;
