import PlayIcon from "../icons/PlayIcon";

const JoinSection = () => (
  <div className="join-section__wrapper">
    <h2 className="join-section__title">
      Try <strong>Droplr</strong> for <strong>30 days for FREE</strong> and
      check out the unlimited possibilities of Droplr PRO.
    </h2>
    <form className="join-section__form">
      <label htmlFor="email-input" className="join-section__form-label">
        Email address
      </label>
      <div className="join-section__input-wrapper">
        <input type="text" className="join-section__form-input" />
        <button type="submit" className="join-section__form-button">
          Get started
        </button>
      </div>
      <a href="/privacy-policy" className="join-section__link">Privacy Policy</a>
    </form>
  </div>
);

export default JoinSection;
