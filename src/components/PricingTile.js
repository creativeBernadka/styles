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
      className={`pricing-tile__plan-name ${planName === "Free" && "-normal"} ${
        isEnterprise && "-blue"
      }`}
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
          <div>per</div>
          <div>month</div>
        </div>
      </div>
    )}
    <div className="pricing-tile__users">
      {userText ? userText : <UserComponent />}
    </div>
    <FirstLineDescription className="pricing-tile__description-line" />
    <SecondLineDescription className="pricing-tile__description-line" />
    <button className={`pricing-tile__button ${isEnterprise && "-blue"}`}>
      {isEnterprise ? "Contact us" : "Select Plan"}
    </button>
  </div>
);

export default PricingTile;
