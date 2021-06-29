import { useState } from "react";
import classnames from "classnames";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar">
      <img alt="logo" src="/logo.png" className="navbar__logo" />
      <button className="navbar__burger" onClick={() => setShowMenu(!showMenu)}>
        <div className="navbar__burger-bar" />
        <div className="navbar__burger-bar" />
        <div className="navbar__burger-bar" />
      </button>
      <nav
        className={classnames("navbar__wrapper", { "-displayed": showMenu })}
      >
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
};

export default Navbar;
