const Navbar = () => (
  <div className="navbar">
    <img alt="logo" src="/logo.png" className="navbar__logo" />
    <nav className="navbar__wrapper">
      <ul className="navbar__list">
        <li className="navbar__list-item">Features</li>
        <li className="navbar__list-item">Apps</li>
        <li className="navbar__list-item">Pricing</li>
        <li className="navbar__list-item">Knowledge Base</li>
        <li className="navbar__list-item">Businness</li>
      </ul>
      <button className="navbar__button">Log in</button>
      <button className="navbar__button -purple">Sign up</button>
    </nav>
  </div>
);

export default Navbar;
