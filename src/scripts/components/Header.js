"use strict";
import Link from "./Link";

const Header = ({ currentUser, goTo, logout }) => {
  const { avatar, coach, email, id, name } = currentUser;
  const isLoggedIn = (id) ? true : false;

  return (
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">
          <a href="#!" className="mdl-navigation__link"
            onClick={() => goTo("MARKETPLACE")}
          >
            FitBird
          </a>
        </span>
      </div>
    </header>
  );
};

export default Header
