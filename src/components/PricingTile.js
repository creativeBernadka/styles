import classnames from "classnames";

const PricingTile = ({
  price,
  planName,
  UserComponent,
  userText,
  FirstLineDescription,
  SecondLineDescription,
  isEnterprise,
  isBest,
}) => (
  <div className="pricing-tile__wrapper">
    {isBest && (
      <div className="pricing-tile__best-tag">
        <div className="pricing-tile__best-tag-text">BEST</div>
      </div>
    )}
    <div
      className={classnames("pricing-tile__plan-name", {
        "-primary": planName === "Free",
        "-secondary": isEnterprise,
      })}
    >
      {planName}
    </div>
    {isEnterprise ? (
      <div className="pricing-tile__contact-us">Contact us</div>
    ) : (
      <div className="pricing-tile__price">
        <span className="pricing-tile__dollar-sign">$</span>
        <span className="pricing-tile__value">{price}</span>
        <div className="pricing-tile__month-text">
          <div>
            per
            <br />
            month
          </div>
        </div>
      </div>
    )}
    <div className="pricing-tile__users">
      {userText ? userText : <UserComponent />}
    </div>
    <FirstLineDescription className="pricing-tile__description-line" />
    <SecondLineDescription className="pricing-tile__description-line" />
    <button
      className={classnames("pricing-tile__button", {
        "-secondary": isEnterprise,
      })}
    >
      {isEnterprise ? "Contact us" : "Select Plan"}
    </button>
  </div>
);

export default PricingTile;
