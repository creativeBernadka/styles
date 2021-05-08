import PricingTile from "./PricingTile";

const pricingPlans = [
  {
    price: 0,
    planName: "Free",
    userText: "Individual User",
    FirstLineDescription: ({ className }) => (
      <span className={className}>
        Up to <strong>25</strong> files history
      </span>
    ),
    SecondLineDescription: ({ className }) => (
      <span className={className}>
        Up to <strong>30s</strong> screen recording
      </span>
    ),
  },
  {
    price: 5.99,
    planName: "Personal Use",
    userText: "Individual User",
    FirstLineDescription: ({ className }) => (
      <span className={className}>
        <strong>Unlimited</strong> files history
      </span>
    ),
    SecondLineDescription: ({ className }) => (
      <span className={className}>
        Up to <strong>60s</strong> screen recording
      </span>
    ),
  },
  {
    isBest: true,
    price: 8.29,
    planName: "Pro",
    UserComponent: () => (
      <div className="user-selector">
        <button>-</button>
        <div>5 users</div>
        <button>+</button>
      </div>
    ),
    FirstLineDescription: ({ className }) => (
      <span className={className}>
        <strong>Unlimited</strong> files history
      </span>
    ),
    SecondLineDescription: ({ className }) => (
      <span className={className}>
        <strong>Unlimited</strong> screen recording
      </span>
    ),
  },
  {
    isEnterprise: true,
    price: 0,
    planName: "Enterprise",
    userText: "No User Limit",
    FirstLineDescription: ({ className }) => (
      <span className={className}>Fully customizable</span>
    ),
    SecondLineDescription: ({ className }) => (
      <span className={className}>
        Premium <strong>24/7</strong> customer support
      </span>
    ),
  },
];

const PricingSection = () => (
  <div className="pricing__wrapper">
    <h2>Pricing & plans</h2>
    <div className="pricing__plans">
      {pricingPlans.map((plan) => (
        <PricingTile {...plan} />
      ))}
    </div>
    <a href="/pricing">Check packages & pricing in details</a>
  </div>
);

export default PricingSection;
