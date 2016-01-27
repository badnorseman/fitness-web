"use strict";
import Link from "./Link";

const Header = ({ currentUser, goTo, logout }) => {
  const logo = "https://s3.amazonaws.com/images.fitbird.us/development/system/57.png";
  const { avatar, coach, email, id, name } = currentUser;
  const isLoggedIn = (id) ? true : false;
  const styles = {
    avatar: {
      height: "32px",
      width: "32px",
    },
    logo: {
      height: "48px",
      width: "48px",
    }
  };

  return (
    <header className="mdl-layout__header mdl-layout__header--seamed">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">
          <Link styles="mdl-navigation__link"
            onClick={() => goTo("MARKETPLACE")}>
            <img src={logo} alt="" style={styles.logo} />
            &nbsp;FitBird
          </Link>
        </span>
        <div className="mdl-layout-spacer"></div>
        {coach && <Link styles="mdl-navigation__link"
          onClick={() => goTo("DASHBOARD")}>Dashboard</Link>}
        <nav className="mdl-navigation">
          {!isLoggedIn && <Link styles="mdl-navigation__link"
            onClick={() => goTo("LOGIN")}>Log in</Link>}
          {!isLoggedIn && <Link styles="mdl-navigation__link"
            onClick={() => goTo("SIGNUP")}>Sign up</Link>}
          {isLoggedIn && <div>
            <img src={avatar} alt="" style={styles.avatar} />
            <button id="menu"
              className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon header__menu-button">
              <i className="zmdi zmdi-caret-down"></i>
            </button>
            <ul htmlFor="menu"
              className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right">
              <li><Link styles="mdl-menu__item"
                onClick={() => goTo("ACCOUNT")}>Account</Link></li>
              <li className="mdl-menu__item" onClick={logout}>Log out</li>
            </ul>
          </div>}
        </nav>
      </div>
    </header>
  );
};

export default Header
